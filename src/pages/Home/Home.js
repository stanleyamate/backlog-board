import React,{useContext, useEffect, useState} from 'react'
import './Home.css'
import Button from "../../components/Button/Button";
import LogList from "../../components/LogList/LogList"
import { AppContext } from '../../context/AppProvider';

const Home = () => {
   const {open, issues, addIssue, addProcess, completeUpdate} = useContext(AppContext)
 const bg ="dark"
 let [issue, setIssue]= useState("")
 let [process, setProcess]= useState("");
 
 //to handle input from issue form
  const issueSubmitHandler = (e) => {  
    e.preventDefault();
    let id= Math.floor(Math.random()*100);
    issue = {
      id:id,
      issue: issue,
      isCompleted:false,
      isProcessing:false,
      username:"stanley"
    }
     if(process){
        addIssue(process)
     }
     else{
      addIssue(issue)
      setIssue("")
     }
  } 

  //to handle input from process form 
  const processingSubmitHandler = (e) => {  
    e.preventDefault();
    let id= Math.floor(Math.random()*100);
    issue = {
      id:id,
      issue: process,
      isCompleted:false,
      isProcessing:true,
      username:"stanley"
    }
    addIssue(issue)
    setProcess("")
  } 

  return (
    <div className={!open?"page homepage page--expand":"page homepage container "}>
      <h3>Home</h3>
      <section className="log-content">
      <div className="log-list-container">
            <h2>Issue</h2>
               <form action="" id="form" onSubmit={issueSubmitHandler}>
                  <input 
                  type="text"
                  name="issue" 
                  id="issue"
                  autoComplete='false'
                  required="true"
                  onChange={(e)=>{setIssue(e.target.value)}}
                  placeholder={'Add a new Issue...'}
                  />
                  <Button bg={bg} 
                  text="+"
                  type="submit" />
               </form>
            <LogList completeUpdate={completeUpdate} issues={issues.filter(i=>(i.isProcessing === false))}/>
         </div>
      <div className="log-list-container">
            <h2>Processing</h2>
               <form action="" id="form" onSubmit={processingSubmitHandler}>
                  <input 
                  type="text"
                  name="issue"
                  id="issue"
                  onChange={(e)=>{setProcess(e.target.value)}}
                  placeholder={'Add processing issue...'}
                  />
                  <Button bg={bg} 
                  text="+"
                  type="submit" />
               </form>
            <LogList completeUpdate={completeUpdate} issues={issues.filter(i=>(i.isCompleted === false && i.isProcessing === true))}/>
         </div>
          <div className="log-list-container">
                <h2>completed</h2>
                  <LogList issues={issues.filter(i=>(i.isCompleted === true))}/>
            </div>
      </section>

    </div>
  )
}

export default Home