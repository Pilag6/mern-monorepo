import asyncHandler from "../config/asyncHandler.js";
import Model from "../models/Model.js";

/* 
@desc    Create a new model
@route   POST /api/models
@access  Public
*/
const create = asyncHandler(async (req, res) => {
  const model = await Model.create(req.body);
  res.status(201).json(model);
});

/* 
@desc    Get all models
@route   GET /api/models
@access  Public
*/
const getAll = asyncHandler(async (req, res) => {
  const models = await Model.find();
  res.status(200).json(models);
});

/* 
@desc    Get an model by ID
@route   GET /api/models/:id
@access  Public
*/
const getById = asyncHandler(async (req, res) => {
  const model = await Model.findById(req.params.id);
  res.status(200).json(model);
});

/* 
@desc    Update an model
@route   PATCH /api/models/:id
@access  Public
*/
const update = asyncHandler(async (req, res) => {
  const modelUpdated = await Model.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }

    // What is {new: true}?
    // By default, findByIdAndUpdate() returns the original document.
    // To return the document after update you have to pass an option: new: true.
  );
  res.status(200).json(modelUpdated);
});

/* 
@desc    Delete an model
@route   DELETE /api/models/:id
@access  Public
*/
const deleteOne = asyncHandler(async (req, res) => {
  const modelDeleted = await Model.findByIdAndDelete(req.params.id);
  res.status(200).json(modelDeleted);
});

/* 
@desc    Delete all models
@route   DELETE /api/models
@access  Public
*/
const deleteAll = asyncHandler(async (req, res) => {
  await Model.deleteMany();
  res.status(200).json({ message: "All <models> are deleted." });
});

export {
  create,
  getAll,
  getById,
  update,
  deleteOne,
  deleteAll,
};
