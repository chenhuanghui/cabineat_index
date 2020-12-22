import Head from 'next/head'
import React, { useState, useEffect } from 'react';
import ReactMarkdown from "react-markdown";

import LayoutMaster from "../layouts/master"
import Hero from "../components/ver02/home/hero"
import Feature from "../components/ver02/home/feature"
import Package from '../components/ver02/home/package';


const AirtablePlus = require('airtable-plus');
const airtable = new AirtablePlus({
    baseID: 'appCZGNOFg53FFSE4',
    apiKey: 'keyLNupG6zOmmokND'
});

export default function Index() {
  const [hero, setHero] = useState()

  useEffect( async () => {
    // start get data of hero
    
    // const heroRes = await airtable.read({
    //     filterByFormula: `isActive = "1"`,
    //     maxRecords: 1
    // },{tableName:"hero"});
    // setHero(heroRes[0])


    // end get data of brand  
    return () => {
        console.log("This will be logged on unmount");
    }
  },[]);

  return (
    <>
        <Head>
            <title>CabinEat - Trang chủ</title>
        </Head>

        <LayoutMaster>
            <Hero 
                hero_message = "Nền tảng nhà hàng số"
                sub_message = "Bất kỳ ai, ở bất kỳ đâu, đều có thể khởi nghiệp"
                btn_title="Tạo nhà hàng miễn phí"
                btn_href="#"
                hint = "Bạn cần sự hỗ trợ, liên hệ với chúng tôi"
            />
            <Feature 
                mess = "Một nền tảng có tất cả các tính năng của nhà hàng số chuyên nghiệp mà bạn cần để bắt đầu, vận hành và phát triển doanh nghiệp của mình."
                image_src = "https://images.ctfassets.net/2d5q1td6cyxq/63HS7Vs5huxgHo4Zd3egEJ/80c5c352b308ffc0e4474748f2848e75/XL-USEN-Retail-POS-System.png?w=3360&h=1200&fm=webp&q=85&fit=scale"
            />

            {/* <Feature /> */}

            <Package />
        </LayoutMaster>
        
    </>
  )
}
