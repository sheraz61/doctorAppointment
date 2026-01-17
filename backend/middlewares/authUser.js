import jwt from 'jsonwebtoken'


// user auth middleware
export const authUser = async (req, res, next) => {
    try {
        const { token } = req.headers
        if (!token) {
            return res.json({
                success: false,
                message: 'Login first unautherized request...'
            })
        }

        const token_decode = jwt.verify(token, process.env.JWT_SECRET)
        // console.log(token_decode.id);
        req.userId = token_decode.id
       
        
        next()
    } catch (error) {
        console.log(error);
        res.json({
            success: false,
            message: error.message
        })
    }
}