export default function Annoucement({url, title}) {
    return (
        <div className="announcement-wrapper">
            <div className="container-cabin annoucement-body">
                
                <a className="text-white d-block annoucement-title font-weight-lighter text-center" href={url} target="_blank">
                    {title}
                </a>
            </div>
            <style jsx>{`
            .announcement-wrapper {
                padding: 12px;
                background-color: #0b1535 !important;
            }
            .annoucement-title {
                font-size: 12px;
                letter-spacing: 1px;
                text-decoration: underline;
            }
            

            `}</style>
        </div>        
    )
}