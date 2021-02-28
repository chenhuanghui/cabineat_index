
export default function CardItemHowItWorkDeliveryOnDemand() {
    return (
        <div className="grid grid-gap-12-12 card-item-wrapper">
            <div className="cover-fit rounded" style={{backgroundImage:`url("https://images.ctfassets.net/2d5q1td6cyxq/748QnozJsid00mz8wof8aU/20833926d4e4131e310d005ee7a9a0fa/0-intro.jpg?w=808&h=808&fm=webp&q=85&fit=scale")`}}></div>
            <p className="caption font-weight-bold">How on-demand <br/> delivery work</p>
            <p className="">Square Online automatically dispatches professional couriers to fulfill online delivery orders.</p>
            <style jsx>{`
                .card-item-wrapper {
                    grid-template-rows: 280px auto auto;
                }
                .card-item-wrapper:hover {
                    cursor: pointer;
                }
                @media (min-width:768px){
                    grid-template-rows: 350px auto auto;
                }
                @media (min-width:992px){
                    grid-template-rows: 404px auto auto;
                }
            `}</style>
        </div>
    )
}