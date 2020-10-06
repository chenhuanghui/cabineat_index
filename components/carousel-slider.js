import React from 'react';
import Router from 'next/router';
import Link from 'next/link'
import $ from 'jquery';

// https://www.npmjs.com/package/react-multi-carousel
import Carousel from 'react-multi-carousel';
import ReactMarkdown from 'react-markdown';

export default class CarouselSlider extends React.Component {
    constructor(props){
        super(props);
        this.state = {
        }
    }

    componentDidMount() {    
        $('.react-multi-carousel-dot').each(function(){
            $(this).addClass('carousel-button')
            console.log('add')
        })
    }

    render() {
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
        };
        console.log(this.props.data[0], this.props.data[0].fields.img[0].url)
        return(
            
            <section className="section-multi-column bg-white auto-layout flex-valign-middle overflow-hidden" data-entry-id="1Mfj7eQcMjx9OkVbkKLRv1">                
                <div className="content">
                    <div className="carousel">
                        <Carousel 
                        arrows
                        // showDots={true}
                        // renderDotsOutside
                        // dotListClass = "carousel-nav"
                        responsive={responsive}
                        >
                            {this.props.data.length > 0 && this.props.data.map((item, index) => (
                                <div className="column carousel-slide" data-index={index} key={item.id} id={item.id}>
                                    <div data-entry-id={item.id}>
                                        <div className="grid grid-space-line">
                                            <div className="column">
                                                <div className="position-relative">
                                                    <div className="picture">
                                                        <img src={item.fields.img[0].url} />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column">
                                                <div className="headings-compact font-size-normal">
                                                    <h3 className="balance-text h3 markdown-custom" data-title-for={item.id}>
                                                        <ReactMarkdown source={item.fields.title} />
                                                    </h3>
                                                    <div data-desc-for={item.id}>
                                                        <ReactMarkdown source={item.fields.desc} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}                            
                        </Carousel>    
                        {/* <div className="carousel-nav">
                            <div className="carousel-button" data-index="0" data-active="true"></div>
                            <div className="carousel-button" data-index="1" data-active="false"></div>
                            <div className="carousel-button" data-index="2" data-active="false"></div>
                            <div className="carousel-button" data-index="3" data-active="false"></div>
                            <div className="carousel-button" data-index="4" data-active="false"></div>
                        </div> */}
                    </div>
                </div>
                <style jsx>{`                
                .react-multi-carousel-item {
                    list-style-type : none !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }
                `}</style>
        </section>
        )
    }

}