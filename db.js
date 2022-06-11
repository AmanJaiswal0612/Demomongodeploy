const mongoose= require("mongoose")


const connection= mongoose.connect("mongodb+srv://amanjaiswal:aman0612@cluster0.fpuxu.mongodb.net/IMDB");
const MovieSchema= new mongoose.Schema({
    movie: {type : String, required:true},
    rating: Number,
    releasedate: Date,
    earning: {type:Number, default:"1000",min:0,max:10000},
    cast : {type:[String]},
    language:{type:String,enum:["English","Hindi"]}
})
const Movie = mongoose.model("movie",MovieSchema);
 module.exports={Movie,connection}
    
