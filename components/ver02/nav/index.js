import React from 'react';
import Annoucement from '../../announcement';


export default function NavVer02() {
    const toggleMenu = ()=> {        
        if(!$('.nav-wrapper').hasClass('show')) {
            $('.nav-wrapper').addClass('show')
            $('.nav-list-wrapper').css('display','grid')
            $('.sub-menu').css('display','grid')
            $('.btn-create-store').css('display','grid')
        }
        else {
            $('.nav-wrapper').removeClass('show')
            $('.nav-list-wrapper').css('display','none')
            $('.sub-menu').css('display','none')
            $('.btn-create-store').css('display','none')
        }
    }
    return (
        <div className="nav grid grid-template-columns-1fr bg-white">
            {/* <div className="nav-top nav-top-wrapper container-cabin grid align-items-center padding-x">
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
            </div> */}
            <div className="navbar-light border-bottom">
                <div className="nav-wrapper grid container-cabin align-items-center grid-gap-16-16">
                    <div className="nav-item-1 logo grid">
                        <img src="../assets/img/logo.svg" alt="..." className="navbar-brand-img" style={{maxHeight: "2rem"}}/>                        
                        <span className="navbar-toggler-icon ml-auto" onClick={toggleMenu}></span>                    
                    </div>

                    <div className="nav-list-wrapper grid grid-gap-12-12">                        
                        <a className="nav-item-link font-weight-bold text-dark" href="#">nhahang.so</a>
                        <a className="nav-item-link font-weight-bold text-dark" href="#">cabinpos</a>
                        <a className="nav-item-link font-weight-bold text-dark" href="#">delivery</a>
                        <a className="nav-item-link font-weight-bold text-dark" href="#">thanh toán</a>                        
                    </div>

                    <a className="nav-item-link btn-primary btn btn-create-store text-white" style={{padding: "6px 12px !important"}}>Tạo tài khoản miễn phí</a>

                    <div className="grid padding-y grid-gap-12-12 sub-menu">
                        <a className="font-weight-bold text-dark" href="/events">Sự kiện</a>
                        <a className="font-weight-bold text-dark" href="/about">Giới thiệu</a>
                        <a className="font-weight-bold text-dark" href="https://my.cabineat.vn">Đăng nhập</a>
                    </div>
                </div>
            </div>
            

            <style>{`
            .nav {
                box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.06);
            }            

            .nav-wrapper {
                grid-template-columns: 1fr;
                padding: 24px 12px !important;
            }            

            .logo {
                grid-template-columns: 1fr 25px;
                border-bottom: 1px;
            }

            .nav-list-wrapper, .sub-menu, .btn-create-store {
                display: none;
            }
            
            .nav-item-3.show {
                display: inline-grid !important;
                transition: opacity 1s ease-out;
            }                        

            @media (min-width:768px){
                .logo {
                    grid-template-columns: 1fr;
                }
                .navbar-toggler-icon {
                    display: none;
                }
                .nav-wrapper {
                    grid-template-columns: 150px 1fr auto;
                    padding: 12px 12px !important;
                }
                .nav-list-wrapper {
                    grid-template-columns: repeat(auto-fit, minmax(min-content, 100px));
                }
                .nav-item-link {
                    text-align: center;
                }
                
                .nav-list-wrapper, .sub-menu, .btn-create-store {
                    display: grid;
                }

                .sub-menu {
                    grid-column: 1/4;
                    grid-row: 1/2;
                    display: flex;
                    margin-left: auto;
                }
                .sub-menu a{
                    border-right: 1px solid #e3ebf6;
                    padding-right: 12px;
                    font-size: 12px !important;
                }
                .sub-menu a:last-child {
                    border-right: none !important;
                }
            }

            `}</style>
        </div>
    )
}