import React from 'react'
import '../Tab/Tab.css'

const Tab = ({success}) => {
  return (
    <>
     <div className={success?"tab":"tab tab-failed"}>
     </div>
    </>
  )
}

export default Tab