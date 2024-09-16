import { useEffect, useState } from "react";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import { Link } from "react-router-dom";

const Home = () => {

    const [properties, setProperties] = useState([]);

    useEffect(() => {
        fetch('properties.json')
            .then(res => res.json())
            .then(data => setProperties(data))
    }, [])

    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <h2 className="text-3xl font-questrial">This is Home data: {properties.length}</h2>

            <div>
                {
                    properties.map(property => <Link
                        className="block"
                        key={property.id}
                        to={`/property/${property.id}`}
                    >{property.estate_title}</Link>)
                }
            </div>

        </div>
    );
};

export default Home;