import React from 'react'
import topimage from "../assets/top-left-img.png"

const TopLeftImage = () => {
  return (
    <div>
      <img className=" absolute left-0 top-0 mix-blend-color-dodge z-10 xl:w-[400px] opacity-50" src={topimage} alt="top-image" />
    </div>
  )
}

export default TopLeftImage;
