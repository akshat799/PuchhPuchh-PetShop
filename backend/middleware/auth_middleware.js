const jwt = require('jsonwebtoken');

const auth = async(req,res,next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];

        let decodedData;

        if(token) {
            decodedData = jwt.verify(token , 'test');

            req.userid = decodedData?.id;
        }

        next();
    } catch (error) {
        console.log(error);
    }
}

const authRole = async(email) => {
    const token = req.headers.authorization.split(" ")[1];
    let decodedData;
    decodedData = jwt.verify(token, 'test');
    
    return (req,res,next) =>{
        if(req.body.email !== email){
            return res.status(401).json({message: "Not Allowed Access"});
            next();
        }
    }
}

module.exports = {
    auth,
    authRole
}