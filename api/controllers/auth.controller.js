import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
 const { username, email, password } = req.body;
    /**validating inputs */
    if(!username || !email || !password || username=== '' || email ==='' || password ===''){
       next(errorHandler(400, 'All fields are required.'));
    };
    /**password hashing */
    const hashPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashPassword,
    });

    try{
        await newUser.save();
        res.json('signup success');
    }catch (error){
        next(error);
    }
    
};