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
    addProduct: async (parents, args) => {
      const product = await Product.create(args);

      return product;
    },
    updateProduct: async (parent, args) => {
      Product.findByIdAndUpdate(_id, args, {
        new: true,
      });
    },
  },
};

module.exports = resolvers;
