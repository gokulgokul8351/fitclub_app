import React from 'react'
import ReactPlayer from 'react-player'
import warmup1 from '../../../assets/warmup1.mp4'
import warmup2 from '../../../assets/warmup2.mp4'
import warmup3 from '../../../assets/warmup3.mp4'
import warmup4 from '../../../assets/warmup4.mp4'
import '../clips/Clips.css'

const Clips = () => {
  return (
    <div>
      <hr className="hr-1" />
      <hr className="hr-2" />
      <hr className="hr-3" />
      <div>
        <h1 className="header stroke-text">Gallery</h1>
      </div>
      <div
        id="clips"
        className="video-container"
      >
        <ReactPlayer
          url={warmup1}
          controls={true}
          width="20%"
          height="20%"
          id="Strength_Training"
        />
        <ReactPlayer
          url={warmup2}
          controls={true}
          width="20%"
          height="20%"
          id="Cardio_Training"
        />

        <ReactPlayer
          url={warmup3}
          controls={true}
          width="20%"
          height="20%"
          id="Fat_Burning"
        />
        <ReactPlayer
          url={warmup4}
          controls={true}
          width="20%"
          height="20%"
          id="Health_Fitness"
        />
      </div>
    </div>
  )
}

export default Clips
