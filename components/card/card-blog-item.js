export default function CardBlogItem({post}) {
    return (
        <div className={`article-item-wrapper grid grid-gap-12-12 justify-content-start align-items-start ${!post.published ? "d-none" : ""}`}>            
            <div className="card-cover cover-fit rounded" style={{backgroundImage:`url("${post.cover ? post.cover[0].url : ""}")`, backgroundColor: "#1F4DF5", height: "200px"}}></div>
            <div className="card-top-header border-bottom">
                <a className="title py-2 text-primary font-weight-bold" href={`/${post.id}`}>{post.title}</a>
                <p className="small mb-2">
                    inspirator: <span className="text-primary mr-2">{post.author}</span>
                    ngày: <span className="text-primary">{post.date}</span>
                </p>
            </div>                        
            <p className="small text-gray">{post.preview}</p>
        
            <style jsx>{`
                .article-item-wrapper {
                    grid-template-rows: min-content;
                }
            `}</style>
        </div>        
    )
}