import news from "../model/newsModel.js"


const newsFromDb = async(request,response) =>{
    try{

        const page=Number(request.query.page)
        const size=Number(request.query.size) 

        let data =await news.find({}).limit(size).skip(size*page)
        response.status(200).json(data)

    }catch(error){
        response.status(500).json(error)
    }

}

export default newsFromDb