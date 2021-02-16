import React, { useState, useEffect } from 'react';
import YoutubePlayer from '../../player/youtube-player';

const NOTION_OVERVIEWMANAGE_ID = '05758774b62a4726a1e2da6e04be7f7b'
const NOTION_OVERVIEWMANAGE_BLOCK_ID = 'd22cc95674994a7f993744b76005c2b7'

export default function OverviewManage() {
    const [sectionData , setSectionData] = useState(null)
    const [block1 , setBlock1] = useState(null)
    const [block2 , setBlock2] = useState(null)
    const [topVideoSelectedID, setTopVideoSelectedID] = useState()
    const [bottomVideoSelectedID, setBottomVideoSelectedID] = useState()

    useEffect(()=>{
        async function fetchDataSection() {
            const contents = await fetch(
                `https://notion-api.splitbee.io/v1/table/${NOTION_OVERVIEWMANAGE_ID}`
            ).then((res) => res.json());
            contents.forEach(item => {
                if (item.isActive === true ) {
                    setSectionData(item);  
                    return;
                }                
            });
                      
        }

        async function fetchBlockData() {
            const contents = await fetch(
                `https://notion-api.splitbee.io/v1/table/${NOTION_OVERVIEWMANAGE_BLOCK_ID}`
            ).then((res) => res.json());
            
            const block1 = []
            const block2 = []
            contents.forEach(item => {
                if (item.isActive === true) {
                    if (item.block_position==="block_1") block1.push(item)
                    else if(item.block_position==="block_2") block2.push(item)                             
                }                
            });
            
            setBlock1(block1)
            setTopVideoSelectedID(block1[0].youtubeID)
            setBlock2(block2)
            setBottomVideoSelectedID(block2[0].youtubeID)
        }

        fetchDataSection()
        fetchBlockData()


        
    },[])

    return (
    <section className="overview-manage padding-top-24" style={{paddingBottom: "50px"}} id="intro">
        <div className="overview-manage-wrapper grid justify-content-center">
            
            <div className="container-cabin grid grid-gap-24-16  margin-y-24 justify-content-center">
                <div className="setup_message grid grid-gap-8-8 justify-self-center">
                    <p className="caption font-weight-bold text-center">{sectionData?.message}</p>
                    <p className="text-center">{sectionData?.description}</p>
                </div>                        
            </div>
            
            <div className="overview-content-wrapper container-cabin grid grid-gap-24-16 justify-content-center align-items-center">
                <div className="overview-item-1 grid grid-gap-24-16">
                    <p className="caption font-weight-bold letter-spacing-n1px">{block1 && block1[0].block_title}</p>
                    {block1 && block1.map((item, index)=>(
                        <div className="grid grid-template-columns-48px-1fr grid-gap-12-12" key={item.id}>
                            <div className="icon-wrapper">
                                <div className="bg-primary text-white rounded grid grid-template-columns-48px grid-template-rows-48px">
                                    <div 
                                        className="justify-self-center align-self-center cover-fit" 
                                        style={{
                                            width:"24px", 
                                            height:"24px",
                                            backgroundImage:`url("${item.icon && item.icon[0].url}")`
                                        }}>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-gap-8-8">
                                <p className="font-weight-bold title">{item.title}</p>
                                <p className="font-weight-lighter text-justify">{item.description}</p>
                            </div>
                        </div>
                    ))}                    
                </div>
                <div className="overview-item-2 justify-self-center">
                    <div className="video">
                        <YoutubePlayer videoID={topVideoSelectedID} />
                        
                    </div>
                    {/* <video width= "100%" autoPlay loop muted playsInline>
                        <source src="https://ucarecdn.com/3d6f9b1b-868b-4a04-babe-d3fb1b420322/OOSsetupvideo.mp4" type="video/mp4"/>
                    </video> */}
                </div>
            </div>

            <div className="manage-content-wrapper container-cabin grid grid-gap-24-16 justify-content-center align-items-center">
                <div className="manage-item-1 grid grid-gap-24-16">
                    <p className="caption font-weight-bold letter-spacing-n1px">{block2 && block2[0].block_title}</p>
                    {block2 && block2.map((item, index)=>(
                        <div className="grid grid-template-columns-48px-1fr grid-gap-12-12" key={item.id}>
                            <div className="icon-wrapper">
                                <div className="bg-primary text-white rounded grid grid-template-columns-48px grid-template-rows-48px">
                                    <div 
                                        className="justify-self-center align-self-center cover-fit" 
                                        style={{
                                            width:"24px", 
                                            height:"24px",
                                            backgroundImage:`url("${item.icon && item.icon[0].url}")`
                                        }}>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-gap-8-8">
                                <p className="font-weight-bold title">{item.title}</p>
                                <p className="font-weight-lighter text-justify">{item.description}</p>
                            </div>
                        </div>
                    ))}                    
                </div>
                <div className="manage-item-2 justify-self-center">                    
                    <YoutubePlayer videoID={bottomVideoSelectedID} />
                </div>
            </div>
        </div>
        <style jsx>{`
        .overview-manage{
            background: rgb(248, 246, 243);                
        }
        .overview-manage-wrapper {
            grid-gap: 40px 16px;            
        }
                
        .overview-content-wrapper .overview-item-2, .manage-content-wrapper .manage-item-2 {
            margin-left: -24px;
            margin-right: -24px;
            width: 100vw;
        }

        #player .html5-video-player:not(.ytp-transparent) {
            background: rgb(248, 246, 243) !important;
        }
        
        @media (min-width: 768px) {   
            .overview-manage-wrapper {
                width: 75%;
                margin-left: auto;
                margin-right: auto;
                padding-bottom: 48px;
            }
            .overview-content-wrapper .overview-item-2, .manage-content-wrapper .manage-item-2 {
                margin-left: 0px;
                margin-right: 0px;
                width: 100%;
            }
        }
        @media (min-width: 992px) {
            .overview-manage-wrapper {
                width: 100%;
                padding-bottom: 48px;
            }
            .overview-content-wrapper {
                grid-template-columns: 1fr 1fr !important;
            }
            .overview-content-wrapper .overview-item-2, .manage-content-wrapper .manage-item-2  {
                margin-left: 0px;
                margin-right: 0px;
            }
            .manage-content-wrapper {
                grid-template-columns: 1fr 1fr !important;
            }

            .manage-content-wrapper .manage-item-1 {
                grid-column: 2 / 3;
                grid-row: 1 / 2;                    
            }
            .manage-content-wrapper .manage-item-2 {
                grid-column: 1 / 2;
                grid-row: 1 / 2;                    
            }
        }
        `}</style>
    </section>
    )    
}