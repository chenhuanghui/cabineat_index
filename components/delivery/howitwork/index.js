import CardItemHowItWorkDeliveryOnDemand from "./card-item";

export default function HowItWorkDeliveryOnDemand() {
    return (
        <div className="container-cabin howitwork">
            <hr/>
            <div className="grid grid-gap-24-16 how-it-work-wrapper">
                <div className="scroll grid ">
                    <CardItemHowItWorkDeliveryOnDemand />
                    <CardItemHowItWorkDeliveryOnDemand />
                    <CardItemHowItWorkDeliveryOnDemand />
                    <CardItemHowItWorkDeliveryOnDemand />
                </div>
            </div>
            <style jsx>{`
                .howitwork {
                    padding-bottom: 50px;
                }
                .how-it-work-wrapper {
                    overflow: hidden;
                    padding-top: 50px !important;
                }
                .how-it-work-wrapper .scroll {
                    grid-gap: 24px 16px;
                    overflow-x: scroll;
                    grid-template-columns: repeat(3, minmax(280px, 424px));
                    grid-auto-flow: column;
                    grid-auto-columns: minmax(340px, 424px);
                    
                    scroll-snap-type: x mandatory;
                    -ms-overflow-style: none;  /* IE and Edge */
                    scrollbar-width: none;  /* Firefox */
                }
                .how-it-work-wrapper .scroll::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    )
}