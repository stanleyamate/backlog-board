import { createContext, useState } from "react"
export const AppContext = createContext()

export const AppProvider = ({children}) => {

     let [issues, setIssues] = useState([
        {
            "id": 1,
            "issue": "issue one is having a bug1",
            "isCompleted": false,
            "isProcessing": true,
            "username": "stanley"
        },
        {
            "id": 2,
            "issue": "issue one is having a bug2",
            "isCompleted": true,
            "isProcessing": true,
            "username": "willy"
        },
        {
            "id": 3,
            "issue": "issue one is having a bug3",
            "isCompleted": false,
            "isProcessing": true,
            "username": "john Doe"
        },
        {
            "id": 4,
            "issue": "issue one is having a bug4",
            "isCompleted": true,
            "isProcessing": true,
            "username": "stanko"
        },
        {
            "id": 7,
            "issue": "i am a new issue",
            "isCompleted": false,
            "isProcessing": false,
            "username": "stanley"
        }
    ])
    const [open, setOpen]= useState(false) 
    let [processes,setProcesses] = useState([])
    const addIssue = (issue)=>{
        issues=[...issues, issue];
        setIssues(issues);
    }
    const clearAllIssues = ()=>{
        setIssues([]);
      } 
       
    let addProcess = (process)=>{
        processes=[...processes, process];
        setProcesses(processes);
    }
    
    const completeUpdate = (id)=>{
      const issue=issues.filter(issue=>issue.id === id)
      const newIssue = [...issue,issue[0].isCompleted = true]
      console.log(newIssue)
    }

  return (
    <AppContext.Provider value={{issues, setIssues,open, setOpen, addIssue,addProcess, clearAllIssues,completeUpdate}}>
        {children}
    </AppContext.Provider>
  )

}
