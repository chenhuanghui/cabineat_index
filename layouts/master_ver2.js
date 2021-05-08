import Head from 'next/head'
import { useEffect, useState } from 'react'
import Nav from "../components/nav/nav-ver2"
import FooterNotion from "../components/footer/footer-notion"

export default function LayoutMasterVer02 (props) {
    
    return(
        <>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="wrapper">
                <Nav />
                <div className="main-content">
                    {props.children}        
                </div>
                
                
                <FooterNotion />
            </div>
        </>
    )
};