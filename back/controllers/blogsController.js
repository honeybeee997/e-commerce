const blogs = require("../models/blogModel");
const factory = require("./factory");

const identifier = "blogs";

exports.getAll = factory.getAll(blogs);
exports.getOne = factory.getOne(blogs, identifier);
exports.create = factory.createOne(blogs, identifier);
exports.update = factory.updateOne(blogs, identifier);
exports.delete = factory.deleteOne(blogs, identifier);
