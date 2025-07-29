import Users from "../models/users.js";
import mongoose from "mongoose";
// Controller to handle user-related operations

let getUsers = async (req, res) => {
    try {
        //Fetch users from the database
        const users = await Users.find()
            .select(["name", "designation", "subject", "majorSpecialization", "researchArea", "email", "contactNumber", "biosketch"])
            .skip(5) // Skip the first 5 documents
            .limit(5) // Limit the result to 5 documents
            .sort({ _id: -1 }); // Sort by _id in descending order

        res.status(200).json({
            message: "Users fetched successfully",
            data: users,
            error: null,
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server error",
            data: null,
            error: error.message,

        })
    }
}


let getUser = async (req, res) => {
    try {
        let id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                message: "Invalid user ID",
                data: null,
                error: null,
            })
        }
        //Fetch users from the database by id
        const user = await Users.findById(id)
        if (!user) {
            return res.status(404).json({
                message: "Users not found",
                data: null,
                error: null,
            })
        }
        res.status(200).json({
            message: "Users fetched successfully by ID",
            data: user,
            error: null,
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server error",
            data: null,
            error: error.message,
        })
    }
}


let deleteUsers = async (req, res) => {
    try {
        let id = req.params.id;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                message: "Invalid user ID",
                data: null,
                error: null,
            })
        }
        //Fetch users from the database by id
        const user = await Users.findByIdAndDelete(id)
        if (!user) {
            return res.status(404).json({
                message: "User not found",
                data: null,
                error: null,
            })
        }
        res.status(200).json({
            message: "Users deleted successfully",
            data: user,
            error: null,
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server error",
            data: null,
            error: error.message,
        })
    }
}


let createUsers = async (req, res) => {

    try {
        let {
            name,
            designation,
            subject,
            majorSpecialization,
            researchArea,
            email,
            contactNumber,
            biosketch
        } = req.body; // Destructure query parameters
        let validationErrors = [];
        if (!name) {
            validationErrors.push("Name is required");
        }
        if (!designation) {
            validationErrors.push("Designation is required");
        }
        if (!subject) {
            validationErrors.push("Subject is required");
        }
        if (!majorSpecialization) {
            validationErrors.push("Major Specialization is required");
        }
        if (!researchArea) {
            validationErrors.push("Research Area is required");
        }
        if (!email) {
            validationErrors.push("Email is required");
        }
        if (!contactNumber) {
            validationErrors.push("Contact Number is required");
        }
        if (!biosketch) {
            validationErrors.push("Biosketch is required");
        }
        // If there are validation errors, return them
        if (validationErrors.length > 0) {
            return res.status(400).json({
                message: "Validation errors",
                data: null,
                error: validationErrors,
            });
        }
        let userInfo = req.body;
        const user = Users(userInfo);     //create a new user instance
        await user.save();    //save the user to database
        res.status(201).json({
            message: "User created successfully",
            data: user,
            error: null,
        })

    }
    catch (error) {
        res.status(500).json({
            message: "Internal server error",
            data: null,
            error: error.message,
        })
    }

}


let updateUsers = async (req, res) => {
    try {
        let id = req.params.id;
        let userInfo = req.body;

        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).json({
                message: "Invalid user ID",
                data: null,
                error: null,
            })
        }
        //Fetch users from the database by id
        const user = await Users.findByIdAndUpdate(id, userInfo,
            { new: true } //Return the updated document
        );
        if (!user) {
            return res.status(404).json({
                message: "Users not found",
                data: null,
                error: null,
            })
        }
        res.status(200).json({
            message: "Users updated successfully by ID",
            data: user,
            error: null,
        })
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server error",
            data: null,
            error: error.message,
        })
    }
}

export { getUsers, getUser, deleteUsers, createUsers, updateUsers };