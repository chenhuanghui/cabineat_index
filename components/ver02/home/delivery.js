export default function Delivery() {
    return (
    <div className="delivery bg-soft padding-y-24">
        <div className="container-cabin delivery-wrapper grid grid-gap-24-16">
            <div className="delivery-item-1 grid grid-gap-24-16">
                <div className="delivery-title">
                    <p className="caption-extra font-weight-bold letter-spacing-n1px">Local delivery</p>
                    <p className="title">Offer a delivery experience to match the aggregators. Bring your own drivers or connect to our network</p>
                </div>
                <div className="delivery-content-wrapper grid grid-gap-24-16">
                    <div className="grid grid-gap-8-8">
                        <p className="font-weight-bold">Update customers in real-time</p>
                        <p className="">Keep customers in the loop with automatic notifications at every step of the journey.</p>
                    </div>
                    <div className="grid grid-gap-8-8">
                        <p className="font-weight-bold">Live tracking screen</p>
                        <p className="">Reduce phone calls and set expectations with a live map displaying the driver's current location and expected arrival time.</p>
                    </div>
                    <div className="grid grid-gap-8-8">
                        <p className="font-weight-bold">Delivery zones</p>
                        <p className="">Cover your variable delivery costs with dynamic delivery fees calculated by postcode lookup.</p>
                    </div>
                    <div className="grid grid-gap-8-8">
                        <p className="font-weight-bold">Connect to 15+ couriers</p>
                        <p className="">Auto-dispatch orders to the courier of your choice through our delivery integration partner, Orkestro.</p>
                    </div>
                </div>
            </div>
            <div className="delivery-item-2 justify-self-center align-self-center">
                <video width= "100%" autoPlay loop muted playsInline>
                    <source src="https://ucarecdn.com/4f13583f-1dcb-4d82-9a35-cd7ff0a5c9e3/delivery3.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>      
        <style jsx>{`
        .delivery {
            padding-top: 48px !important;
            padding-bottom: 48px !important;
        }
        @media (min-width: 768px) {
            .delivery-wrapper {
                grid-template-columns: 2fr 3fr;
            }
        }
        `}</style>              
    </div>
    )
}