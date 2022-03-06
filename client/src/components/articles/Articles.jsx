import React,{useEffect,useState} from 'react'
import getNews from '../../service/Api'
import Cards from './Cards'
import InfiniteScroll from 'react-infinite-scroll-component'


function Articles() {

    const [news,setNews]=useState([])
    const [page,setPage]= useState(0)

    useEffect(()=>{
        dailyNews(page)

    },[page])

    const dailyNews=async()=>{
        let response=await getNews(page)
        setNews([...news,...response.data])
        console.log(news)
     
    }

  return (
    <InfiniteScroll
    dataLength={news.length}
    next={()=>setPage(page=>page+1)}
    hasMore={true}
    >
     {
      news.map(data=>(
       <Cards data={data}/>
      ))
     }
    </InfiniteScroll>
  )
}

export default Articles