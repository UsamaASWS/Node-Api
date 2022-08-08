const mongoose= require('mongoose');

const blogsSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{ type : String, required: true},
    productImage: { type: String , required:  true},
    discription:{type:String ,require:true},
    text:{type:String ,require:true}
});




module.exports = mongoose.model('blogs',blogsSchema);
