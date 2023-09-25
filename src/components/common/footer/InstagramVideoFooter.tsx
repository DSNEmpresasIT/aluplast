import React, { useEffect, useState } from 'react';
import { getTheLastInstagramVideo } from 'src/services/instagram-services';

const VideoComponent = ({ videoData }: any) => {
  return (
    <a 
      href={videoData.permalink} 
      style={{ width: '90%' }} 
      target='_blank'
    >
      <video autoPlay muted loop width="100%" src={videoData.media_url}></video>
    </a>
  )
}

export const InstagramVideoFooter = ({ instagramToken }: any) => {
  const [ videoData, setVideoData ] = useState<any>(undefined);
  useEffect(() => {
    getTheLastInstagramVideo(instagramToken)
      .then(response => {
        setVideoData(response)
      })
      .catch(error => {
        console.log(error.message)
      })
  }, [instagramToken])

  return (
    <p 
      style={{ 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'center', 
        marginTop: '30px' 
      }}
    >
      {
        (videoData) 
        ? (
            <VideoComponent videoData={videoData} />
          )
          : (
            <span style={{ marginTop: '30px' }} className='page-loader__spin'></span>   
        )
      }
    </p>
  )
}
