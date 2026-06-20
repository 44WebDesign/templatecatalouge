import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import 'react-modal-video/css/modal-video.css'
import 'animate.css/animate.min.css';
import '../src/assets/css/fontawesome.min.css';
import '../src/assets/css/custom.css';
import '../src/assets/css/style.css';
import Routers from './Routers';
import PreLoader from './components/others/PreLoader';
import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { ScrollToTop } from 'react-simple-scroll-up';

let hasLoadedOnce = false;

function App() {
  //  Preloader
  const [isLoading, setIsLoading] = useState(!hasLoadedOnce);

  useEffect(() => {
    if (!hasLoadedOnce) {
      hasLoadedOnce = true;
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1200);
      return () => clearTimeout(timer);
    } else {
      setIsLoading(false);
    }
  }, []);

  return (
    <>
      {isLoading ? <PreLoader /> :
          <div>
            <Helmet>
              <title>Automec - Car Service & Repair React Template</title>
              <link rel="shortcut icon" href="/../images/logo/favicon.png"></link>
            </Helmet>
            <ScrollToTop symbol={<i className="fa-solid fa-arrow-up"></i>} />
            <Routers />
          </div>
      }
    </>
  )
}

export default App
