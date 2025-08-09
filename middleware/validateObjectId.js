import mongoose from "mongoose";

const validateObjectId = (req, res, next) => {
  const id = req.params.id;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      message: "Invalid ID",
      data: null,
      error: null
    });
  }
  next();
};

export default validateObjectId;
