import Head from 'next/head'
import Nav from "../components/ver02/nav"

const LayoutMaster = props => (
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

export default LayoutMaster;