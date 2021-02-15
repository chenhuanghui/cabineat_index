export default function Feature() {
    return (
        <div className="features grid grid-gap-24-16 bg-white container-cabin">                    
            <div className="feature-video padding justify-self-center" style={{backgroundColor:"rgb(248, 246, 243)"}}>
                <video width= "100%" autoPlay loop muted playsInline>
                    <source src="https://ucarecdn.com/3351b813-bc37-449a-9693-0fe4f87308e5/clickandcollect2.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="feature-content-wrapper">
                <div className="grid grid-gap-24-16">
                    <div className="feature-title">
                        <p className="caption-extra font-weight-bold">Click & Collect</p>
                        <p className="title">Drive additional revenue with a best-in-class click & collect service</p>
                    </div>                            
                    <div className="grid grid-gap-8-8">
                        <p className="font-weight-bold">Smart time slot</p>
                        <p className="">Prevent overselling (or overcrowding) with availability limits per collection time slot.</p>
                    </div>
                    <div className="grid grid-gap-8-8">
                        <p className="font-weight-bold">Real-time customer notifications</p>
                        <p className="">Keep customers in the loop with automatic notifications at every step of the journey.</p>
                    </div>
                    <div className="grid grid-gap-8-8">
                        <p className="font-weight-bold">Take orders in advance</p>
                        <p className="">Manage demand and capacity plan by allowing your customers to pre-order, whether that's later in the day or in 2 weeks.</p>
                    </div>
                </div>
            </div>
            <style jsx>{`
            .features {
                padding-top: 100px;
            }
            @media (min-width: 768px) {     
                .features {
                    padding-top: 100px;
                    grid-template-columns: 1fr 1fr;
                }
            }
            `}</style>
        </div>
    )
    
}