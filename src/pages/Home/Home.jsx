import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import { Link, useLoaderData } from "react-router-dom";
import PropertiesCard from "./PropertiesCard";
import Footer from "../Shared/Footer/Footer";


const Home = () => {

    const properties = useLoaderData();
    console.log(properties);

    const [dataLength, setDataLength] = useState(6);

    // useEffect(() => {
    //     fetch('properties.json')
    //         .then(res => res.json())
    //         .then(data => setProperties(data))
    // }, [])

    return (
        <div>
            <Navbar></Navbar>
            <Header></Header>
            <h2 className="text-3xl font-questrial">This is Home data: {properties.length}</h2>

            {/* property container */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    properties.slice(0, dataLength).map(property => <PropertiesCard key={property.id} properties={property}>
                    </PropertiesCard>)
                }
            </div>
            
            <div className={`w-full flex justify-center ${dataLength === properties.length ? 'hidden' : ''}`}>
                <button
                    onClick={() => setDataLength(properties.length)}
                    className="btn btn-primary my-4">Show all..
                </button>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Home;