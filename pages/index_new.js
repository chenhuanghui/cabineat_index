import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";

import LayoutMaster from "../layouts/master"
import Hero from "../components/ver02/home/hero"
import Message from "../components/ver02/home/message"
import Feature from "../components/ver02/home/feature"

const AirtablePlus = require('airtable-plus');
const airtable = new AirtablePlus({
    baseID: 'appCZGNOFg53FFSE4',
    apiKey: 'keyLNupG6zOmmokND'
});

export default function Index() {
  const [hero, setHero] = useState()

  useEffect( async () => {
    // start get data of hero
    const heroRes = await airtable.read({
        filterByFormula: `isActive = "1"`,
        maxRecords: 1
    },{tableName:"hero"});
    setHero(heroRes[0])
    // end get data of brand  
  },[]);

  return (
    <>
        <Head>
            <title>CabinEat - Trang chủ</title>
        </Head>

        <LayoutMaster>
            {/* {hero 
            ?
                <>
                    <section className="bg-dark custom">
                        <div className="container-fluid py-6">                            
                            <p className="text-center pre-title text-uppercase font-weight-bold small" style={{letterSpacing: "2px"}}>{hero.fields.pre_title}</p>
                            <ReactMarkdown source={hero.fields.title} className="mt-0 mb-0 text-center markdown-custom h1"/> 
                            <ReactMarkdown source={hero.fields.sub_title} className="text-center mt-5 markdown-custom mb-3"/>
                            <div className="row align-items-center justify-content-center">
                                <a className="btn btn-primary btn-lg font-weight-bold" href={hero.fields.call2action_href} target="_blank">{hero.fields.call2action}</a>
                            </div>
                        </div>
                    </section> 

                    <section className="bg-invert-to-white">
                        <div className="container mt-n2">
                            <div className="row align-items-center justify-content-center">
                                <div className="pl-5 pr-5 pt-0 pb-0">
                                    <img className="img-fluid rounded d-none d-md-block"  src={hero && hero.fields.imgDesktop && hero.fields.imgDesktop[0].url}/>
                                    <img className="img-fluid rounded d-block d-md-none"  src={hero && hero.fields.imgMobile && hero.fields.imgMobile[0].url}/>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            : null
            } */}
            <Hero 
                hero_message = "Nền tảng nhà hàng số"
                sub_message = "Bất kỳ ai, ở bất kỳ đâu, đều có thể khởi nghiệp"
                btn_title="Tạo nhà hàng miễn phí"
                btn_href="#"
                hint = "Bạn cần sự hỗ trợ, liên hệ với chúng tôi"
            />
            <Message 
                mess = "Một nền tảng có tất cả các tính năng của nhà hàng số chuyên nghiệp mà bạn cần để bắt đầu, vận hành và phát triển doanh nghiệp của mình."
                image_src = "https://images.ctfassets.net/2d5q1td6cyxq/63HS7Vs5huxgHo4Zd3egEJ/80c5c352b308ffc0e4474748f2848e75/XL-USEN-Retail-POS-System.png?w=3360&h=1200&fm=webp&q=85&fit=scale"
            />

            <Feature />
        </LayoutMaster>
        
    </>
  )
}
