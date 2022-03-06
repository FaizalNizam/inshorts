import axios from 'axios'

const url='http://localhost:8000'

const getNews=async(page,size=5)=>{
    try{
        return await axios.get(`${url}/news?page=${page}&size=${size}`)
    }catch(error){
        console.log('Error while calling API',error)
    }
    
}

export default getNews
