const jwt=require('jsonwebtoken');
const JWT_SECRET="@abhi@abhi123"
const fetchuser=(req,res,next)=>{
    const token=req.header('auth-token');
    if(!token){
        res.status(401).send({error:'please authenticate user using valid token'});
    }
    try {
    const data=jwt.verify(token,JWT_SECRET);
    req.user=data.user;
    next();
} catch (error) {
    res.status(401).send({error:'please authenticate user using valid token'});
}
}
module.exports=fetchuser;