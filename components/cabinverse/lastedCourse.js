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

export default class LastestCourse extends React.Component {
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
                <div id="releated" className="mt-5 container">
                    <h5 className="pre-title"> <span className="fe fe-briefcase mr-2"></span> Mới nhất</h5>
                    <ul className="list-none-style pt-2">
                        {lastestEntries && lastestEntries.map((item, index)=>(
                            <li className="border-bottom py-3 related-item" key={index}>
                                <h4 className="font-weight-normal "><a href="#" className="text-dark mb-2">{item.fields.collection.fields.name}</a></h4>
                                <a href="#" className="">{item.fields.title}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </>
        )
    }
}