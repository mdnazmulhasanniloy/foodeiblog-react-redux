const express = require('express');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const cors = require('cors');
require('dotenv').config();



const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());


//db connect 


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.pyj8wdj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })



const run = async()=>{
    try{

        //db table 
        const blogsCollection = client.db(`${process.env.DB_USER}`).collection("blogs");
 





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
