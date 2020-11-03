import Head from 'next/head'
import Nav from '../nav-new'
import Footer from '../footer-new'

import ReactMarkdown from "react-markdown";
import $ from 'jquery';

const AirtablePlus = require('airtable-plus');
const airtable = new AirtablePlus({
    baseID: 'app69z8vsFZto6tC8',
    apiKey: 'keyLNupG6zOmmokND'
});

export default class Subscribe extends React.Component {
    componentDidMount() {

    }

    async addScubscribe() {
        // const res = await airtable.create({ firstName: 'foo' });
        var emailVal = $("#email_address").val()
        
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailVal))
        {
            const res = await airtable.create({ email: emailVal},{tableName:"Email"});
            if (res) {
                $("#email_address").hide()
                $('.btn-subscribe').hide()
                $('.valid-feedback').show()
            }
        } else {
            $('.invalid-feedback').show()
        }
    }

    render() {
        return (
            <>            
                <div className="bg-dark">         
                    <div className="container">
                        <div className="row align-items-center justify-content-center py-6 ">
                            <div className="col-11">
                                <h1 className="fe fe-file-text text-center" style={{fontSize: "3rem"}}></h1>
                                <h2 className="text-center" style={{lineHeight: "30px"}}>Tham gia cùng hơn 3.000 nhà hàng, đã kinh doanh cùng chúng tôi.</h2>
                                <p className="text-center small">Nhận các hướng dẫn, mẹo và kiến thức kinh doanh nhà hàng online qua email.</p>
                                <div className="form">
                                    <input type="text" 
                                        id="email_address" 
                                        className="col-12 form-control form-control-appended" 
                                        placeholder="Địa chỉ email"
                                        onKeyPress={()=>{$('.invalid-feedback').hide()}}
                                    />
                                    <button className="col-12 mt-3 btn btn-primary btn-subscribe" onClick={this.addScubscribe}>Nhận thông báo</button>
                                    <div className="invalid-feedback text-center">Địa chỉ email chưa chính xác</div>
                                    <div className="valid-feedback text-center">Chúng tôi sẽ gởi cập nhật thông tin đến email của bạn vừa đăng ký.</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>                
            </>
        )
    }
}