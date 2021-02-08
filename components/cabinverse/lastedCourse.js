import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function LastestCourse ({notionPageID}) {
    const [posts, setPosts] = useState()
    useEffect(()=>{
        if (!notionPageID) return;
        async function fetchData() {
            const posts = await fetch(
                `https://notion-api.splitbee.io/v1/table/${notionPageID}`
            ).then((res) => res.json());
            setPosts(posts)
        }
        fetchData()
    },[])
    
    return (
        <>            
            <div className="releated mt-5">
                <h5 className="pre-title"> <span className="fe fe-briefcase mr-2"></span> Mới nhất</h5>
                <ul className="list-none-style pt-2">
                    {posts && posts.map((item, index)=>(
                        <li className={`border-bottom py-3 related-item ${!item.published ? "d-none" : ""}`} key={index}>
                            <p className="font-weight-bold title"><a href="#" className="text-dark mb-2">{item.collection}</a></p>
                            <Link href="/[notionID]" as={`/${item.id}`}>
                                <a className="py-2 ">
                                    {item.title}
                                </a>
                            </Link>                                                    
                        </li>
                    ))}
                </ul>
            </div>
            <style jsx>{`
            .releated {
                padding-left: 0px;
            }
            
            @media (min-width:768px){
                .releated {
                    padding-left: 12px !important;
                }   
            }
            `}</style>
        </>
    )
}