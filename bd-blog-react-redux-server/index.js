const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
const jwt = require('jsonwebtoken'); 
require('dotenv').config();



const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


//db connect 


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pyj8wdj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })


// jwt function 

const verifyJwt = (req, res, next) => {

    try{
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).send('unAuthorize access')
        }
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.ACCESS_TOKEN, function (err, decoded) {
            if (err) {
                return res.status(403).send({ message: 'forbidden access' })
            }
            req.decoded = decoded;
            next();
        })
    } 
    catch(err){
        return res.status(401).send({message: err.message});
    }

}


const run = async()=>{
    try{

        //db table 
        const userCollection = client.db(`${process.env.DB_USER}`).collection("users");
        const blogsCollection = client.db(`${process.env.DB_USER}`).collection("blogs");
        const categoriesCollection = client.db(`${process.env.DB_USER}`).collection("categories");


 
         // jwt api
         app.get('/jwt', async (req, res) => {
            try{
                const email = req.query.email;
                const query = { email: email }
                const user = await userCollection.findOne(query);
                
                if (user) {
                    const token = jwt.sign({ email }, process.env.ACCESS_TOKEN, { expiresIn: '48h' });
                    console.log(token)
                    return res.send({ success: true, accessToken: token });
                } 
                return res.status(403).send({ success: false, message: "Forbidden Access Token", accessToken: ""})
            }
            catch(error){
                return res.status(433).send({ success: false, message: "Invalid JWKS in Application"})
            }


        })
 


        // user registration 
        app.post("/users", async(req, res)=>{
            try{
                const userData = req?.body 
                const isUserExists = await userCollection?.findOne({email: userData?.email})
                if(!isUserExists) {
                    const result = await  userCollection?.insertOne(userData);
                if(result?.acknowledged){
                    res.send({
                        success: true,
                        message: "User successfully registered"
                    });
                }else{
                    res.send({
                        success: false,
                        message: "Something went wrong, please try again later"
                    });
                }
                    
                } else{
                    res.send({
                        success: true,
                        message: "Login Successfully"
                    });
                }
                
            }
            catch(err){
                res.send({
                    success: false,
                    message: "server internal error, please try again later"
                });
            }
        })



         app.get("/blogs", async (req, res) => {
            const cursor = blogsCollection.find({});
            const product = await cursor.toArray();
      
            res.send({ status: true, data: product });
          });


         app.get("/blogs/:_id", async (req, res) => {
            const id = req.params._id;
            console.log(id)
            const query = {
                _id: new ObjectId(id)
            }
            const cursor = blogsCollection.findOne(query);
            const product = await cursor;
      
            res.send({ status: true, data: product });
          });


          //Categories

          app.get("/categories", async(req, res) => {
            const categories = await categoriesCollection.find({}).toArray();
            res.send({ status: true, data: categories });


          })




    }
    finally{

    }
}
run().catch(console.dir);

app.get('/', (req, res) => {
    res.send('simple server is running');
});



app.listen(port, () => {
    console.log(`simple server running on prot ${port}`);
})
