import { useLoaderData, useParams } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

const PropertyCard = () => {
    const { id } = useParams();
    const data = useLoaderData();
    console.log(data);
    const filteredData = data.filter(a => a.id === id);
    const { estate_title, image, description, price, location, status, segment_name, area, facilities } = filteredData[0];
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>

            <div className=" grid grid-cols-1 lg:grid-cols-4 gap-6 my-4">
                {/* <h2 className="text-3xl">Property Detail..</h2> */}
                <div className="col-span-3">
                    <img className="" src={image} alt="" />
                </div>
                <div className="space-y-2">
                    <h2 className="text-2xl font-bold">{estate_title}</h2>
                    <h2 className="text-2xl text-red-600">{segment_name}</h2>
                    <p className="text-xl">{description}</p>
                    <p className="font-bold">{location}</p>
                    <p className="font-bold text-green-700 text-center bg-gray-100">For {status}</p>
                    <h2 className="font-bold">Facilities:</h2>
                    <ul>
                        {
                            facilities.map(facility => (
                                <li key={facility}>{facility}</li>
                            ))
                        }
                    </ul>
                    <p className="font-bold">Area: {area}</p>
                    <p className="text-xl text-red-500">{price}</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default PropertyCard;