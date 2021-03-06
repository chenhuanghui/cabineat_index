import React, { useState, useEffect } from 'react';
import YoutubePlayer from '../../player/youtube-player';

const NOTION_SETUP_ID = '7740af3ba3cb41448ab72439a0a73f54'

export default function Setup() {
    const [data , setData] = useState()
    const [videoSelectedID, setVideoSelectedID] = useState()

    useEffect(()=>{
        async function fetchData() {
            const contents = await fetch(
                `https://notion-api.splitbee.io/v1/table/${NOTION_SETUP_ID}`
            ).then((res) => res.json());
            
            const temp = []
            contents.forEach(item => {
                if (item.isActive === true ) {
                    temp.push(item)                
                }                
            });
            setData(temp);
            setVideoSelectedID(temp[0].youtubeID)
        }
        fetchData()
        
    },[])

    const handleSelected = (choiceID, videoID) => {
        console.log(videoID)
        $('.setup-choice-item.selected').removeClass('selected')
        $(`.setup-choice-item.${choiceID}`).addClass('selected')

        setVideoSelectedID(videoID)
        var video = document.querySelector("#video-hero");
        video.scrollIntoView({ behavior: 'smooth', block: 'start'})
    }
    
    

    return (
        <section className="setup container-cabin bg-dark grid grid-gap-24-16 padding-y-24 padding-x margin-y-24 justify-content-center" id="setup">
            <div className="setup_message grid grid-gap-8-8 justify-self-center">
                <p className="caption text-white font-weight-bold text-center">{data && data[0].message}</p>
                <p className="text-white text-center">{data && data[0].description}</p>
            </div>                        
            <div className="setup-video video" id="video-hero">
                <YoutubePlayer videoID={videoSelectedID} />                
            </div>
            <div className="setup-choices grid">
                {data && data.map((item, index)=>(
                    <div className={`setup-choice-item rounded padding grid grid-gap-8-8 align-items-start ${item.id} ${index===0 ? "selected" : null}`} key={index} onClick={()=>{handleSelected(item.id, item.youtubeID)}}>
                        <p className="title font-weight-bold">{item.title}</p>
                        <p className="font-weight-lighter text-justify">{item.sub}</p>
                    </div>    
                ))}                
            </div>
            <style jsx>{`
            .setup {
                padding-top: 48px !important; 
                padding-bottom: 48px !important; 
            }            

            .video-item {
                display: none;
            }
            .video-item.selected {
                display: block;
            }
            .setup-choice-item:hover {
                cursor: pointer;
            }
            .setup-choice-item.selected {
                background-color: #1d2838
            }

            @media (min-width: 768px) {                      
                .setup {                    
                    border-radius: 12px !important;
                }
                .setup .setup-choices {
                    grid-template-columns: 1fr 1fr 1fr;
                }
            }
            
            @media (min-width: 992px) {      
                .setup {                    
                    border-radius: 12px !important;
                }
                .setup .setup-choices {
                    grid-template-columns: 1fr 1fr 1fr;
                }
            }
            `}</style>
        </section>
    )
}