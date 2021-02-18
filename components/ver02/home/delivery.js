import React, { useState, useEffect } from 'react';
import YoutubePlayer from '../../player/youtube-player';
const NOTION_DELIVERY_ID = 'e9273c8a7565489eb4e630bde8e8658d'

export default function Delivery() {
    const [data, setData] = useState(null)
    const [videoSelectedID, setVideoSelectedID] = useState()
    useEffect(()=>{
        async function fetchData() {
            const contents = await fetch(
                `https://notion-api.splitbee.io/v1/table/${NOTION_DELIVERY_ID}`
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
        $('.delivery-item-choice.selected').removeClass('selected')
        $(`.delivery-item-choice.${itemID}`).addClass('selected')
        setVideoSelectedID(videoID)
        var video = document.querySelector("#delivery-video");
        video.scrollIntoView({ behavior: 'smooth', block: 'end'})
    }

    return (
        <section className="delivery bg-soft-yellow padding-y-24" id="delivery">
            <div className="container-fluid-cabin delivery-wrapper grid grid-gap-24-16">
                <div className="delivery-item-1 grid margin-x">
                    <div className="delivery-title padding-bottom grid grid-gap-8-8">
                        <p className="caption-extra font-weight-bold letter-spacing-n1px">{data && data[0].message}</p>
                        <p className="title">{data && data[0].description}</p>
                    </div>
                    <div className="delivery-content-wrapper grid">
                        {data && data.map((item,index)=>(
                            <div className={`grid grid-gap-8-8 padding rounded delivery-item-choice ${item.id} ${index===0 ? "selected" : null}`} key={item.id} onClick={()=>{handleSelectChoice(item.id, item.youtubeID)}}>
                                <p className="font-weight-bold">{item.title}</p>
                                <p className="">{item.sub}</p>
                            </div>
                        ))}                    
                    </div>
                </div>        
                <div className="delivery-item-2 justify-self-center align-self-center">
                    <div className="justify-self-center align-self-center">
                        <div className="delivery-video video" id="delivery-video">
                            <YoutubePlayer videoID={videoSelectedID} />     
                        </div>               
                    </div>
                </div>
            </div>      
            <style jsx>{`
            .delivery {
                padding-top: 48px !important;
                padding-bottom: 48px !important;
            }
            .delivery-item-choice.selected {
                background-color: #E4EBF6;
            }

            @media (min-width: 768px) {
                .delivery-wrapper {
                    grid-template-columns: 2fr 3fr;
                }
            }
            `}</style>              
        </section>
    )
}