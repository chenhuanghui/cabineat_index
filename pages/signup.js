import Head from 'next/head'
import ModalPackage from "../components/modalPackage"

// documents: https://www.npmjs.com/package/react-radio-buttons
import { RadioGroup, RadioButton } from 'react-radio-buttons';

const AirtablePlus = require('airtable-plus');
const airtable = new AirtablePlus({
    baseID: 'appZrRbUCYRH3VPvx',
    apiKey: 'keyLNupG6zOmmokND'
});

const BrandEntity = require("../entity/brandEntity")
const brandObject = new BrandEntity()

export default class HomePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            openModal: false,
            brand: '',
            email: '',
            tel: '',
            pack: '',            
        }
    }

    async componentDidMount() { 
        let currentComponent = this        
            
    }   

    async signup() {
        var brandObj = {
            name: $("#brand").val(),
            email: $("#email").val(),
            tel: $("#tel").val(),
            pack: $("#pack").attr("value")
        }
        console.log("brandObj: ", brandObj)
        const brand = await brandObject.createBrand(brandObj)
        
        console.log(brand)
        if (brand) alert("Welcome to CabinEat")
        
    }

    render() {
        const {openModal, brand, email, tel, pack} = this.state
        return (
            <>
                <Head>
                    <title>CabinEat - Trang chủ</title>
                </Head>
                <div className="d-flex align-items-center bg-auth border-top border-top-2 border-primary" style={{display:"block"}}>
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-12 col-md-5 col-lg-6 col-xl-4 px-lg-6 my-5">
                                <h1 className="display-4 text-center mb-0">Đăng ký</h1>
                                <p className="text-muted text-center mb-5 mt-1">Tạo nhà hàng online của riêng bạn.</p>

                                <div>
                                    <div className="form-group">
                                        <label>Thương hiệu</label>
                                        <input type="text" className="form-control" id="brand"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control"  id="email" placeholder="name@address.com"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Số điện thoại</label>
                                        <input type="tel" className="form-control" placeholder="" id="tel"/>
                                    </div>
                                    <div className="form-group">
                                        <label>Chọn gói sản phẩm</label>
                                        <RadioGroup onChange={(value)=> {console.log(value)} } value='6months' id="pack">
                                            <RadioButton value="1month" pointColor="#2c7be5">
                                                <p className="radio-custom mb-0">1 tháng - 149.000 đ/tháng</p>
                                                {/* <span className="text-muted">~ 5.000 đ/ngày</span> */}
                                            </RadioButton>
                                            <RadioButton value="6months" pointColor="#2c7be5">
                                                <p className="radio-custom mb-0">6 tháng - 519.000 đ/tháng</p>
                                                <span className="text-muted small">~ 85.000 đ/tháng</span>
                                            </RadioButton>
                                            <RadioButton value="12months" pointColor="#2c7be5">
                                                <p className="radio-custom mb-0">12 tháng - 719.000 đ/tháng</p>
                                                <span className="text-muted small">~ 59.000 đ/tháng</span>
                                            </RadioButton>
                                            
                                        </RadioGroup>
                                    </div>
                                    
                                    <button className="btn btn-lg btn-block btn-primary mb-3" onClick={this.signup}>
                                        Đăng ký
                                    </button>

                                    <div className="text-center"> 
                                        <small className="text-muted text-center">Bạn đã có tài khoản? <a href="/signin">Đăng nhập</a>.</small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-7 col-lg-6 col-xl-8 d-none d-lg-block">
                                <div className="bg-cover vh-100 mt-n1 mr-n3" style={{backgroundImage: "url(assets/img/covers/auth-side-cover.jpg)"}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                {this.state.openModal 
                    ? <ModalPackage
                        onClosed = {()=> {
                            this.setState({openModal: false})
                        }}
                    />
                : null}
                <style jsx>{`

                `}</style>
            </>
        )
    }
}