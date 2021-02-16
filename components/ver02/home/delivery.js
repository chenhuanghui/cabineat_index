import React, { useState, useEffect } from 'react';
import YoutubePlayer from '../../player/youtube-player';
const NOTION_DELIVERY_ID = 'e9273c8a7565489eb4e630bde8e8658d'

export default function Delivery() {
    const [data, setData] = useState(null)
    useEffect(()=>{
        async function fetchData() {
            const contents = await fetch(
                `https://notion-api.splitbee.io/v1/table/${NOTION_DELIVERY_ID}`
            ).then((res) => res.json());
            console.log("contents: ", contents)
            const temp = []
            contents.forEach(item => {
                if (item.isActive === true) {
                    temp.push(item)
                    console.log("active: ", item)
                }                
            });
            setData(temp)        
        }
        fetchData()
    },[])
    return (
    <div className="delivery bg-soft-yellow padding-y-24">
        <div className="container-cabin delivery-wrapper grid grid-gap-24-16">
            <div className="delivery-item-1 grid grid-gap-24-16">
                <div className="delivery-title">
                    <p className="caption-extra font-weight-bold letter-spacing-n1px">{data && data[0].message}</p>
                    <p className="title">{data && data[0].description}</p>
                </div>
                <div className="delivery-content-wrapper grid grid-gap-24-16">
                    {data && data.map((item,index)=>(
                        <div className="grid grid-gap-8-8" key={item.id}>
                            <p className="font-weight-bold">{item.title}</p>
                            <p className="">{item.sub}</p>
                        </div>
                    ))}                    
                </div>
            </div>        
            <div className="delivery-item-2 justify-self-center align-self-center">
                <div className="delivery-video video justify-self-center align-self-center">
                    <YoutubePlayer videoID={data && data[0].youtubeID} />                    
                </div>
            </div>
        </div>      
        <style jsx>{`
        .delivery {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
        }
        @media (min-width: 768px) {
            .delivery-wrapper {
                grid-template-columns: 2fr 3fr;
            }
        }
        `}</style>              
    </div>
    )
}