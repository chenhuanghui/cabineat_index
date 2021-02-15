import Head from 'next/head'
import FooterNew from '../components/footer-new'
import Nav from '../components/nav-new'
import NavVer02 from '../components/ver02/nav'

export default function Index() {
    return (
        <div className="app">
            <Head>
                <meta charSet="utf-8" />
                <title>CabinEat - Trang chủ</title>
                <meta name="description" content="Giải pháp giúp nhà hàng kinh doanh delivery trực tiếp đến khách hàng quen, không tốn phí hoa hồng" />
                <meta name="keywords" content="cabineat,nha hang so, online restaurant, delivery" />
                <meta property="og:title" content="CabinEat"></meta>
                <meta property="og:type" content="website"></meta>
                <meta property="og:locale" content="vi_VN"></meta>
                <meta property="og:url" content="https://cabineat.vn"></meta>
                {/* <meta property="og:image" content={`${post.cover ? post.cover[0].url : ""}`}></meta> */}
                <meta property="og:description" content="Giải pháp giúp nhà hàng kinh doanh delivery trực tiếp đến khách hàng quen, không tốn phí hoa hồng"></meta>

                <script async src="https://cdn.splitbee.io/sb.js"></script>
            </Head>
            
            <NavVer02 />
            <div className="main-container grid grid-gap-24-16">
                <div className="hero grid justify-content-center padding-y-24 margin-y-24 grid-gap-24-16">
                    <div className="message">
                        <p className="caption-extra font-weight-bold text-center" style={{lineHeight: "45px"}}>Selling online should be easy. </p>
                        <p className="caption-extra font-weight-bold text-center text-primary" style={{lineHeight: "45px"}}>So we've made it easy</p>
                    </div>

                    <div className="hero-description grid justify-self-center">
                        <div className="justify-self-center">
                            <p className="text-center font-weight-lighter">The average time it takes to create your takeaway store is 13 minutes. No signup costs, no monthly fees.</p>
                        </div>                            
                    </div>
                    
                    <div className="action_create justify-self-center">
                        <div className="call-to-action grid grid-gap-8-8">
                            <a href="#" className="btn btn-primary d-block">Tạo tài khoản miễn phí</a>
                            <p className="small text-gray text-center">Không tốn phí hoa hồng.</p>
                        </div>                            
                    </div>    

                    <div className="hero-image container-cabin padding-x-0">
                        <img src="https://ucarecdn.com/34e6691a-acb3-40ed-9d72-b36922835b86/-/format/auto/" width="100%"/>
                    </div>
                    
                </div>

                <div className="setup container-cabin bg-dark grid grid-gap-24-16 padding-y-24 margin-y-24 justify-content-center">
                    <div className="setup_message grid grid-gap-8-8 justify-self-center">
                        <p className="caption text-white font-weight-bold text-center">Up and running in 20 mins</p>
                        <p className="text-white text-center">With the industry's easiest to use dashboard, you'll need just 20 minutes to build a world-class mobile ordering web app.</p>
                    </div>                        
                    <div className="setup-video justify-self-center">
                        <video src="https://ucarecdn.com/5ef680e7-0cff-4a39-9330-cfb3693d657c/createstore.mov" width= "100%" className="rounded" autoPlay loop muted playsInline></video>
                    </div>
                    <div className="setup-choices grid">
                        <div className="bg-gray rounded padding grid grid-gap-8-8">
                            <p className="title font-weight-bold">Create Your Store</p>
                            <p className="font-weight-lighter">It'll take you just 20 minutes to build a world-class mobile ordering web app</p>
                        </div>
                        <div className="rounded padding grid grid-gap-8-8">
                            <p className="title font-weight-bold">Build Your Menu</p>
                            <p className="font-weight-lighter">A super intuitive menu builder to create and edit your digital menu in minutes</p>
                        </div>
                        <div className="rounded padding grid grid-gap-8-8">
                            <p className="title font-weight-bold">Mange Orders</p>
                            <p className="font-weight-lighter">Process orders as fast as they come in with a full-screen live dashboard</p>
                        </div>
                    </div>
                </div>
                
                <div className="overview-manage padding-top-24">
                    <div className="overview-manage-wrapper grid justify-content-center">
                        
                        <div className="container-cabin grid grid-gap-24-16  margin-y-24 justify-content-center">
                            <div className="setup_message grid grid-gap-8-8 justify-self-center">
                                <p className="caption font-weight-bold text-center">Overview – Online Ordering Made Simple</p>
                                <p className="text-center">Software that's intuitive and simple. That’s true both for you, and your customers.</p>
                            </div>                        
                        </div>
                        
                        <div className="overview-content-wrapper container-cabin grid grid-gap-24-16 justify-content-center align-items-center">
                            <div className="overview-item-1 grid grid-gap-24-16">
                                <p className="caption font-weight-bold letter-spacing-n1px">Get up and running in minutes</p>
                                <div className="grid grid-template-columns-48px-1fr grid-gap-12-12">
                                    <div className="icon">
                                        <div className="bg-primary text-white rounded grid grid-template-columns-48px justify-content-center align-items-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" ><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="grid grid-gap-8-8">
                                        <p className="font-weight-bold title">Setup</p>
                                        <p className="font-weight-lighter">Set up your store(s) – add your address, opening times, and what you sell – with easy-peasy menu and catalogue editing.</p>
                                    </div>
                                </div>
                                <div className="grid grid-template-columns-48px-1fr grid-gap-12-12">
                                    <div className="icon">
                                        <div className="bg-primary text-white rounded grid grid-template-columns-48px justify-content-center align-items-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" ><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="grid grid-gap-8-8">
                                        <p className="font-weight-bold title">Promote</p>
                                        <p className="font-weight-lighter">Publicise your StoreKit Takeaway URL or build it as a button into your site. Navigate to your “orders” tab to see the new orders as they come through!</p>
                                    </div>
                                </div>
                                <div className="grid grid-template-columns-48px-1fr grid-gap-12-12">
                                    <div className="icon">
                                        <div className="bg-primary text-white rounded grid grid-template-columns-48px justify-content-center align-items-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" ><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="grid grid-gap-8-8">
                                        <p className="font-weight-bold title">Sell</p>
                                        <p className="font-weight-lighter">Congratulations – you’re an online restaurant or shop. Onboard onto StoreKit payments at a leisurely pace to begin accepting card orders online.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="overview-item-2 justify-self-center">
                                <video width= "100%" autoPlay loop muted playsInline>
                                    <source src="https://ucarecdn.com/3d6f9b1b-868b-4a04-babe-d3fb1b420322/OOSsetupvideo.mp4" type="video/mp4"/>
                                </video>
                            </div>
                        </div>

                        <div className="manage-content-wrapper container-cabin grid grid-gap-24-16 justify-content-center align-items-center padding-bottom-24">
                            <div className="manage-item-1 grid grid-gap-24-16">
                                <p className="caption font-weight-bold letter-spacing-n1px">Manage Everything</p>
                                <div className="grid grid-template-columns-48px-1fr grid-gap-12-12">
                                    <div className="icon">
                                        <div className="bg-primary text-white rounded grid grid-template-columns-48px justify-content-center align-items-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" ><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="grid grid-gap-8-8">
                                        <p className="font-weight-bold title">One-look dashboard</p>
                                        <p className="font-weight-lighter">Know everything about your business in a single glance with your new dashboard.</p>
                                    </div>
                                </div>
                                <div className="grid grid-template-columns-48px-1fr grid-gap-12-12">
                                    <div className="icon">
                                        <div className="bg-primary text-white rounded grid grid-template-columns-48px justify-content-center align-items-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" ><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="grid grid-gap-8-8">
                                        <p className="font-weight-bold title">Orders, managed</p>
                                        <p className="font-weight-lighter">All your orders in one place so you can manage your delivery, collection, asap and pre-orders in one place.</p>
                                    </div>
                                </div>
                                <div className="grid grid-template-columns-48px-1fr grid-gap-12-12">
                                    <div className="icon">
                                        <div className="bg-primary text-white rounded grid grid-template-columns-48px justify-content-center align-items-center">
                                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" ><path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                        </div>
                                    </div>
                                    <div className="grid grid-gap-8-8">
                                        <p className="font-weight-bold title">Email & SMS Notifications</p>
                                        <p className="font-weight-lighter">Never miss a new order with notifications via your dashboard, by sound, and to your email and phone.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="manage-item-2 justify-self-center">
                                {/* <video src="https://ucarecdn.com/5ef680e7-0cff-4a39-9330-cfb3693d657c/createstore.mov" width= "100%" autoPlay loop muted playsInline></video> */}
                                <img src="https://ucarecdn.com/3f46f08b-8e4d-44fe-b8e7-c5f9e8cf01bb/-/format/auto/" width="100%" />
                            </div>
                        </div>
                    </div>
                </div>

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
                </div>

            </div>
            <FooterNew />

            <style jsx>{`
            .app {
                background-image: linear-gradient(
                    -169deg
                    , rgb(248, 246, 243) 14%, rgb(255, 255, 255) 59%);
            }
            .main-container {
                padding-top: 24px;
            }
            
            .hero .hero-description {
                width: 90%;
            }

            .setup {
                padding-top: 48px !important; 
                padding-bottom: 48px !important; 
            }
            
            .overview-manage{
                background: rgb(248, 246, 243);                
            }
            .overview-manage-wrapper {
                grid-gap: 40px 16px;
            }

            .overview-content-wrapper .overview-item-2, .manage-content-wrapper .manage-item-2 {
                margin-left: -24px;
                margin-right: -24px;
            }

            .features {
                padding-top: 100px;
            }

            @media (min-width: 768px) {
                .hero .hero-description {
                    width: 70%;
                }
                
                .overview-manage-wrapper {
                    width: 75%;
                    margin-left: auto;
                    margin-right: auto;
                    padding-bottom: 48px;
                }

                .setup {                    
                    border-radius: 12px !important;
                }
                .setup .setup-choices {
                    grid-template-columns: 1fr 1fr 1fr;
                }

                .overview-content-wrapper .overview-item-2, .manage-content-wrapper .manage-item-2 {
                    margin-left: 0px;
                    margin-right: 0px;
                }

                .features {
                    padding-top: 100px;
                    grid-template-columns: 1fr 1fr;
                }
            }

            @media (min-width: 992px) {
                .hero .hero-description {
                    width: 50%;
                }
                .overview-manage-wrapper {
                    width: 100%;
                    padding-bottom: 48px;
                }
                .overview-content-wrapper {
                    grid-template-columns: 1fr 1fr !important;
                }
                .overview-content-wrapper .overview-item-2, .manage-content-wrapper .manage-item-2  {
                    margin-left: 0px;
                    margin-right: 0px;
                }
                .setup {
                    border-radius: 12px !important;
                }
                .setup .setup-choices {
                    grid-template-columns: 1fr 1fr 1fr;
                }

                .manage-content-wrapper {
                    grid-template-columns: 1fr 1fr !important;
                }

                .manage-content-wrapper .manage-item-1 {
                    grid-column: 2 / 3;
                    grid-row: 1 / 2;                    
                }
                .manage-content-wrapper .manage-item-2 {
                    grid-column: 1 / 2;
                    grid-row: 1 / 2;                    
                }
            }
            `}</style>
        </div>
    )
}