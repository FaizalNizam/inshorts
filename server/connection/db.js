import mongoose from "mongoose"


const connection=async()=>{
    try{
        const URL=`mongodb+srv://faizalnizam:Angrybird33@inshorts-clone.lnk3d.mongodb.net/INSHORTS?retryWrites=true&w=majority`
        await mongoose.connect(URL,{useNewUrlParser:true})
        console.log('Database connected successfully')
    }
    catch(error){
        console.log('Error while connecting with database',error)
    }
   
}

export default connection 