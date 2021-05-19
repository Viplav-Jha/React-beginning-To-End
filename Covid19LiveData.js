import React,{useEffect, useState} from 'react'

const Covid=()=> {
 const [data, setData] = useState([])

   const getCoviddata = async()=>{
     try{
     const res = await fetch("https://api.covid19india.org/data.json")
     const actualData= await res.json()
     console.log(actualData.statewise[0]);
     setData(actualData.statewise[0])
    
     }
     catch(err){
       console.log(err);
     }
   }

    useEffect(() => {
       getCoviddata();  
    },[]);

    return (
        <div>
        <section>
          <h1>LIVE</h1>  
          <h2>Covid19 realtime data</h2>
          <ul>
              <li className="card">
                  <div className="card__main">
                      <div className="card__inner">
                      <p className ="card__name"><span>OUR </span>COUNTRY</p>
                      <div className="card__total">INDIA</div>
                      </div>
                  </div>
              </li>
              <li className="card">
                  <div className="card__main">
                      <div className="card__inner">
                      <p className ="card__name"><span>TOTAL </span>RECOVERD</p>
                      <div className="card__total">{data.recovered}</div>
                      </div>
                  </div>
              </li>
              <li className="card">
                  <div className="card__main">
                      <div className="card__inner">
                      <p className ="card__name"><span>TOTAL </span>CONFIRMED</p>
                      <div className="card__total">{data.confirmed}</div>
                      </div>
                  </div>
              </li>
              <li className="card">
                  <div className="card__main">
                      <div className="card__inner">
                      <p className ="card__name"><span>LAST</span>ACTIVE</p>
                      <div className="card__total">{data.active}</div>
                      </div>
                  </div>
              </li>
          </ul>
          </section>
        </div>
    )
}

export default Covid;
