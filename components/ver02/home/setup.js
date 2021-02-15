export default function Setup() {
    return (
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
            <style jsx>{`
            .setup {
                padding-top: 48px !important; 
                padding-bottom: 48px !important; 
            }
            
            @media (min-width: 768px) {                      
                .setup {                    
                    border-radius: 12px !important;
                }
                .setup .setup-choices {
                    grid-template-columns: 1fr 1fr 1fr;
                }
            }
            
            @media (min-width: 992px) {      
                .setup {                    
                    border-radius: 12px !important;
                }
                .setup .setup-choices {
                    grid-template-columns: 1fr 1fr 1fr;
                }
            }
            `}</style>
        </div>
    )
}