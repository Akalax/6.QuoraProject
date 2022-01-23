const jwt=require("jsonwebtoken");


const logIn=(value)=>{
    payload={email:value};
    const generatedToken = jwt.sign(payload, "Quora", { expiresIn: "10m" })
}

const authenticate=async (req,res,next)=>{
    let token1 = req.headers[x-api-key]
    let decodedToken = jwt.verify(token, "Quora")
        if (decodedToken) {
            req.userId = decodedToken.userId
            next();
        }
}
const profilePictureChange=async(req,res)=>{
    
    if (req.userId != req.params.userId) {
        return res.status(400).send({ status: false, msg: "you are not authorized to make changes" });
    }
   // .........do profile picture change...................................
}