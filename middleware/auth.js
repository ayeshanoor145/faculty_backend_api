import jwt from "jsonwebtoken";

let verifyToken = (req, res, next) => {
    try {
        let token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({
                message: "Token not provided",
                data: null,
                error: "No token provided",
            });
        }
        token = token.split(" ")[1]; // Remove 'Bearer ' prefix
        jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    message: "Authentication failed",
                    data: null,
                    error: err.message,
                });
            }

            req.user = decoded; // Attach user info to request object
            next();
        });
    } catch (error) {
        return res.status(500).json({
            message: "Internal server error",
            data: null,
            error: error.message,
        });
    }
};
export default verifyToken;
