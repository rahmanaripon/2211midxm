import { Link } from "react-router-dom"

const Card = ({ info }) => {
  const {
    title,
    description,
    images,
    id,
    images: { price },
  } = info
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={images[0]} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
             <button className="btn btn-primary">View Details</button>
             <link to={`/Products/${id}`}>
              <button className="btn btn-primary">Add To Cart</button>
             </link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card