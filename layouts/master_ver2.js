import Head from 'next/head'
import Nav from "../components/nav/nav-ver2"

const LayoutMasterVer02 = props => (
    <>
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="wrapper">
            <Nav />
            <div className="main-content">
                {props.children}        
            </div>
        </div>
    </>
);

export default LayoutMasterVer02;