import React from 'react';
import Link from 'next/link'
import Annoucement from '../../announcement';

export default function NavVer02() {
    const toggleMenu = ()=> {        
        if(!$('.nav-list-wrapper').hasClass('show')) 
            $('.nav-list-wrapper').addClass('show')
        else $('.nav-list-wrapper').removeClass('show')        
    }
    return (
        <div className="nav grid grid-template-columns-1fr bg-white">
            <Annoucement
                url="https://www.facebook.com/cabineat.vn"
                title="Chương trình hỗ trợ đồng hành cùng doanh nghiệp Việt, giảm tác động covid-19"
            />

            <div className="navbar-light border-bottom">
                <div className="nav-wrapper grid container-cabin align-items-center">
                    <div className="nav-item-1 logo">
                        <img src="../assets/img/logo.svg" alt="..." className="navbar-brand-img" style={{maxHeight: "2rem"}}/>
                    </div>

                    <div className="nav-item-2 nav-toggle justify-self-end align-self-end">
                        <span className="navbar-toggler-icon" onClick={toggleMenu}></span>
                    </div>

                    <div className="nav-item-3 nav-list-wrapper">
                        <a className="nav-item-link font-weight-bold">Học viện</a>
                        <a className="nav-item-link font-weight-bold">Sự kiện</a>
                        <a className="nav-item-link font-weight-bold">Giới thiệu</a>
                        <a className="nav-item-link font-weight-bold">Truy cập</a>
                    </div>
                </div>
            </div>

            <style>{`
            .nav-wrapper {
                grid-template-columns: 1fr 25px;
                padding: 24px 0px;                
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

            @media (min-width:992px){
                .nav-wrapper {
                    grid-template-columns: 150px 1fr;
                    padding: 12px 0px !important;
                }
                .nav-item-2 {display: none;}
                .nav-item-3 {
                    display: flex !important;
                    justify-self: end !important;                    
                }
                .nav-item-3 a{
                    padding: 0px 6px !important;
                }
            }

            `}</style>
        </div>
    )
}