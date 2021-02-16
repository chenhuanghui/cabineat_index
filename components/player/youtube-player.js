import YouTube from '@u-wave/react-youtube';
export default function YoutubePlayer({videoID}) {
    return ( 
        <YouTube
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
        />
    )
}