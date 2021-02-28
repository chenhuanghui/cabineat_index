import Head from "next/head";
import BenefitDeliveryOnDemand from "../components/delivery/benefit";
import HowItWorkDeliveryOnDemand from "../components/delivery/howitwork/index";

import IntroDeliveryOnDemand from "../components/delivery/intro"
import FooterNew from "../components/footer-new";
import NavVer02 from "../components/ver02/nav";

export default function DeliveryOnDemand() {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <title>Delivery On Demand - CabinEat</title>
                <meta name="description" content="" />                
                <meta name="keywords" content="cabineat,nha hang so, online restaurant, delivery" />
                
                <meta property="og:title" content="CabinEat"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:locale" content="vi_VN"></meta>
                <meta property="og:url" content="https://cabineat.vn/delivery"></meta>
                <meta property="og:description" content=""></meta>
                {/* <meta property="og:image" content={`${post.cover ? post.cover[0].url : ""}`}></meta> */}
                
                <script async src="https://cdn.splitbee.io/sb.js"></script>
            </Head>
            <div className="wrapper grid grid-gap-24-16">
                <NavVer02/>
                <IntroDeliveryOnDemand />                
                <HowItWorkDeliveryOnDemand/>
                <BenefitDeliveryOnDemand/>                
                <FooterNew />
            </div>
        </>
    )
}