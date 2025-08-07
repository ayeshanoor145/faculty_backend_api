import PublicationModel from "../models/publications.js";

const getPublications = async (req, res) => {
  try {
    const publications = await PublicationModel.find();
    res.status(200).json({ message: "Publications fetched successfully", data: publications, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

const getPublication = async (req, res) => {
  try {
    const publication = await PublicationModel.findById(req.params.id);
    if (!publication) return res.status(404).json({ message: "Publication not found", data: null, error: null });
    res.status(200).json({ message: "Publication fetched successfully", data: publication, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

const createPublication = async (req, res) => {
  try {
    const publication = new PublicationModel(req.body);
    await publication.save();
    res.status(201).json({ message: "Publication created successfully", data: publication, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

const updatePublication = async (req, res) => {
  try {
    const publication = await PublicationModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!publication) return res.status(404).json({ message: "Publication not found", data: null, error: null });
    res.status(200).json({ message: "Publication updated successfully", data: publication, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

const deletePublication = async (req, res) => {
  try {
    const publication = await PublicationModel.findByIdAndDelete(req.params.id);
    if (!publication) return res.status(404).json({ message: "Publication not found", data: null, error: null });
    res.status(200).json({ message: "Publication deleted successfully", data: publication, error: null });
  } catch (error) {
    res.status(500).json({ message: "Internal server error", data: null, error: error.message });
  }
};

export { getPublications, getPublication, createPublication, updatePublication, deletePublication };