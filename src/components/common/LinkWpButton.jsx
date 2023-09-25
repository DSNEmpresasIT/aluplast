import React from 'react'


const LinkWpButton = ({ data, index }) => {
  return (
    <a 
      className='link-ws-button'
      style={{ 
        backgroundColor: (index % 2) ? '#e91d25' : '#0a75ba', 
      }} 
      target='_blank' 
      href={`https://api.whatsapp.com/send?phone=${data.phone}&text=`}
    >
      <h5 style={{ color: 'white' }}>{data.area}</h5>
      <i style={{fontSize: "20px", color:"white"}} className="zmdi zmdi-arrow-right-top"></i>
    </a>
  )
}

export default LinkWpButton;
