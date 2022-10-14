const collections = require("../models/collectionModel");
const factory = require("./factory");

const identifier = "collections";

exports.getAll = factory.getAll(collections);
exports.create = factory.createOne(collections, identifier);
exports.getOne = factory.getOne(collections, identifier);
exports.updateOne = factory.updateOne(collections, identifier);
exports.delete = factory.deleteOne(collections, identifier);
