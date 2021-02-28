
export default function IntroDeliveryOnDemand() {
    return (
        <div className="container-cabin intro-delivery padding-top-24">
            <div className="grid grid-gap-24-16 intro-delivery-wrapper">
                <div className="align-self-center justify-self-center grid grid-gap-12-12">
                    <p className="title text-uppercase">SQUARE ONLINE</p>
                    <p className="caption-extra font-weight-bold">On-demand delivery for restaurants.</p>
                    <p className="">Get professional delivery from DoorDash or Postmates without paying commissions.</p>
                </div>
                <div className="intro-image">                    
                    <img src="https://images.ctfassets.net/2d5q1td6cyxq/1Ke8w4z2v4V0BBLb9VjpCU/cae733a253e057b67e82eb9cb0c8c145/odd-hero.jpg" width="100%" className="rounded"/>
                </div>
            </div>
            <style jsx>{`
                .intro-delivery .intro-delivery-wrapper {
                    grid-template-columns: 1fr;
                }

                @media (min-width:768px){
                    .intro-delivery .intro-delivery-wrapper {
                        grid-template-columns: 1fr 1fr;
                    }
                    .intro-image {
                        padding: 12px;
                    }
                }
            `}</style>
        </div>
    )
}