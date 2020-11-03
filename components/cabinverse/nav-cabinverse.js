import Head from 'next/head'
import Nav from '../nav-new'
import Footer from '../footer-new'

import ReactMarkdown from "react-markdown";
import $ from 'jquery';


const contentful = require("contentful");
const client = contentful.createClient({
  space: "0s01bkenrjm9",
  accessToken: "n9oDwlvUxgwxjQPXKEl0TepabVC7zjC-ZuwO5yCf9Ls"
});

export default class NavCabinverse extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lastestEntries : []
        }

    }
    async componentDidMount() {
        let currentComponent = this;

        const entriesRes = await client.getEntries({content_type: 'courseItem'})
        currentComponent.setState({lastestEntries: [...entriesRes.items]})
    }

    render() {
        const {lastestEntries} = this.state
        return (
            <>            
                <nav className="navbar navbar-expand-lg  navbar-light" id="topnav">
                    <div className="container">                                      
                        <div className="navbar-collapse collapse mr-auto order-last" id="sub-nav" >
                            <ul className="navbar-nav mr-lg-auto">
                                <li className="nav-item">
                                    <a className="nav-link disable" href="#">Mới nhất</a>
                                </li>  
                                <li className="nav-item">
                                    <a className="nav-link disable" href="#">Tìm kiếm ý tưởng</a>
                                </li>  
                                <li className="nav-item">
                                    <a className="nav-link disable" href="#">Thiết lập nhà hàng</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disable" href="#">Kinh doanh & Truyền thông</a>
                                </li>
                            </ul>
                        </div>   
                        <div className="navbar-toggler" onClick={this.toggleSubNav} style={{width: "100%"}}>
                            <div className="row pl-3 pr-3">
                                <span className="mr-auto mt-2">Chọn chủ đề</span>
                                <span className="fe fe-chevron-down "></span>
                            </div>
                        </div>                               
                    </div>                        
                </nav>
            </>
        )
    }
}