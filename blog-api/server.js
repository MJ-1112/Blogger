import express from 'express';
import dotenv from 'dotenv';
import blog from './models/Blog.model.js';

dotenv.config();
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Get request working");
});

app.post("/new",async(req,res)=>{
    try {
        const newblog = await blog.create(req.body);
        res.status(201).json(newblog)

        
    } catch (error) {
        res.status(401).json({error});
        
    }
})
app.get("/blogs",async(req,res)=>{
    try {
        const getblogs = await blog.find();
        res.status(201).json(getblogs)

        
    } catch (error) {
        res.status(401).json({error});
        
    }
})
app.get("/blogs/:id",async(req,res)=>{
    try {
        const { id } = req.params;
        const getblog = await blog.findById(id);
        res.status(201).json(getblog)

        
    } catch (error) {
        res.status(401).json({error});
        
    }
})
app.put("/blogs/:id",async(req,res)=>{
    try {
        const { id } = req.params;
        const editblog = await blog.findByIdAndUpdate(id,req.body);
        res.status(201).json(editblog)

        
    } catch (error) {
        res.status(401).json({error});
        
    }
})
app.delete("/blogs/:id",async(req,res)=>{
    try {
        const { id } = req.params;
        const deleteblog = await blog.findByIdAndDelete(id);
        res.status(201).json(deleteblog)

        
    } catch (error) {
        res.status(401).json({error});
        
    }
})

app.listen(port, ()=>{
    console.log(`Server is running on port: http://localhost:${port}`);
});