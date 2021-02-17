import { useEffect } from 'react';
import YouTube from '@u-wave/react-youtube';
// import ReactPlayer from 'react-player'
import ReactPlayer from 'react-player/lazy'

export default function YoutubePlayer({videoID}) {
    useEffect(()=>{
        
        
    },[])
    return (         
        <div className="player-wrapper">
            {/* <YouTube
                video={videoID}
                autoplay
                muted
                width={"100%"}
                height={360}
                controls={true}
                suggestedQuality={'720'}
                modestBranding = {true}
                showRelatedVideos={false}
                playsInline={true}
                showInfo={false}                    
            /> */}
            <ReactPlayer 
                className='player'
                url={`https://www.youtube.com/watch?v=${videoID}`}
                width="100%"
                controls={true}
                mostbranding={`true`}
                loop={true}                
                muted={false}
                playsinline={true}

            />
            <style jsx>{`

            `}</style>
        </div>
    )
}