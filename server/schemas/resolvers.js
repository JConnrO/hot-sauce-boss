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
        // STEPHEN WAS HERE!!! I'm still working on this
        // user: async (parent, args, context) => {
        //     if (context.user) {
        //         const userLogin = await User.findById(context.user._id).populate({

        //         })
        //     }
        // }
    },

    Mutation: {
        addUser: async (parent, args) => {
            const userName = await User.create(args);
            const token = signToken(userName);

            return { token, user };
        },
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
        addProduct: async (parent, args) => {
            const product = await Product.create(args);

            return product;
        },
        updateProduct: async (parent, args, { _id }) => {
            //   // vriable of all fields object based
            //   const arg = { name, description, quantity, price };
            //   // paass variable inside args

            return Product.findByIdAndUpdate(_id, args, { new: true });
        },
    },
};

module.exports = resolvers;
