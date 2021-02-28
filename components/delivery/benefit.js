
export default function BenefitDeliveryOnDemand() {
    return (
        <div className="container-cabin benefit-delivery padding-y">
            <div className="grid benefit-delivery-wrapper padding-bottom">
                <div className="align-self-center">
                    <p className="caption font-weight-bold">Reliable delivery with no marketplace commissions.</p>
                </div>
                <div className="grid grid-gap-12-12 align-self-center">
                    <div className="grid grid-template-columns-24px-1fr">
                        <i className="fe fe-check mr-2 text-primary"></i>
                        <p className="title">Choose delivery from DoorDash or Postmates</p>
                    </div>
                    <div className="grid grid-template-columns-24px-1fr">
                        <i className="fe fe-check mr-2 text-primary"></i>
                        <p className="title">Build direct customer relationships by having customers order online directly from you</p>
                    </div>
                    <div className="grid grid-template-columns-24px-1fr">
                        <i className="fe fe-check mr-2 text-primary"></i>
                        <p className="title">Configure custom service fees to recoup costs associated with deliveries</p>
                    </div>
                    <div className="grid grid-template-columns-24px-1fr">
                        <i className="fe fe-check mr-2 text-primary"></i>
                        <p className="title">Integrate Square Loyalty to let customers collect and redeem points on delivery orders</p>
                    </div>                            
                </div>
            </div>
            <hr />
            <style jsx>{`
            .benefit-delivery {
                // padding-top: 50px !important;
            }
            .benefit-delivery-wrapper {
                grid-template-columns: 1fr;
                grid-gap: 24px 24px;

            }

            @media (min-width:768px){
                .benefit-delivery-wrapper {
                    grid-template-columns: 1fr 1fr;
                    grid-gap: 24px 24px;
                }
            }
            
            `}</style>
        </div>
    )
}