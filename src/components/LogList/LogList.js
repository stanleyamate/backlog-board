import React from 'react'
import {Link} from 'react-router-dom'
import "../LogList/LogList.css";
import Tab from '../Tab/Tab';


const LogList = ({issues, completeUpdate}) => {
  let itemList = issues.length?
   (issues.map((i)=>{
    return(
      <div className='log-card' key={i.id}>
            <small>~{i.username} :</small>
            <p>{i.issue}</p>
            <div className='log-card__tab'>{
                i.isProcessing && !i.isCompleted?
                <Tab success={false}/>:
                i.isCompleted && i.isProcessing?
                <Tab success={true}/>:null
              }
            </div>
            {
              !i.isCompleted && i.isProcessing?
              <Link to={'/'} 
              className="complete-link"
              onClick={()=>completeUpdate(i.id)}
              >
                complete
              </Link>:null
            }
         </div>
    )
  })
  ):(  <div className='log-card'>
               <p>No Issues logged yet</p>
            </div>
            )
    return (
        <>
          <div className="logs-display">
            {itemList}
          </div>
        </>
    )
}

export default LogList