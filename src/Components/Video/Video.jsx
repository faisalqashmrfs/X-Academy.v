import React from 'react'

export default function Video() {
  return (
        <div className="App">
      {lood ? <div className="loader"></div>
      :
      <iframe
        src="https://www.youtube.com/embed/SMKPKGW083c?si=j_VqbR-m2jB2Vei9"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        allowfullscreen
        >
        </iframe>}
        
    </div>
  )
}
