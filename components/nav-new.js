import React from 'react';
import Router from 'next/router';
import Link from 'next/link'
import Modal from 'react-modal';
import MenuModal from '../components/menu-modal'

export default class Nav extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openMenu: false
        }
    }

    componentDidMount() {    
    }
    
    toggleMenu = () => {
        // console.log("modal open")
        // $("body").addClass("modal-open")
        // $(".modal-backdrop").show()
        // this.setState({openMenu: true})
        if ($(".navbar-collapse").hasClass("show")) {
            $(".navbar-collapse").removeClass("show")
        } else {
            $(".navbar-collapse").addClass("show")
        }        
    }

    render() {        
           
        return(
            <>
            <nav className="navbar navbar-expand-lg navbar-light" id="topnav">
                <div className="container">          
                    <a className="navbar-brand mr-auto mt-2" href="./index.html">
                        <img src="./assets/img/logo.svg" alt="..." className="navbar-brand-img" style={{maxHeight: "2rem"}}/>
                    </a>

                    {/* <div className="navbar-user d-flex d-md-none" id="navbar" >
                        <span className="fe fe-user-check " style={{fontSize: "25px"}}></span>
                    </div> */}

                    <div className="navbar-collapse collapse ml-auto order-last" id="navbar" >
                        <ul className="navbar-nav mr-lg-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="#">Công cụ</a>
                            </li>  
                            <li className="nav-item">
                                <a className="nav-link" href="#">Kiến thức</a>
                            </li>
                        </ul>
                        <hr className="d-md-none"/>
                        <ul className="navbar-nav mr-lg-auto">
                            <li className="nav-item">
                                <a href="http://my.cabineat.vn" className="nav-link">Đăng nhập</a>
                            </li>  
                        </ul>
                    </div>
                    
                    <button className="navbar-toggler ml-auto" onClick={this.toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                    </button>      

                    {/* <div className="navbar-user d-none d-md-flex ml-4" id="navbar" >
                        <a href="http://my.cabineat.vn/sign-in" target="_blank" className="text text-dark"><span className="fe fe-user-check " style={{fontSize: "25px"}}></span></a>    
                    </div> */}
                    
                    {/* <button className="navbar-toggler ml-auto d-block d-md-none" onClick={this.showMenuModal}>
                        <span className="navbar-toggler-icon"></span>
                    </button> */}
                </div>
            </nav>
            {this.state.openMenu 
                ? <MenuModal 
                    onClosed = {()=> {
                        this.setState({openMenu: false})
                    }}
                />
                : null
            }
        <style jsx>{`
        .nav-link {
            color: #1a1a1a !important;
            font-weight: bold !important;
        }

        .navbar{
            position: fixed;
            width: 100%;
            top: 0px;
            z-index: 1000
        }
        
        `}</style>
            </>
        )
    }

}