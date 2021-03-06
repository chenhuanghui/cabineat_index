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
                <div className="bg-dark subscribe-wrapper grid grid-gap-12-12 align-items-center justify-content-center">
                    <p className="text-center caption" style={{lineHeight: "30px"}}>Đã hơn 3.000 nhà hàng đã tham gia cùng chúng tôi.</p>
                    <p className="text-center small font-weight-lighter">Sở hữu <strong>Nhà Hàng Số</strong>, chủ động kinh doanh delivery trong vòng 1 nốt nhạc cùng CabinEat.</p>
                    <input type="text" 
                        id="email_address" 
                        className="col-12 form-control form-control-appended" 
                        placeholder="Địa chỉ email"
                        onKeyPress={()=>{$('.invalid-feedback').hide()}}
                    />
                    <button className="col-12 mt-3 btn btn-primary btn-subscribe" onClick={this.addScubscribe}>
                        <small>Nhận thông báo</small>
                    </button>
                    <div className="form-notify">
                        <div className="invalid-feedback text-center">Địa chỉ email chưa chính xác</div>
                        <div className="valid-feedback text-center">Chúng tôi sẽ gởi cập nhật thông tin đến email của bạn vừa đăng ký.</div>
                    </div>
                </div>
                <style>{`
                .subscribe-wrapper {
                    grid-template-rows: 1fr;
                    padding: 100px 24px;
                }
                `}</style>          
            </>
        )
    }
}