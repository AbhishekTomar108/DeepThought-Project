import React, {useState, useEffect} from 'react';
import "../style/style.css"
import ContentPage from "./ContentPage"

const First = () => {

  const [data, setData] = useState([]);

  useEffect(()=>{
    fetchDetails();
  },[])

  const fetchDetails = async()=>{
    console.log("fetch ");
    const url = "https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json";
    let fetchdata = await fetch(url);
    console.log(fetchdata);
    let parsedData = await fetchdata.json();

    console.log("data",parsedData);
    setData([parsedData]);
  }
  
  return (
  <>
        <div className="nav">
        <img src={require('../image/deep-thought-img.png')} id="deep-thought-img"/>
        <img src={require('../image/home-img.png')}  className="pos-absolute" id="home-img"/>
        <img src={require('../image/setting-img.png')}  className="pos-absolute" id="setting-img"/>
        <img src={require('../image/alarm-img.png')}  className="pos-absolute" id="alarm-img"/>
        <img src={require('../image/user-img.png')}  className="pos-absolute" id="user-img"/>

        <div className='three-dot pos-absolute'> 
          <div className='dot'></div>
          <div className='dot'></div>
          <div className='dot'></div>
        </div>
        </div>

        {data.length>0&&<ContentPage data={data}/>}

  </>
  )
}

export default First