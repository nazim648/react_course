import React from 'react'

const Banner = ({title, desp, myImg }) => {
    
  return (
    <>
    <div className="banner_cntent">
        <div className="banner_text">
            <h2>{title}</h2>
            <p>{desp}</p>
        </div>
        <div className="banner_image">
            <img src={myImg} alt="" />
        </div>
    </div>
    </>
  )
}

export default Banner