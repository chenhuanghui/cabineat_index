import React from 'react';
import Annoucement from '../../announcement';


export default function NavVer02() {
    const toggleMenu = ()=> {        
        if(!$('.nav-list-wrapper').hasClass('show')) 
            $('.nav-list-wrapper').addClass('show')
        else $('.nav-list-wrapper').removeClass('show')        
    }
    return (
        <div className="nav grid grid-template-columns-1fr bg-white">
            <div className="nav-top nav-top-wrapper container-cabin grid align-items-center padding-x">
                <div className="nav-top-item-1 justify-self-start">
                    <a href="#" className="font-weight-bold small mr-2 text-dark">
                        <span className="fe fe-user mr-2"></span>Hỗ trợ</a>
                </div>
                <div className="nav-top-item-2 justify-self-end">
                    <a className="font-weight-bold small mr-4 text-dark" href="https://my.cabineat.vn">Đăng nhập</a>
                    <a className="font-weight-bold small mr-4 text-dark" href="/events">Sự kiện</a>
                    <a className="font-weight-bold small text-dark" href="/about">
                        Giới thiệu
                        <span className="fe fe-chevron-down"></span>
                    </a>
                </div>
            </div>
            <div className="navbar-light border-bottom">
                <div className="nav-wrapper grid container-cabin align-items-center">
                    <div className="nav-item-1 logo">
                        <img src="../assets/img/logo.svg" alt="..." className="navbar-brand-img" style={{maxHeight: "2rem"}}/>
                    </div>

                    <div className="nav-item-2 nav-toggle justify-self-end align-self-end">
                        <span className="navbar-toggler-icon" onClick={toggleMenu}></span>
                    </div>

                    <div className="nav-item-3 nav-list-wrapper">                        
                        <a className="nav-item-link align-self-center font-weight-bold text-dark" href="/">Delivery Suite Bundle</a>
                        <a className="nav-item-link align-self-center font-weight-bold text-dark" href="/cabinverse">Học viện</a>
                        <a className="nav-item-link align-self-center btn btn-create-store text-white" style={{padding: "6px 12px !important"}}>Tạo tài khoản miễn phí</a>
                    </div>
                </div>
            </div>
            

            <style>{`
            .nav {
                box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06);
            }
            .nav-top-wrapper {
                padding: 12px 12px !important;     
                display: none;
            }

            .nav-wrapper {
                grid-template-columns: 1fr 25px;
                padding: 24px 12px !important;                                
            }
            .nav-item-2 {

            }            

            .nav-item-3 {
                padding: 12px 0px 12px 0px;
                display: none;
            }
            
            .nav-item-3.show {
                display: inline-grid !important;
                transition: opacity 1s ease-out;
            }

            .nav-item-3 a{
                display: block;
                padding: 6px 0px;
            }

            .btn-create-store {
                background-color: #1F4DF5;                
            }

            @media (min-width:992px){
                .nav-top {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                }
                .nav-wrapper {
                    grid-template-columns: 150px 1fr;
                    padding: 12px 12px !important;
                }
                .nav-item-2 {display: none;}
                .nav-item-3 {
                    display: flex !important;
                    justify-self: end !important;                    
                }
                .nav-item-3 a{
                    padding: 0px 6px !important;
                }
                .nav-item-link {
                    margin-right: 10px;
                }
            }

            `}</style>
        </div>
    )
}