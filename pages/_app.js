import '../public/assets/css/cabin-style.css'
import 'react-multi-carousel/lib/styles.css';
import "react-notion/src/styles.css";

// core styles shared by all of react-notion-x (required)
import 'react-notion-x/src/styles.css'

// used for code syntax highlighting (optional)
import 'prismjs/themes/prism-tomorrow.css'

// used for collection views (optional)
import 'rc-dropdown/assets/index.css'

// used for rendering equations (optional)
import 'katex/dist/katex.min.css'

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />
}