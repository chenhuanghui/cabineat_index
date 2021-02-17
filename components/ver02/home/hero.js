import React, { useState, useEffect } from 'react';

const NOTION_HERO_ID = 'e06630059c1047c084b8652fcd61bff2'

export default function Hero({}) {
    const [data , setData] = useState()
    useEffect(()=>{
        async function fetchData() {
            const contents = await fetch(
                `https://notion-api.splitbee.io/v1/table/${NOTION_HERO_ID}`
            ).then((res) => res.json());
            contents.forEach(item => {
                if (item.isActive === true ) {
                    setData(item);
                    return;
                }
                
            });

        }
        fetchData()
    },[])

    return (
        
        <div className="hero grid justify-content-center padding-y-24 margin-y-24 grid-gap-24-16">
            <div className="message padding-x">
                <p className="caption-extra font-weight-bold text-center" >{data ?.message_line_1}</p>
                <p className="caption-extra font-weight-bold text-center text-primary">{data?.message_line_2}</p>
            </div>

            <div className="hero-description grid justify-self-center">
                <div className="justify-self-center">
                    <p className="text-center font-weight-lighter">{data?.description}</p>
                </div>                            
            </div>
            
            <div className="action_create justify-self-center">
                <div className="call-to-action grid grid-gap-8-8">
                    <a href={data?.btn_href} className="btn btn-primary d-block">{data?.btn_title}</a>
                    <p className="small text-gray text-center">{data?.btn_hint}</p>
                </div>                            
            </div>    

            <div className="hero-image container-cabin padding-x-0">
                <img src={data?.hero_image[0].url} width="100%"/>
            </div>
            <style jsx>{`
            
            .hero .hero-description {
                width: 90%;
            }
            @media (min-width: 768px) {
                .hero .hero-description {
                    width: 70%;
                }
            }
            @media (min-width: 992px) {
                .hero .hero-description {
                    width: 50%;
                }
            }
            `}</style>
        </div>
        
    )
}