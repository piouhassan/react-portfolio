import React, {useEffect} from "react";
import Header from "../components/Header";
import About from "../components/About";
import Portfolio from "../components/Portfolio";
import Service from "../components/Service";
import Contact from "../components/Contact";
import {getInfo}  from '../store/actions/infoActions'
import {useDispatch,useSelector} from "react-redux";
import Loading from "../components/Loader";
import Accueil from "../components/Accueil";


const Home = () => {
    const dispatch = useDispatch()
    const InfoData = useSelector(state => state.info)
    const {loading, error, info} = InfoData
    useEffect(() => {
        dispatch(getInfo())
    }, [dispatch])


    if (loading){
        return(<div>
            <Loading/>
        </div>)
    }
     if (error){
         return(<div>{error.message}</div>)
     }


     if (info.status === "success"){

         return (
             <>
                 <Header />
                 <div className="main">
                 <Accueil home = {info.information.about}  sociales={info.information.sociales} />
                 <About about = {info.information.about}  sociales={info.information.sociales}  subAbout={info.information.subAbout} experiences ={info.information.experiences} educations = {info.information.educations}  />
                  <Service services={info.information.service} />
                  <Portfolio work={info.information.work} />
                 <Contact  sociales={info.information.sociales}  />
                 </div>
             </>
         )
     }
}

export default Home