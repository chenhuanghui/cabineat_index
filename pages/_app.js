import '../public/assets/css/cabin-style.css'
import 'react-multi-carousel/lib/styles.css';
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css"; // only needed for code highlighting

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}