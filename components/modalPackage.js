import $ from 'jquery';
import React from 'react';

export default class ModalCreateProduct extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            modalHeight: 0,
        }
    }

    componentDidMount() {
        let currentComponent = this
        
        let clientHeight = (window.innerHeight) * 0.85
        console.log("clientHeight: ", clientHeight)
        currentComponent.setState({modalHeight: clientHeight})
    }

    componentDidUpdate (prevProps, prevState) {
        
    }

    handleChange = event => {
        const { value } = event.target;
        this.setState({selectCat: value});
    }

    onClose = () => {
        $(".modal-backdrop").hide()
        $("body").removeClass("modal-open")
        
        this.props.onClosed()
    }

    render() {
        const {categories, modalHeight, selectCat} = this.state
        
        return(
            <div className="modal fade show" id="createProduct" tabIndex="-1" role="dialog" aria-modal="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-card card">
                            <div className="card-header">

                                <div className="row align-items-center">
                                    <div className="col-auto">
                                        <button type="button" className="close" modal-id="#createProduct" data-dismiss="modal" aria-label="Close" onClick={this.onClose}> 
                                            <span aria-hidden="true">×</span>
                                        </button>
                                    </div>
                                    <div className="col ml-n2 text-center">
                                        <h4 className="card-header-title">Thêm sản phẩm mới</h4>
                                    </div>
                                    <div className="col-auto">
                                        <button type="button" className="save btn btn-primary btn-sm pl-4 pr-4"> Lưu</button>
                                    </div>
                                </div>

                            </div>
                            
                            <div className="card-body" style={{maxHeight: modalHeight, overflowY: "auto"}}>
                                <h6 className="header-pretitle">Thông tin</h6>

                                <div className="form-group">
                                    <label>Tên sản phẩm</label>
                                    <input type="text" className="form-control"/>
                                </div>  

                                <div className="form-group">
                                    <label>Mô tả</label>
                                    <input type="text" className="form-control"/>
                                </div>

                                <div className="form-group">
                                    <label>Giá bán</label>
                                    <input type="text" className="form-control"/>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
                <style jsx>{`
                    .modal{
                        position: fixed;
                        top: 0;
                        left: 0;
                        z-index: 1050;
                        display: none;
                        width: 100%;
                        height: 100%;
                        overflow: hidden;
                        outline: 0;
                    }               
                `}</style>
            </div>
        )
    }
}