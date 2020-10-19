import React from 'react';
import Router from 'next/router';
import Link from 'next/link'
import $ from 'jquery';

// https://www.npmjs.com/package/react-multi-carousel
import Carousel from 'react-multi-carousel';
import ReactMarkdown from 'react-markdown';

export default class CarouselNew extends React.Component {
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
        }
        return(
            
            <section className="pb-6 custom">                
                <div className="content">
                    <div className="carousel">
                        <Carousel 
                        arrows
                        showDots={true}
                        renderDotsOutside
                        dotListClass = "carousel-nav"
                        responsive={responsive}
                        >
                            {this.props.data.length > 0 && this.props.data.map((item, index) => (
                                <div className="carousel-slide" data-index={index} key={item.id} id={item.id}>
                                    <div data-entry-id={item.id}>
                                        <div className="row">
                                            <div className="picture">
                                                <img src={item.fields.img[0].url} className="img-fluid rounded"/>
                                            </div>
                                        </div>
                                        <div className="row pt-4">
                                            <ReactMarkdown source={item.fields.title} className="mb-0 mb-n3 h2"/>
                                            <ReactMarkdown source={item.fields.desc} />
                                        </div>
                                    </div>
                                </div>
                            ))}                            
                        </Carousel>    
                    </div>
                </div>
                <style jsx>{`                
                .react-multi-carousel-item {
                    list-style-type : none !important;
                    margin: 0 !important;
                    padding: 0 !important;
                }

                .carousel-nav {
                    position: absolute;
                    bottom: -25px ~!important;
                }
                
                `}</style>
        </section>
        )
    }

}