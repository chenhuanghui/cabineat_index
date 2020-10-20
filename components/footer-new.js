import React from 'react';
import Router from 'next/router';
import Link from 'next/link'
import ReactMarkdown from "react-markdown";

const AirtablePlus = require('airtable-plus');
const airtable = new AirtablePlus({
    baseID: 'appCZGNOFg53FFSE4',
    apiKey: 'keyLNupG6zOmmokND'
});

export default class FooterNew extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            intro : ""
        }
    }

    async componentDidMount() { 
        let currentComponent = this
        const brandIntro = await airtable.read({
            filterByFormula: `type = "intro"`,
            maxRecords : 1
        },{tableName:"brand"});
        
        if (brandIntro.length > 0)
            currentComponent.setState({intro: brandIntro[0].fields.title})

        
    }    

    render() {
        const {intro} = this.state
        return(
            <>
                <footer className="bg-dark">
                    <div className="container py-5">
                        <div className="row mt-4 pl-1 pr-1">
                            <div className="col-12 col-md-3">
                                <h4 className="text-muted font-weight-bold mb-3 footer-nav-header" style={{color: "#737373 !important"}}>Giới thiệu</h4>
                                <ul className="footer-nav pl-0 mb-4">
                                    <li className="mb-2"><a href="/about">Về CabinEat</a></li>
                                    <li className="mb-2"><a href="#">Kiến thức</a></li>
                                    <li className="mb-2"><a href="#">Việc làm</a></li>
                                    <li className="mb-2"><a href="#">Nhà đầu tư</a></li>
                                </ul>                                                                        
                            </div>
                            <div className="col-12 col-md-3">
                                <h4 className="text-muted font-weight-bold mb-3 footer-nav-header" style={{color: "#737373 !important"}}>CabinEat</h4>
                                <ul className="footer-nav pl-0 mb-4">
                                    <li className="mb-2"><a href="#">Giỏ hàng thông minh</a></li>
                                    <li className="mb-2"><a href="#">Xử lý đơn hàng</a></li>
                                    <li className="mb-2"><a href="#">Hệ thống quản lý</a></li>
                                    <li className="mb-2"><a href="http://bit.ly/cabineat-signup">Tạo nhà hàng</a></li>
                                    <li className="mb-2"><a href="http://bit.ly/my-cabineat">Đăng nhập</a></li>
                                </ul>                                    
                            </div>
                            <div className="col-12 col-md-3">
                                <h4 className="text-muted font-weight-bold mb-3 footer-nav-header" style={{color: "#737373 !important"}}>Cabin Platform</h4>
                                <ul className="footer-nav pl-0 mb-4">
                                    <li className="mb-2"><a href="#" >Cabin Food</a></li>
                                    <li className="mb-2"><a href="#" >Cabin POS</a></li>
                                    <li className="mb-2"><a href="#" >Cabin Marketing</a></li>
                                    <li className="mb-2"><a href="#" >Cabin Academy</a></li>
                                </ul>                                    
                            </div>
                            <div className="col-12 col-md-3">
                                <h4 className="text-muted font-weight-bold mb-3 footer-nav-header" style={{color: "#737373 !important"}}>Công cụ hỗ trợ</h4>
                                <ul className="footer-nav pl-0 mb-4">
                                    <li className="mb-2"><a href="#">SMS quảng cáo</a></li>
                                    <li className="mb-2"><a href="#">Tạo QRCode</a></li>
                                    <li className="mb-2"><a href="#">Tạo link ngắn</a></li>
                                    <li className="mb-2"><a href="#">Kho ảnh miễn phi</a></li>
                                </ul>                                    
                            </div>
                        </div>

                        <div className="row mt-4 pl-1 pr-1">
                            <div className="col-12 col-md-3">
                                <h4 className="text-muted font-weight-bold mb-3 footer-nav-header" style={{color: "#737373 !important"}}>Đối tác</h4>
                                <ul className="footer-nav pl-0 mb-4">
                                    <li className="mb-2"><a href="#">Vận chuyển</a></li>                                    
                                    <li className="mb-2"><a href="#">Đào tạo</a></li>
                                    <li className="mb-2"><a href="#">Truyền thông</a></li>
                                </ul>                                                                        
                            </div>
                            <div className="col-12 col-md-3">
                                <h4 className="text-muted font-weight-bold mb-3 footer-nav-header" style={{color: "#737373 !important"}}>Nhà phát triển</h4>
                                <ul className="footer-nav pl-0 mb-4">
                                    <li className="mb-2"><a href="#">Nền tảng</a></li>
                                    <li className="mb-2"><a href="#">Đăng ký</a></li>
                                    <li className="mb-2"><a href="#">Tài liệu</a></li>                                    
                                    <li className="mb-2"><a href="#">APIs</a></li>                   
                                </ul>                                    
                            </div>                            
                        </div>

                        <div className="row">
                            <div className="card-body ml-2" style={{borderTop: "1px solid rgba(128,128,128,0.35)", borderBottom: "1px solid rgba(128,128,128,0.35)"}}>
                                <div className="row">
                                    <div className="col-5 col-md-2 align-items-left justify-content-left">
                                        <div className="row">
                                            <div className="avatar avatar-4by3 avatar-xs">
                                                <img className="" src="/assets/img/vn-flag.png" className="avatar-img rounded"/>
                                            </div>
                                            <a className="pt-1">
                                                <span className="text text-white ml-3">Tiếng Việt</span>
                                            </a>
                                            </div>
                                        </div>
                                    <div className="col-auto mr-auto"></div>
                                    <div className="col-5 col-md-3">
                                        
                                        <div className="row">
                                            <div className="col-auto ml-auto"></div>
                                            <div className="col-auto">
                                                <a href="https://www.facebook.com/cabineat.vn" title="Facebook" className="mr-3">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                                                        <path fill="#fff" d="M14.2 11l.4-3H11V6.3c0-.9.9-1.3 2.1-1.3h.9V2.1S12.7 2 11.6 2C9.3 2 8 3.4 8 6v2H5v3h3v7h3v-7h3.2z"></path>
                                                    </svg>
                                                </a>
                                                {/* <a href="#" title="Instagram">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20">
                                                    <path fill="#fff" d="M17.8 6.7c0-.9-.2-1.4-.4-1.9-.2-.6-.5-1-1-1.4-.5-.5-.9-.7-1.4-1-.5-.2-1.1-.3-1.9-.4H10c-2.1 0-2.5 0-3.3.1-.9 0-1.4.2-1.9.4-.6.2-1 .4-1.4.9-.5.4-.7.9-1 1.4-.2.6-.3 1.1-.3 2-.1.7-.1 1-.1 3.2s0 2.5.1 3.3c0 .9.2 1.4.4 1.9.2.6.5 1 1 1.4s.9.7 1.4 1c.4.2 1.1.3 1.9.4H10c2.1 0 2.4 0 3.2-.1.9 0 1.4-.2 1.9-.4.6-.2 1-.5 1.4-1 .5-.5.7-.9 1-1.4.2-.5.3-1.1.4-1.9 0-.9.1-1 .1-3.2-.1-2.1-.1-2.5-.2-3.3zm-1.4 6.5c0 .8-.2 1.2-.2 1.5-.2.4-.3.6-.6.9-.2.2-.6.5-.9.6-.3.1-.7.2-1.5.2-.9 0-1.1.1-3.2.1s-2.4 0-3.2-.1c-.8 0-1.2-.2-1.5-.2-.5-.1-.7-.2-1-.6-.2-.2-.5-.6-.6-.9-.2-.3-.3-.7-.3-1.5 0-.9-.1-1.1-.1-3.2 0-2.2 0-2.4.1-3.2 0-.8.2-1.2.2-1.5.2-.4.3-.6.6-.9.2-.2.6-.5.9-.6.5-.1.9-.3 1.7-.3.9 0 1.2-.1 3.2-.1s2.3 0 3.1.1c.8 0 1.2.2 1.5.2.4.2.6.3.9.6.3.3.5.7.6 1 .2.3.3.7.3 1.5 0 .9.1 1.1.1 3.2 0 2.2 0 2.4-.1 3.2zM10 5.9c-2.2 0-4.1 1.8-4.1 4.1s1.8 4.1 4.1 4.1 4-1.9 4-4.1-1.8-4.1-4-4.1m0 6.7c-1.4 0-2.6-1.2-2.6-2.6S8.5 7.4 10 7.4s2.6 1.2 2.6 2.6-1.2 2.6-2.6 2.6m5.1-6.8c0 .6-.4 1-1 1s-1-.4-1-1 .4-1 1-1 1 .4 1 1"></path>
                                                </svg>
                                                </a> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row">                            
                            <div className="col-12 col-md-4">
                                <p className="copyright text-md-left text-center ml-3 mt-3" style={{color: "#737373 !important"}}>© 2020 CabinEat Pte. Ltd.</p>
                            </div>
                            
                            {/* <div className="card-body ml-md-auto">
                                <nav className="align-items-center justify-content-center">
                                    <ul className="destination-links text-md-right text-center">
                                        <li className="py-2"><a href="#">Điều khoản & chính sách</a></li>
                                    </ul>
                                </nav>
                            </div> */}

                        </div>
                    </div>
                </footer>
                <style jsx>{`
                .page-footer {
                    position: relative;
                    background-color: #030303;
                    color: #737373;
                    font-size: 14px;
                    line-height: 24px;
                }
                .pad-vert-medium {
                    padding-top: 60px !important;
                    padding-bottom: 60px !important;
                }
                @media (min-width: 1292px){
                    .content {
                        width: 1016px;
                    }
                }

                .destination-links {
                    list-style-type: none
                }

                .footer-nav {
                    list-style-type:none !important;                    
                }
                .footer-nav-header {
                    color: #737373 !important;
                    border-bottom: 1px solid;
                    padding-bottom: 10px;
                }
                    
                `}</style>
            </>
        )
    }

}