import React from 'react'

const Page1 = ({open}) => {
  return (
    <div className={open?"page page--expand":"page"}>Page1</div>
  )
}

export default Page1