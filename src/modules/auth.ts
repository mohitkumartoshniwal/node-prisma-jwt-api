import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const comparePasswords = (password, hashedPassword) => {
    return bcrypt.compare(password, hashedPassword);
};

export const hashPassword = (password) => {
    return bcrypt.hash(password, Number(process.env.SALT));
};

export const createJWT = (user) => {
    const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET
    );
    return token;
};

export const protect = (req, res, next) => {
    const bearer = req.headers.authorization;

    if (!bearer) {
        res.status(401);
        return res.json({ message: "Not Authorized" });
    }

    const [, token] = bearer.split(" ");

    if (!token) {
        res.status(401);
        return res.json({ message: "Not Valid Token" });
    }

    try {
        const user = jwt.verify(token, process.env.JWT_SECRET);
        req.user = user;
        next();
    } catch (error) {
        console.error(error);
        res.status(401);
        return res.json({ message: "Not Valid Token" });
    }
};
