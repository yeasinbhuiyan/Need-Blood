import './Card.css'
// eslint-disable-next-line react/prop-types
const Card = ({ donarDetails }) => {

    const { name, group, given_times, img } = donarDetails

    return (

        <div className="card w-full bg-base-100 shadow-xl group">
            <figure><img className='hover:scale-110 transition' src={img} alt="Donor" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h4>{given_times}</h4>
                <div className="card-actions justify-end">
                    <button className="btn-primary">See Details</button>
                </div>
            </div>
        </div>

    );
};

export default Card;