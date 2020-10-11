import Head from 'next/head'
import ModalPackage from "../components/modalPackage"


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
                                <p className="text-muted text-center mb-5 mt-1">Tạo cửa hàng online của riêng bạn.</p>

                                <div>
                                    <div className="form-group">
                                        <label>Tài khoản <span className="small muted">(Email / Số điện thoại)</span></label>
                                        <input className="form-control"  id="account_id"/>
                                    </div>                                    
                                    <div className="form-group">
                                        <label>Mật khẩu</label>
                                        <div className="input-group input-group-merge">
                                            <input type="password" className="form-control form-control-appended" placeholder="Enter your password"/>
                                            <div className="input-group-append"> 
                                                <span className="input-group-text">
                                                    <i className="fe fe-eye"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <button className="btn btn-lg btn-block btn-primary mb-3" onClick={this.signup}>
                                        Đăng nhập
                                    </button>

                                    <div className="text-center"> 
                                        <small className="text-muted text-center">Bạn chưa có tài khoản? <a href="/signup">Đăng ký</a>.</small>
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
            </>
        )
    }
}