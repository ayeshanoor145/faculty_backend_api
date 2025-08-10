import Users from "../models/users.js";

// Controller to handle user-related operations

let getUsers = async (req, res) => {
    try {
        //Fetch users from the database
        const users = await Users.find()
            .populate([
                "personalDetail",
                "education",
                "employmentRecord",
                "training",
                "book",
                "project",
                "publication",
                "patent",
                "workshop",
                "distinction",
            ]);
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
        // ObjectId validation handled by middleware
        const user = await Users.findById(id)
            .populate([
                "personalDetail",
                "education",
                "employmentRecord",
                "training",
                "book",
                "project",
                "publication",
                "patent",
                "workshop",
                "distinction",
            ]);
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
        // ObjectId validation handled by middleware
        const user = await Users.findByIdAndDelete(id)
            .populate([
                "personalDetail",
                "education",
                "employmentRecord",
                "training",
                "book",
                "project",
                "publication",
                "patent",
                "workshop",
                "distinction",
            ]);
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

let updateUsers = async (req, res) => {
    try {
        let id = req.params.id;
        let userInfo = req.body;
        // ObjectId validation handled by middleware
        const user = await Users.findByIdAndUpdate(id, userInfo,
            { new: true } //Return the updated document
        ).populate([
            "personalDetail",
            "education",
            "employmentRecord",
            "training",
            "book",
            "project",
            "publication",
            "patent",
            "workshop",
            "distinction",
        ]);
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

let createUsers = async (req, res) => {
    try {
        let userInfo = req.body;
        const user = new Users(userInfo); // Use 'new' keyword to create instance
        await user.save(); // Save the user to database

        const populatedUser = await Users.findById(user._id)
            .populate([
                "personalDetail",
                "education",
                "employmentRecord",
                "training",
                "book",
                "project",
                "publication",
                "patent",
                "workshop",
                "distinction",
            ]);

        res.status(201).json({
            message: "User created successfully",
            data: populatedUser || user, // Return populated user if available, otherwise the basic user
            error: null,
        });
    }
    catch (error) {
        res.status(500).json({
            message: "Internal server error",
            data: null,
            error: error.message,
        })
    }
}

export { getUsers, getUser, deleteUser, updateUsers, createUsers };