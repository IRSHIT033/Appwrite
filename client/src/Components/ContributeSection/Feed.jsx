import {useEffect,useState} from 'react'
import "./feedCard.css"
import FeedCard from './FeedCard'
import {CollectionID,db,appwrite} from "../../Service/Appwritesdkconfig"




const Feed = () => {
    const [dataAll, setdataAll] = useState([]);
    const [Allpic,setAllpic]=useState([]);

    useEffect( () => {
    const getallisuses=async ()=>{
        const data=await db.listDocuments(CollectionID);
        const picData=await appwrite.storage.listFiles('627cf86774dea7873dbe');
          setAllpic(picData.files.reverse());
      
    
        setdataAll(data.documents.reverse());
      
    }
    getallisuses();
    }, [dataAll,Allpic])
 
  return (
    <div className='d-flex flex-column '>
      {dataAll?.map((i,index)=>{
      return(
      <FeedCard  key={index} Author={i.Author} title={i.title} Comments={i.Comments} Desc={i.Desc} Issue={i.Issue} DocumentId={i.$id} picId={Allpic[index]?.$id} />)

      })}
      

    </div>
  )
}

export default Feed