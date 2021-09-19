const { AuthenticationError } = require("apollo-server-express");
const { User, Product, Category } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
    Query: {
        categories: async () => {
            return await Category.find();
        },
        products: async (parent, { category, name }) => {
            const params = {};

            if (category) {
                params.category = category;
            }

            if (name) {
                params.name = {
                    $regex: name,
                };
            }

            return await Product.find(params).populate("category");
        },
        product: async (parent, { _id }) => {
            return await Product.findById(_id).populate("category");
        },
        user: async (parent, args, context) => {
            return await User.find(user => user.id === args.id)
        },
        users: async () => {
            // if (!user) throw new AuthenticationError('you must be logged in');
            return await User.find()
        }
    },
    //Checks if user exists
    //throw error if exists
    //User authentication
    Mutation: {
        //Adds user
        addUser: async (parent, args) => {
            const userName = await User.create(args);
            const token = signToken(userName);

            return { token, userName };
        },
        //Logs user in 
        login: async (parent, { email, password }) => {
            const userName = await User.findOne({ email });

            if (!userName) {
                throw new AuthenticationError("Invalid user!");
            }

            const correctPw = await userName.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError("Invalid password!");
            }

            const token = signToken(userName);

            return { token, userName };
        },
        // add a product
        addProduct: async (parent, args) => {
            const product = await Product.create(args);

            return product;
        },
        // update products by their ID
        updateProduct: (parent, args, context, info) => {
            console.log(args);
            Product.findByIdAndUpdate(
                args._id,
                {
                    $set: {
                        name: args.productInput.name,
                        description: args.productInput.description,
                        quantity: args.productInput.quantity,
                        price: args.productInput.price,
                    },
                },
                { new: true }
            )
                .then((result) => {
                    console.log(result);
                    return {
                        ...result._doc,
                    };
                })
                .catch((err) => {
                    throw err;
                });
        },
    },
};

module.exports = resolvers;



