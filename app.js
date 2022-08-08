const express = require ('express');
const app=express();
const morgan= require('morgan');
const bodyParser = require('body-parser');
const mongoose =require('mongoose');

const orderRoutes= require('./api/routes/orders');
const productRoutes= require('./api/routes/porducts');
const userRoutes=require('./api/routes/user');
const blogRoutes= require('./api/routes/Blogs')
mongoose.connect('mongodb+srv://usamaaslam:usama@1234@cluster0-8mayt.mongodb.net/Test>?retryWrites=true&w=majority', { useNewUrlParser: true,useUnifiedTopology: true }); 
mongoose.Promise=global.Promise;
app.use(morgan('dev'));
app.use('/uploads',express.static('uploads'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req,res,next)=>{
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Request-With, Content-Type, Accept, Authorization");
    if(req.method === 'OPTION'){
       res.header('Access-Control-Allow-Method','PUT,POST,PATCH,DELETE,GET');
       return res.status(200).json({});   
    }
    next();
});

app.use('/products',productRoutes);
app.use('/orders',orderRoutes);
app.use("/user",userRoutes);
app.use("/blogs",blogRoutes);
app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status=404;
    next(error);
})
app.use((error,req,res,next)=>{
    res.status(error.status||500);
    res.json({
        error:{
            message:error.message 
        }
    })
})
module.exports=app;