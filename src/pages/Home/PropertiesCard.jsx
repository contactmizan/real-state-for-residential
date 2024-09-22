import { Link } from "react-router-dom";


const PropertiesCard = ({ properties }) => {
    const { estate_title, image, description, id } = properties;
    return (

        <div className="card bg-base-100 w-96 shadow-xl mb-5">
            <figure>
                <img
                    src={image}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{estate_title}</h2>

                {
                    description.length > 100 ?
                        <p>{description.slice(0, 100)}<Link
                            to={`/properties/${id}`}
                            className="text-blue-600 font-bold">Read More...</Link></p>
                        : <p>{description}</p>
                }

                <div className="card-actions justify-end">
                    <Link to={`/properties/${id}`}>
                        <button className="btn btn-primary">See Details</button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default PropertiesCard;