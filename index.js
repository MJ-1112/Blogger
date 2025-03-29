import express from 'express';
import bodyParser from 'body-parser';



const app = express();
const port = process.env.PORT||3000;
app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended:true}));
let blogPost = {
    Title: '',
    author: '',
    content: ''
};

let title, author, content;

app.get("/", (req,res)=>{
    res.render("index.ejs");
});

app.post("/submit", (req,res)=>{
    res.render('create.ejs');
});
app.post("/view", (req,res)=>{
    blogPost.Title = req.body['title'];
    blogPost.author = req.body['author'];
    blogPost.content = req.body['content'];
    // console.log(blogPost.Title, blogPost.author, blogPost.content);
    res.render('view.ejs',{
        Title: blogPost.Title,
        author: blogPost.author,
        content: blogPost.content
    });
});

app.post("/view", (req,res)=>{
    res.render('view.ejs', {
        Title: blogPost.Title,
        author: blogPost.author,
        content: blogPost.content
    });
});
app.get("/view", (req,res)=>{
    res.render('view.ejs');
});

app.get("/about", (req,res)=>{
    res.render("about.ejs");
});


app.listen(port, (req,res) =>{
    console.log(`Server is running at port ${port}`);
});
