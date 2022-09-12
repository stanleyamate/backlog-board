import React from 'react'

const Page2 = ({open}) => {
  return (
    <div className={open?"page page--expand":"page"}>Page2</div>
  )
}

export default Page2