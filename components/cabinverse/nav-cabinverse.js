import React, { useState, useEffect } from 'react';
const NOTION_BLOG_ID = '90ad638172fd4481806c9106d9ce8287'

export const getAllPosts = async () => {
	return await fetch(
    `https://notion-api.splitbee.io/v1/table/${NOTION_BLOG_ID}`
  ).then((res) => res.json());
}

export default function NavCabinverse () {
    const [posts, setAllPosts] = useState()
    const [collectionList, setCollectionList] = useState()

    useEffect(()=>{    

        async function fetchData() {
            const res = await getAllPosts()
            var temp = []
            console.log(res)
            res.forEach((post, index) => {
                console.log("collection item: ", post.collection)
                temp.push(post.collection)
            });
            console.log("collection list: ", temp)
            setCollectionList(temp)
        }
        fetchData()
        
    },[])
     
    const toggleSubNav = () => {
        if ($("#sub-nav").hasClass("show")) {
            $("#sub-nav").removeClass("show")
        } else {
            $("#sub-nav").addClass("show")
        }        
    }

    return (
        <>            
            <nav className="navbar navbar-expand-lg  navbar-light nav-cabinverse" id="topnav">
                <div className="container">                                      
                    <div className="navbar-collapse collapse mr-auto order-last" id="sub-nav" >
                        <ul className="navbar-nav mr-lg-auto">
                            <li className="nav-item">
                                <a className="nav-link disable" href="#">Mới nhất</a>
                            </li>  
                            {collectionList && collectionList.map((item, index) => (
                                <li className="nav-item" key={index}>
                                    <a className="nav-link disable" href="#">{item}</a>
                                </li>  
                            ))}                                
                        </ul>
                    </div>   
                    <div className="navbar-toggler" onClick={toggleSubNav} style={{width: "100%"}}>
                        <div className="row pl-3 pr-3">
                            <span className="mr-auto mt-2">Chọn chủ đề</span>
                            <span className="fe fe-chevron-down "></span>
                        </div>
                    </div>                               
                </div>                        
            </nav>
            <style jsx>{`
            .nav-cabinverse {
                position: sticky;
                top: 0;
            }
            `}</style>
        </>
    )
}