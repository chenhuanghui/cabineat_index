import React, { useState, useEffect } from 'react';
import YoutubePlayer from '../../player/youtube-player';
const NOTION_FEATURE_ID = '20bcda33776141de900ec9989947a79b'

export default function Pos() {
    const [data, setData] = useState(null)
    const [videoSelectedID, setVideoSelectedID] = useState()
    useEffect(()=>{
        async function fetchData() {
            const contents = await fetch(
                `https://notion-api.splitbee.io/v1/table/${NOTION_FEATURE_ID}`
            ).then((res) => res.json());
            
            const temp = []
            contents.forEach(item => {
                if (item.isActive === true) {
                    temp.push(item)
                }                
            });
            setData(temp)        
            setVideoSelectedID(temp[0].youtubeID)
        }
        fetchData()
    },[])
    
    const handleSelectChoice = (itemID, videoID) => {
        $('.pos-item-choice.selected').removeClass('selected')
        $(`.pos-item-choice.${itemID}`).addClass('selected')
        setVideoSelectedID(videoID)
        var video = document.querySelector("#pos-video");
        video.scrollIntoView({ behavior: 'smooth', block: 'start'})
    }

    return (
        <section className="features grid grid-gap-24-16 bg-white container-fluid-cabin" style={{paddingBottom: "100px"}} id="cabin-pos">
            <div className="justify-self-center align-self-center bg-soft-yellow">
                <div className="feature-video video" id="pos-video">
                    <YoutubePlayer videoID={videoSelectedID} />                
                </div>
            </div>
            <div className="feature-content-wrapper margin-x">
                <div className="grid">
                    <div className="feature-title padding-bottom">
                        <p className="caption-extra font-weight-bold">{data && data[0].message}</p>
                        <p className="title">{data && data[0].description}</p>
                    </div>                            
                    {data && data.map((item, index)=>(
                        <div className={`grid grid-gap-8-8 padding rounded pos-item-choice ${item.id} ${index===0 ? "selected" : null}`} key={item.id} onClick={()=>{handleSelectChoice(item.id, item.youtubeID)}}>
                            <p className="font-weight-bold">{item.title}</p>
                            <p className="">{item.sub}</p>
                        </div>
                    ))}
                </div>
            </div>
            <style jsx>{`
            .features {
                padding-top: 100px;
            }

            .feature-video {
                padding: 24px !important;
                width: 100%;
            }
            .pos-item-choice.selected {
                background-color: rgb(248, 246, 243);
            }
            @media (min-width: 768px) {     
                .features {
                    padding-top: 100px;
                    grid-template-columns: 1fr 1fr;
                }
                
            }

            @media (min-width: 992px) {     
                .features {
                    padding-top: 100px;
                    grid-template-columns: 1fr 1fr;
                }                
            }
            `}</style>
        </section>
    )
    
}