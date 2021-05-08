import React, { useState } from 'react';

export default function NavVer02() {
    const [isShowNav, setShowNav] = useState(false)
    const toggleMenu = ()=> {   
        
    }

    return (
        <header className="navbar-ver2 bg-white">
            <div className="outer">
                <div className="limit limit--l nav-wrapper">
                    <div className="nav-left logo">
                        <img src="/assets/img/logo.svg" className=""/>
                    </div>                
                    <div className="nav-right">                        
                        {/* <a href='/a0012da95c2341beb0b38bcce71b1048?utm_source="cabineat.vn"' className="">Trợ giúp</a> */}
                        <a href='https://my.cabineat.vn/sign-up?utm_source="cabineat.vn"' className="ml-3 font-weight-bold text-dark">Tạo tài khoản miễn phí 👌</a>
                        {/* <span className="fe fe-menu fe-nav-icon ml-2"></span> */}
                    </div>    
                    
                </div>
            </div>
            <style jsx>{`
                .nav-wrapper {
                    height: 60px;
                    display: grid;
                    grid-template-columns: 1fr 3fr;  
                    align-items: center;                  
                }
                .nav-left {
                    justify-self: start;
                }
                .nav-right {
                    justify-self: end;
                }
                

                @media (min-width:768px){
                    .fe-nav-icon {
                        display: none;
                    }
                }
            `}</style>
        </header>
    )
}