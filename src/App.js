import React from "react";
import Home from "./views/Home";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Error404 from "./views/Error404";
import ScrollToTop from './_helpers/ScrollToTop'
import 'react-toastify/dist/ReactToastify.css';
import { AnimatedSwitch } from 'react-router-transition';
import "./assets/style.css"

const mapStyles = (styles) => {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
    };
}


class App extends React.Component{

    render() {
        return (
            <div className="App">
                <Router>
                    <ScrollToTop history={Router.history}  />
                    <AnimatedSwitch
                        atEnter={{opacity : 0}}
                        atLeave={{opacity : 0}}
                        atActive={{opacity : 1}}
                        mapStyles={mapStyles}
                    >
                            <Route exact path="/" component={Home}/>
                            {/*<Route path="/blog/:slug" component={BlogDetail} />*/}
                            {/*<Route path="/portfolio/:slug" component={PortfolioDetail} />*/}
                            {/*<Route path="/cv-reader" component={CvReader} />*/}
                            <Route component={Error404} />
                    </AnimatedSwitch>
                </Router>


            </div>
        );
    }

}

export default App;
