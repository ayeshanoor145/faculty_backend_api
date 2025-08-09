import Users from "../models/users.js";
import mongoose from "mongoose";
// Controller to handle user-related operations

let getUsers = async (req, res) => {
    try {
        //Fetch users from the database
        const users = await Users.find()

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


let deleteUser = async (req, res) => {
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


let deleteUsers = async (req, res) => {
    try {
        const users = await Users.find.deleteMany({});
        if (users.deletedCount === 0) {
            return res.status(404).json({
                message: "No users found to delete",
                data: null,
                error: null,
            });
        }
        res.status(200).json({
            message: "All users deleted successfully",
            data: null,
            error: null,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server error",
            data: null,
            error: error.message,
        });

    }
}



let createUsers = async (req, res) => {
    try {
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

export { getUsers, getUser, deleteUser, deleteUsers , createUsers, updateUsers };