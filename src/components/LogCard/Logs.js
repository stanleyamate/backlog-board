import React from 'react'
import "../css/Logs.css";
import Tab from '../../Tab/Tab';


const Logs = ({item}) => {
  const {username, issue, isCompleted, isProcessing}=item;
  return (
        <>
         <div className='log-card'>
               <small>~{username} :</small>
               <p>{issue}</p>
              <div className='log-card__tab'>{
                  isProcessing && !isCompleted?
                  <Tab success={false}/>:
                  <Tab success={true}/>
                }</div>
          </div>
          </>
  )
}
export default Logs