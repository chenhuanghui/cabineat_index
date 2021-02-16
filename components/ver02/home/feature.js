import React, { useState, useEffect } from 'react';
import YouTube from '@u-wave/react-youtube';
const NOTION_FEATURE_ID = '20bcda33776141de900ec9989947a79b'

export default function Feature() {
    const [data, setData] = useState(null)
    useEffect(()=>{
        async function fetchData() {
            const contents = await fetch(
                `https://notion-api.splitbee.io/v1/table/${NOTION_FEATURE_ID}`
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
        <div className="features grid grid-gap-24-16 bg-white container-cabin" style={{paddingBottom: "100px"}}>
            <div className="feature-video video justify-self-center align-self-center bg-soft-yellow">
                    <YouTube
                        video={data && data[0].youtubeID}
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
                        style={{
                            backgroundColor: 'white !important'
                        }}
                    />
            </div>
            <div className="feature-content-wrapper">
                <div className="grid grid-gap-24-16">
                    <div className="feature-title">
                        <p className="caption-extra font-weight-bold">{data && data[0].message}</p>
                        <p className="title">{data && data[0].description}</p>
                    </div>                            
                    {data && data.map((item, index)=>(
                        <div className="grid grid-gap-8-8" key={item.id}>
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
            .video {
                width: 100vw;
            }
            

            @media (min-width: 768px) {     
                .features {
                    padding-top: 100px;
                    grid-template-columns: 1fr 1fr;
                }
                .feature-video {
                    width: 100%;
                }
                .video {
                    width: 100%;
                }
            }
            `}</style>
        </div>
    )
    
}