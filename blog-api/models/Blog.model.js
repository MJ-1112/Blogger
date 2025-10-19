import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();

mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDB connected");
})
.catch((error) => {
    console.error("MongoDB connection error:", error);
});
const BlogSchema = mongoose.Schema({
    author:{
        type:String,
        required:(true,"Must enter the author of the blog")
    },
    content:{
        type:String,
        required:true
    }

});
const blog = mongoose.model("Blog", BlogSchema);
export default blog;