import React, { useState, useEffect } from 'react';
import YouTube from '@u-wave/react-youtube';

const NOTION_SETUP_ID = '7740af3ba3cb41448ab72439a0a73f54'

export default function Setup() {
    const [data , setData] = useState()
    useEffect(()=>{
        async function fetchData() {
            const contents = await fetch(
                `https://notion-api.splitbee.io/v1/table/${NOTION_SETUP_ID}`
            ).then((res) => res.json());
            
            const temp = []
            contents.forEach(item => {
                if (item.isActive === true ) {
                    console.log("active: ", item)    
                    temp.push(item)                
                }                
            });
            setData(temp);
        }
        fetchData()
    },[])

    const onSelected = (choiceID) => {
        console.log('choiceid: ', choiceID)
        $('.selected').removeClass('selected')
        $(`.${choiceID}`).addClass('selected')
    }

    return (
        <div className="setup container-cabin bg-dark grid grid-gap-24-16 padding-y-24 margin-y-24 justify-content-center">
            <div className="setup_message grid grid-gap-8-8 justify-self-center">
                <p className="caption text-white font-weight-bold text-center">{data && data[0].message}</p>
                <p className="text-white text-center">{data && data[0].description}</p>
            </div>                        
            <div className="setup-video">
                {data && data.map((item, index)=>(
                    <div className= {`video-item ${item.id} ${index===0 ? "selected" : null}`} key={index}>
                        <YouTube
                            video={item.youtubeID}
                            autoplay
                            width={"100%"}
                            height={480}
                        />
                    </div>
                ))}
            </div>
            <div className="setup-choices grid">
                {data && data.map((item, index)=>(
                    <div className={`choice-item rounded padding grid grid-gap-8-8 ${item.id} ${index===0 ? "selected" : null}`} key={index} onClick={()=>{onSelected(item.id)}}>
                        <p className="title font-weight-bold">{item.title}</p>
                        <p className="font-weight-lighter">{item.sub}</p>
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
            .choice-item:hover {
                cursor: pointer;
            }
            .choice-item.selected {
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
        </div>
    )
}