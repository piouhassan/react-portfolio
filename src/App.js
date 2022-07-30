import React from "react";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Error404 from "./pages/Error404";
import 'react-toastify/dist/ReactToastify.css';
import { AnimatedSwitch } from 'react-router-transition';
import "./assets/style.css"
import {ToastContainer} from "react-toastify";

const mapStyles = (styles) => {
    return {
        opacity: styles.opacity,
        transform: `scale(${styles.scale})`,
    };
}


const App = () => {

        return (
       <>
           <Router>
               <AnimatedSwitch atEnter={{opacity : 0}} atLeave={{opacity : 0}} atActive={{opacity : 1}} mapStyles={mapStyles}>
                   <Route exact path="/" component={Home}/>
                   <Route component={Error404} />
               </AnimatedSwitch>
           </Router>

           <ToastContainer position="top-right" autoClose={5000} hideProgressBar newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
       </>
        );

}

export default App;
