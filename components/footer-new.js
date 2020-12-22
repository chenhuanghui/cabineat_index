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
                <section className="help container py-6">
                    <div className="row align-items-center justify-content-center">
                    <div className="col-10 col-md-6">
                        
                            <div className="row align-items-center justify-content-center mb-4">
                                <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M18.193 47.307a1 1 0 0 0 1.414-1.414l-1.414 1.414zm-7.786-10.614a1 1 0 0 0-1.414 1.414l1.414-1.414zm11.5 18.314a1 1 0 0 0-1.414-1.414l1.414 1.414zM16.3 54.3l.733-.68a1.075 1.075 0 0 0-.026-.027l-.707.707zm.1-5l.68.733a1.08 1.08 0 0 0 .027-.026L16.4 49.3zm6.107-4.693a1 1 0 0 0-1.414-1.414l1.414 1.414zm4.4 15.3a1 1 0 0 0-1.414-1.414l1.414 1.414zM21.3 59.2l.733-.68a1.29 1.29 0 0 0-.026-.027l-.707.707zm.1-5l.68.733.027-.026-.707-.707zm10.507 10.707a1 1 0 0 0-1.414-1.414l1.414 1.414zM26.3 64.2l.733-.68a1.29 1.29 0 0 0-.026-.027l-.707.707zm.1-5l.68.733.027-.026-.707-.707zm-5.307-16.107a1 1 0 0 0 1.414 1.414l-1.414-1.414zm9.9 9.9a1 1 0 0 0 1.414 1.414l-1.414-1.414zM36.7 58.7l-.707-.707-.013.013.72.694zm-5.4 10.5l.733-.68a.928.928 0 0 0-.026-.027l-.707.707zm.1-5l.68.733a.97.97 0 0 0 .04-.04l-.72-.693zm19.208 2.693a1 1 0 0 0-1.415 1.414l1.415-1.414zM49.9 72.5l-.68-.733a1.075 1.075 0 0 0-.027.026l.707.707zm-5-.1l.733-.68a.928.928 0 0 0-.026-.027l-.707.707zm-5.292-6.707a1 1 0 0 0-1.415 1.414l1.415-1.414zm16-3.7a1 1 0 0 0-1.415 1.414l1.414-1.414zM54.9 67.6l-.68-.733a1.071 1.071 0 0 0-.027.026l.707.707zm-5-.1l.733-.68a1.29 1.29 0 0 0-.026-.027l-.707.707zm-2.993-4.407a1 1 0 0 0-1.414 1.414l1.414-1.414zm13.7-6.1a1 1 0 0 0-1.414 1.414l1.415-1.414zM59.9 62.6l-.68-.733a1.071 1.071 0 0 0-.027.026l.707.707zm-5-.1l.733-.68a1.29 1.29 0 0 0-.026-.027l-.707.707zm-3.292-4.707a1 1 0 0 0-1.415 1.414l1.415-1.414zM33.7 13.3l.707.707a1 1 0 0 0 0-1.414l-.707.707zm-27 27l-.7.713a1 1 0 0 0 1.407-.006L6.7 40.3zM1 34.7l-.708-.706a1 1 0 0 0 .007 1.42L1 34.7zM28 7.6l.707-.707a1 1 0 0 0-1.415.001L28 7.6zm45.3 32.2l-.707.707a1 1 0 0 0 1.42-.006L73.3 39.8zm-27-27l-.713-.7a1 1 0 0 0 .006 1.407l.707-.707zM52 7l.707-.707a1 1 0 0 0-1.42.006L52 7zm27 27l.713.7a1 1 0 0 0-.006-1.407L79 34zM50.207 16.707a1 1 0 0 0-1.414-1.414l1.414 1.414zM36.8 30.2l.305.952.004-.001-.309-.951zm7.3 1.8l.705-.71a.93.93 0 0 0-.02-.019L44.1 32zm16.7 16.6l.707-.707-.002-.002-.705.709zm4.1 9l-.68-.733a1.075 1.075 0 0 0-.027.026l.707.707zm-5-.1l.733-.68a1.075 1.075 0 0 0-.026-.027l-.707.707zm-3.293-4.707a1 1 0 0 0-1.414 1.414l1.414-1.414zm1.487-6.9a1 1 0 0 0 1.414 1.414l-1.414-1.414zm12.114-9.286a1 1 0 0 0-1.414-1.414l1.414 1.414zM30.315 16.701a1 1 0 1 0-1.43 1.398l1.43-1.398zm2.97 5.898a1 1 0 1 0 1.43-1.398l-1.43 1.398zM19.607 45.893l-9.2-9.2-1.414 1.414 9.2 9.2 1.414-1.414zm.886 7.7c-1.024 1.024-2.57.985-3.46.026l-1.466 1.361c1.71 1.842 4.565 1.802 6.34.027l-1.414-1.414zm-3.486 0c-.987-.987-.924-2.634.074-3.56l-1.361-1.466c-1.803 1.674-1.94 4.627-.127 6.44l1.414-1.414zm.1-3.586l5.4-5.4-1.414-1.414-5.4 5.4 1.414 1.414zm8.386 8.486c-1.024 1.024-2.57.985-3.46.027l-1.466 1.36c1.71 1.842 4.565 1.803 6.34.027l-1.414-1.414zm-3.486 0c-.987-.987-.924-2.634.074-3.56l-1.361-1.466c-1.803 1.674-1.94 4.627-.127 6.44l1.414-1.414zm.1-3.586l5.4-5.4-1.414-1.414-5.4 5.4 1.414 1.414zm8.386 8.586c-1.024 1.024-2.57.985-3.46.027l-1.466 1.36c1.71 1.842 4.565 1.803 6.34.027l-1.414-1.414zm-3.486 0c-.987-.987-.924-2.634.074-3.56l-1.361-1.466c-1.803 1.674-1.94 4.627-.127 6.44l1.414-1.414zm.1-3.586l5.4-5.4-1.414-1.414-5.4 5.4 1.414 1.414zm-4.6-15.4a2.501 2.501 0 0 1 3.586 0l1.414-1.414a4.501 4.501 0 0 0-6.414 0l1.414 1.414zm3.586 0a2.501 2.501 0 0 1 0 3.586l1.414 1.414a4.501 4.501 0 0 0 0-6.414l-1.414 1.414zm1.414 5a2.501 2.501 0 0 1 3.586 0l1.414-1.414a4.5 4.5 0 0 0-6.414 0l1.414 1.414zm3.586 0a2.501 2.501 0 0 1 0 3.586l1.414 1.414a4.501 4.501 0 0 0 0-6.414l-1.414 1.414zm1.314 4.9a2.501 2.501 0 0 1 3.586 0l1.414-1.414a4.501 4.501 0 0 0-6.414 0l1.414 1.414zm3.586 0a2.501 2.501 0 0 1 0 3.586l1.414 1.414a4.501 4.501 0 0 0 0-6.414l-1.414 1.414zm1.414 5a2.501 2.501 0 0 1 3.586 0l1.414-1.414a4.501 4.501 0 0 0-6.414 0l1.414 1.414zm3.586 0a2.502 2.502 0 0 1 0 3.586l1.414 1.414a4.501 4.501 0 0 0 0-6.414l-1.414 1.414zm0 3.586l-5.5 5.5 1.414 1.414 5.5-5.5-1.414-1.414zm-5.5 5.5c-1.025 1.024-2.57.985-3.46.026l-1.466 1.361c1.71 1.842 4.565 1.802 6.34.027l-1.414-1.414zm-3.486 0c-.987-.987-.924-2.634.074-3.56l-1.361-1.466c-1.803 1.674-1.94 4.627-.127 6.44l1.414-1.414zm.113-3.6l5.3-5.5-1.44-1.387-5.3 5.5 1.44 1.388zm17.073 3.414c1.025 1.025.986 2.57.027 3.46l1.36 1.466c1.842-1.71 1.803-4.565.028-6.34l-1.415 1.414zm0 3.486c-.987.987-2.634.924-3.56-.074l-1.465 1.361c1.674 1.803 4.627 1.94 6.44.127l-1.415-1.414zm-3.585-.1l-6-6-1.415 1.414 6 6 1.415-1.414zm8.585-8.286c1.025 1.025.986 2.57.027 3.46l1.36 1.466c1.842-1.71 1.803-4.565.027-6.34l-1.414 1.414zm0 3.486c-.987.987-2.634.924-3.56-.073l-1.466 1.36c1.674 1.803 4.627 1.94 6.44.127l-1.414-1.414zm-3.586-.1l-3.7-3.7-1.414 1.414 3.7 3.7 1.414-1.414zm8.586-8.386c1.025 1.025.986 2.57.027 3.46l1.36 1.466c1.842-1.71 1.803-4.565.028-6.34l-1.415 1.414zm0 3.486c-.987.987-2.634.924-3.56-.074l-1.465 1.361c1.674 1.803 4.627 1.94 6.44.127l-1.415-1.414zm-3.585-.1l-4-4-1.415 1.414 4 4 1.415-1.414zm-22.615-49.2l-27 27 1.414 1.414 27-27-1.414-1.414zM7.4 39.587l-5.7-5.6-1.402 1.426 5.7 5.6 1.402-1.426zm-5.693-4.181l27-27.1-1.416-1.412-27 27.1 1.416 1.412zM27.293 8.307l5.7 5.7 1.414-1.414-5.7-5.7-1.414 1.414zm46.714 30.786l-27-27-1.414 1.414 27 27 1.414-1.414zM47.013 13.5l5.7-5.8-1.426-1.402-5.7 5.8 1.426 1.402zm4.28-5.794l27 27 1.414-1.414-27-27-1.414 1.414zM78.287 33.3l-5.7 5.8 1.426 1.402 5.7-5.8-1.426-1.402zM49.5 16l-.707-.707-.003.003-.009.009-.034.034-.132.131-.472.473-1.475 1.475-2.575 2.575 1.414 1.414 2.575-2.575 1.475-1.475.473-.473.13-.13.035-.035.01-.009.001-.002h.001L49.5 16zm-5.407 3.993c.171-.172.302-.093-.02-.105-.26-.01-.625-.068-1.127-.169-.95-.19-2.29-.51-3.67-.616l-.153 1.994c1.222.094 2.382.374 3.43.584.499.1 1.009.19 1.449.206.378.013 1.033-.008 1.505-.48l-1.414-1.414zm-4.816-.89c-.877-.068-1.878.199-2.833.558-.982.369-2.041.885-3.073 1.43-1.032.544-2.071 1.135-2.997 1.651-.942.525-1.753.965-2.38 1.244l.812 1.828c.723-.322 1.612-.806 2.542-1.325.946-.527 1.95-1.1 2.956-1.63 1.006-.53 1.978-1.001 2.843-1.326.892-.335 1.553-.469 1.976-.436l.154-1.994zm-11.283 4.883c-1.477.656-2.454 1.54-2.75 2.705-.292 1.145.164 2.224.724 3.064l1.664-1.11c-.44-.66-.534-1.131-.45-1.461.078-.31.4-.826 1.624-1.37l-.812-1.828zm-2.026 5.769c.736 1.104 2.338 1.82 4.184 2.096 1.914.288 4.319.144 6.953-.699l-.61-1.904c-2.366.757-4.46.863-6.047.626-1.654-.248-2.552-.832-2.816-1.229l-1.664 1.11zm11.141 1.396c1.68-.546 3.236-.179 4.421.37a8.442 8.442 0 0 1 1.778 1.115 3.88 3.88 0 0 1 .11.095h-.001v-.001h-.001L44.1 32c.685-.729.684-.73.684-.73l-.002-.002a.52.52 0 0 1-.016-.015 3.316 3.316 0 0 0-.173-.15 10.436 10.436 0 0 0-2.223-1.398c-1.465-.677-3.56-1.21-5.88-.456l.62 1.902zm6.286 1.558l16.7 16.6 1.41-1.418-16.7-16.6-1.41 1.418zm16.698 16.598l4.1 4.1 1.414-1.414-4.1-4.1-1.414 1.414zm4.1 4.1c1.025 1.025.985 2.57.026 3.46l1.361 1.466c1.842-1.71 1.802-4.565.027-6.34l-1.414 1.414zm0 3.486c-.987.987-2.634.924-3.56-.074l-1.466 1.361c1.674 1.803 4.627 1.94 6.44.127l-1.414-1.414zm-3.586-.1l-4-4-1.414 1.414 4 4 1.414-1.414zm-1.1-9.486l10.7-10.7-1.413-1.414-10.7 10.7 1.414 1.414zM28.886 18.099l4.4 4.5 1.43-1.398-4.4-4.5-1.43 1.398z" fill="#1a1a1a"></path>
                                </svg>
                            </div>
                            <div className="row align-items-center justify-content-center">
                                <p className="font-weight-bold text-center">Hãy để chúng tôi giúp tăng trưởng hoạt động kinh doanh của bạn.</p>
                                <p className="text-center">Hệ thống <a href="http://cabineat.vn" name="cabineat nha hang online">cabineat</a> sẽ giúp bạn chủ động, đơn giản hóa các hoạt động, thiết lập các giải pháp hiện đại ứng dụng công nghệ giúp tối ưu hoạt động kinh doanh của bạn.</p>
                                <a href="http://my.cabineat.vn" className="font-weight-bold text-center">Tạo nhà hàng online ngay <span className="fe fe-chevrons-right"></span></a>
                            </div>
                        </div>
                    </div>
                </section>
                <footer className="bg-dark">
                    <div className="container py-5">
                        <div className="row mt-4 pl-1 pr-1">
                            <div className="col-12 col-md-3">
                                <h4 className="text-muted font-weight-bold mb-3 footer-nav-header" style={{color: "#737373 !important"}}>Công ty</h4>
                                <ul className="footer-nav pl-0 mb-4">
                                    <li className="mb-2"><a href="/about">Giới thiệu</a></li>
                                    <li className="mb-2"><a href="#" className="text-muted">Việc làm</a></li>
                                    <li className="mb-2"><a href="#" className="text-muted">Nhà đầu tư</a></li>
                                    <li className="mb-2"><a href="/events" >Sự kiện</a></li>
                                </ul>                                                                        
                            </div>
                            <div className="col-12 col-md-3">
                                <h4 className="text-muted font-weight-bold mb-3 footer-nav-header" style={{color: "#737373 !important"}}>CabinEat</h4>
                                <ul className="footer-nav pl-0 mb-4">
                                    <li className="mb-2"><a href="#">Kênh bán hàng</a></li>
                                    <li className="mb-2"><a href="#">Xử lý đơn hàng</a></li>
                                    <li className="mb-2"><a href="#">Hệ thống quản lý</a></li>
                                    <li className="mb-2"><a href="#">Kiến thức</a></li>
                                    <li className="mb-2"><a href="http://bit.ly/cabineat-signup">Tạo nhà hàng</a></li>
                                    <li className="mb-2"><a href="http://bit.ly/my-cabineat">Đăng nhập</a></li>
                                </ul>                                    
                            </div>
                            <div className="col-12 col-md-3">
                                <h4 className="text-muted font-weight-bold mb-3 footer-nav-header" style={{color: "#737373 !important"}}>Cabin Platform</h4>
                                <ul className="footer-nav pl-0 mb-4">
                                    <li className="mb-2"><a href="http://cabinfood.vn" target="_blank">Cabin Food</a></li>
                                    <li className="mb-2"><a href="#" >Cabin POS</a></li>
                                    <li className="mb-2"><a href="#" >Cabin Marketing</a></li>
                                    <li className="mb-2"><a href="/cabinverse" >Cabinverse</a></li>
                                </ul>                                    
                            </div>
                            <div className="col-12 col-md-3">
                                <h4 className="text-muted font-weight-bold mb-3 footer-nav-header" style={{color: "#737373 !important"}}>Công cụ</h4>
                                <ul className="footer-nav pl-0 mb-4">
                                    <li className="mb-2"><a href="#">SMS quảng cáo</a></li>
                                    <li className="mb-2"><a href="#">Tạo QRCode</a></li>
                                    <li className="mb-2"><a href="#">Tạo link ngắn</a></li>
                                    <li className="mb-2"><a href="#">Kho ảnh miễn phi</a></li>
                                </ul>                                    
                            </div>
                        </div>

                        <div className="row mt-md-4 pl-1 pr-1">
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
                            <div className="col-12 col-md-3">
                                <h4 className="text-muted font-weight-bold mb-3 footer-nav-header" style={{color: "#737373 !important"}}>Hỗ trợ & Liên hệ</h4>
                                <ul className="footer-nav pl-0 mb-4">
                                    <li className="mb-2"><a href="#">Liên hệ</a></li>
                                    <li className="mb-2"><a href="mailto:growth@cabineat.vn">Email</a></li>
                                    <li className="mb-2"><a href="https://www.notion.so/cabineat/CabinEat-i-u-ki-n-i-u-kho-n-d67234052f56404b8d71166a143c51ab" target="_blank">Điều khoản, Chính sách</a></li>
                                </ul>                                    
                            </div>
                            <div className="col-12 col-md-3">
                                <div className="mt-4 mt-md-0">
                                    <h2>CabinEat</h2>
                                    <p>Hãy bắt đầu xây dựng câu chuyện thương hiệu của bạn từ nhà hàng online.</p>
                                </div>
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
                        
                        <div className="row pt-5">                            
                            <div className="col-12 col-md-4 col-lg-4 col-xl-4 mb-3">
                                <p className="copyright text-md-left text-center ml-3 mb-2" style={{color: "#737373 !important"}}>CTY TNHH CabinFood | MST: 0316237460</p>
                                <p className="copyright text-md-left text-center ml-3 mb-2" style={{color: "#737373 !important"}}>51 Nguyễn Cư Trinh - Quận 1- Hồ Chí Minh</p>
                                <p className="copyright text-md-left text-center ml-3 mb-2" style={{color: "#737373 !important"}}>growth@cabineat.vn | 094.192.6368</p>
                                {/* <p className="copyright text-md-left text-center ml-3 mt-3" style={{color: "#737373 !important"}}>© 2020 CabinEat Pte. Ltd.</p> */}
                            </div>

                            <div className="col-12 col-md-8 col-lg-8 col-xl-8 mb-3 ml-md-auto">
                                <div className="row d-flex">
                                    <div className="col-12 col-md-4 col-xl-auto col-lg-auto text-center mb-md-0 mb-2  mx-0 px-0"><a className="text-white ml-3" href="#"> Chính sách bảo mật </a></div>
                                    <div className="col-12 col-md-4 col-xl-auto col-lg-auto text-center mb-md-0 mb-2  mx-0 px-0"><a className="text-white ml-3" href="#"> Phương thức thanh toán </a></div>
                                    <div className="col-12 col-md-4 col-xl-auto col-lg-auto text-center mb-md-0 mb-2  mx-0 px-0"><a className="text-white ml-3" href="#"> Điều kiện giao dịch </a></div>
                                </div>
                            </div>                                                    

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