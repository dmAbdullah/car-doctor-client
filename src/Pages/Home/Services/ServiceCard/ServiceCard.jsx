import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
const {_id, title, img, price}= service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body">
    <div className="flex items-center justify-between">
    <div>
    <h2 className="card-title text-2xl font-bold">{title}</h2>
    <h3 className="text-xl font-bold text-orange-500">Price: ${price}</h3>
    </div>
      <Link to={`/book/${_id}`}><button className=" text-orange-500"><FaArrowRight/></button></Link>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;