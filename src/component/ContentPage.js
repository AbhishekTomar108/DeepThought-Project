import React, {useState,useEffect} from 'react'
import PropTypes from 'prop-types'
import AssetPage from "./AssetPage"

const ContentPage = props => {

  const [title, settitle] =useState("");
  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [Assets, setAssets] = useState([]);
  const [Assettitle, setAssettitle] = useState([""]);
  const [arrow, setarrow] = useState("left");
   
  useEffect(()=>{props.data.map(data=>{
    settitle(data.title);
   
          data.tasks.map(taskdata=>{
            settaskTitle(taskdata.task_title);
            settaskDescription(taskdata.task_description);
            setAssets(taskdata.assets);
            
          })
          let assettitle = [""];
          Assets.map((data,index)=>{
            
            assettitle[index] = data.asset_title;
            
 })
          
          updateAssetTitle(assettitle);
   })},[Assets]);

   const updateAssetTitle=(assettitle)=>{
    setAssettitle(assettitle);
   }

   const toggleJourneyBoard =()=>{
    let JourneyCardLower = document.getElementsByClassName('journey-card-lower')[0];
    let JourneyCard = document.getElementsByClassName('journey-card')[0];
    let BlueBox = document.getElementsByClassName("blue-box")[0];
    
    
    if(arrow==="left"){
      setarrow("right");
    
    JourneyCard.style.left=0;
    JourneyCardLower.style.display="block";  
    BlueBox.style.display="none";
    }

    if(arrow==="right"){
      setarrow("left");
    JourneyCard.style.left="-20vw";
    JourneyCardLower.style.display="none";  
    BlueBox.style.display="flex";
    }
   }
   
  return (
    <div className='container'>
      <div className='title'>{title}
     
      <button id='submit-btn'>Submit Task</button>
      </div>

      <div className='task'>
          <h1>{taskTitle}</h1>
          <p>{taskDescription}</p>
      </div>

      <div className='journey-board'>
        <div className='journey-card'>
          <div id='journey-card-top'>
            Journey Board 
           {arrow=="left"? <button id="arrow-btn" onClick={toggleJourneyBoard}>&larr;</button>:<button id="arrow-btn" onClick={toggleJourneyBoard}>&rarr;</button>}
          </div>

            <div className='blue-box'>1</div>
          <div className='journey-card-lower'>
            <li style={{fontWeight: "700",marginBottom:"20px"}}>{taskTitle}</li>
          {Assettitle.map((data,index)=>{
            {return <li key={index}>{data}</li>}
          })}
          </div>
        </div>
      </div>

      <div className='notice-board'>
        <img src={require('../image/cross-img.png')}  id="cross-img"/>
        <img src={require('../image/notice-board-img.png')}  id="notice-board-img"/>
        <div className='notice-left-box'></div>
      </div>

      <div className='card-box'>
      {Assets.length>0 && Assets.map((data,index)=>{
       
       { return<div key={data.asset_id}>
        
        <AssetPage assetTitle={data.asset_title}
        assetDescription={data.asset_description}
        assetContent={data.asset_content}/>
       </div>}
      })}
   
    </div>

<div className='page-last-group-img'>
  <div id='question-group-img'>
  <img src={require('../image/blue-circle-img.png')}  className="blue-circle-img"/>
  <img src={require('../image/question-img.png')}  className="pos-absolute" id="question-img"/>
  </div>

  <div id='meeting-group-img'>
  <img src={require('../image/blue-circle-img.png')}  className="blue-circle-img"/>
  <img src={require('../image/meeting-img.png')}  className="pos-absolute" id="meeting-img"/>
  </div>

  
  <div id='schedule-group-img'>
  <img src={require('../image/blue-circle-img.png')}  className="blue-circle-img"/>
  <img src={require('../image/schedule-img.png')}  className="pos-absolute" id="schedule-img"/>
  </div>
</div>

      </div>


  )
}

ContentPage.propTypes = {}

export default ContentPage