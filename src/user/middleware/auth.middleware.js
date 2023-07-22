import  jwt  from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {
    const authHeader = req.headers?.authotization;
    if (!authHeader) {
        return res.status(401).json({ error: "You must logged in to perfom this action"});
    }
    const token = authHeader.split(" ")[1];
    try {
        const {user_id} = jwt.verify(token, process.env.JWT_SECRET)
        req.user_id = user_id;
        next();
    } catch (error) {
        return res.status(401).json({ error: "Invalid Token"});
    }
}