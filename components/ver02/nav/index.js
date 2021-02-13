import React from 'react';
import Link from 'next/link'
import Annoucement from '../../announcement';

export default function NavVer02() {
    return (
        <div className="nav grid grid-template-columns-1fr bg-white">
            <Annoucement
                url="https://www.facebook.com/cabineat.vn"
                title="Chương trình hỗ trợ đồng hành cùng doanh nghiệp Việt, giảm tác động covid-19"
            />

            <div className="nav-wrapper grid container-cabin padding-y-24 navbar-light border-bottom align-items-center">
                <div className="nav-item-1 logo">
                    <img src="../assets/img/logo.svg" alt="..." className="navbar-brand-img" style={{maxHeight: "2rem"}}/>
                </div>

                <div className="nav-item-2 nav-toggle justify-self-end align-self-end">
                    <span className="navbar-toggler-icon"></span>
                </div>

                <div className="nav-item-3 nav-list-wrapper">
                    asdfsad
                </div>
            </div>

            <style>{`
            .nav-wrapper {
                grid-template-columns: 1fr 1fr;
            }
            .nav-item-2 {

            }
            .nav-item-3 {
                display:none;
            }
            @media (min-width:768px){
                .nav-wrapper {grid-template-columns: 150px 1fr}
                .nav-item-2 {display: none;}
                .nav-item-3 {
                    display: inline-grid; 
                    justify-self: end;
                }
            }

            `}</style>
        </div>
    )
}