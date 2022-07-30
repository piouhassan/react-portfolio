import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Accueil from "../components/Accueil";
import About from "../components/About";
import Service from "../components/Service";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import axios from "axios";
import Loading from "../components/Loader";


const Home = () => {

    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
       getInfo()
    }, [])

    const getInfo = async ()  => {
         setLoading(true)
        try {
            const res = await axios.get("https://raw.githubusercontent.com/piouhassan/piouhassan/main/data.json", {
                headers: {
                    'Content-type': 'application/json',
                }
            })

            setData(res.data)
            setLoading(false)
        } catch (e) {
            setLoading(false)
            console.log(e)
        }
    }


    return (
      <>
          {
              loading  ? <Loading />

                  :

                  <>

                  <Header />
                  <div className="main">
                      <Accueil home = {data?.about}  sociales={data?.sociales} />
                      <About about = {data?.about}  sociales={data?.sociales}  subAbout={data?.subAbout} experiences ={data?.experiences} educations = {data?.educations}  />
                      <Service services={data?.service} />
                      <Portfolio work={data?.work} />
                      <Contact  sociales={data?.sociales}  />
                  </div>
                  </>
          }
      </>
    )
    
    
}

export default Home