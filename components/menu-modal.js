import $ from 'jquery';
import React from 'react';

export default class MenuModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalHeight: 0,
            modalWidth: 0
        }
    }

    componentDidMount() {
        let currentComponent = this
        
        let clientHeight = window.innerHeight + 'px';
        let clientWidth = window.innerWidth + 'px';
        console.log("clientHeight: ", clientHeight)
        currentComponent.setState({modalHeight: clientHeight})        
        currentComponent.setState({modalWidth: clientWidth})        
    }

    componentDidUpdate (prevProps, prevState) {
        console.log("clientHeight: ", this.state.modalHeight)
    }

    handleChange = event => {
        const { value } = event.target;
        this.setState({selectCat: value});
    }

    onClose = () => {
        // $(".modal-backdrop").hide()
        $("body").removeClass("modal-open")        
        this.props.onClosed()
    }

    render() {
        const {categories, modalHeight, selectCat} = this.state
        
        return(            
            <div className="modal show" id="menuModal" style={{height: modalHeight, overflowY: "auto"}}>
                <nav className="navbar navbar-expand-lg navbar-light">
                    <div className="container">
                        <a className="navbar-brand mr-auto" href="./index.html">
                            <img src="./assets/img/logo.svg" alt="..." className="navbar-brand-img" style={{maxHeight: "1.9rem"}}/>
                        </a>
                        <div className="navbar-collapse mr-lg-auto order-lg-first collapse show">
                            <ul className="navbar-nav mr-lg-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#">Bảng giá</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#">Công cụ miễn phí</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link" href="#">Kiến thức</a>
                                </li>
                            </ul>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#">Đăng nhập</a>
                                </li>
                            </ul>
                        </div>
                        
                        <button type="button" className="close close-btn" onClick={this.onClose}> 
                            <span className="fe fe-x"></span>
                        </button>
                    </div>
                </nav>
                
                
                <style jsx>{`
                .category-item:hover {
                    cursor: pointer;
                    text-decoration: underline;
                }
                .card-option .row:hover {
                    cursor: pointer
                } 
                #createProduct {opacity: 1}
                .modal.show {
                    display : block;
                }
                #menuModal{
                    position: relative;
                    top : -58px;
                    left : 0;
                }
                .close-btn {
                    position: absolute;
                    top: 0;
                    right : 0
                }
                `}</style>
            </div>
        )
    }
}