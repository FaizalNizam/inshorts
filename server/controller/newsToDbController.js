import { data } from "../constants/data.js"
import news from "../model/newsModel.js"


const newsToDb=async()=>{
    try{
       await news.deleteMany({})
       await news.insertMany(data)
       console.log('Data successfully imported to database')

    }catch(error){
        console.log('Error has occured',error)
    }
}

export default newsToDb