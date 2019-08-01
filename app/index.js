const express = require("express")
const mongoose = require("mongoose")
const http = require("http")
// const cors = require("")

const app = express()
app.server= http.createServer(app)

const bodyParser = require("body-parser")
const port = 3000 || process.env.PORT

// models
const User = require("./model/create")

app.use(bodyParser.json({
    limit: "100kb"
}))


//conect to db
 mongoose.connect("mongodb://mongo:27017/liveperson", {useMongoClient : true})
                    .then(()=> console.log(" db connection established"))
                    .catch((err) => ()=> console.log(" error while connecting to db"))


//declare endpoints

//debugging purpose
app.get("/", (req, res)=>{
    res.send("welcome")
})

// Create a user - Post
app.post('/', (req, res)=>{

    const User = new create(req.body)

    User.save((err)=> {
        if(err){ return res.status(400).json({err}) }

        res.status(200).json({
            message: "user created sucessfully"
        })
    })
})

//Update User  - PUT
app.put("/", (req, res) =>{

    User.findOneAndUpdate(req.params.id, req.body, (err, user)=>{
        if (err) { return res.status(400).json(err) }

        res.status(200).json({ message: "update successful"})
    })
})


// Read user with its id - GET
app.get("/:id", (req,res) => {
    User.findById(req.params.id, (err, user) =>{
        if(err){ return res.status(400).json({err}) }

        res.status(200).json(user)
    })
})



//Delete a user by id
app.delete("/:id", (req, res) => {
    User.remove({ _id: req.params.id }, (err, user) => {
        if (err) { return res.status(400).json(err) }
        res.status(200).json({ message : "user successfully deleted "})
      });
})




app.listen(port, ()=> console.log("server started at "+ port))