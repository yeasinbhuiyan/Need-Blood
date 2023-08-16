import { useEffect, useState } from "react";
import Card from "../GlobalElement/Card/Card";
import SectionTitle from "../GlobalElement/SectionTitle/SectionTitle";

const AllDonors = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [donors, setDonors] = useState([])


    useEffect(() => {
        fetch('/Donors.json')
            .then(res => res.json())
            .then(data => setDonors(data))
    }, [])
    return (
        <div>
            <SectionTitle heading={"Our Donors"} />


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mx-auto gap-9 px-10 my-10">
                {
                    donors &&

                        isOpen ?
                        donors.map(donarDetails => <Card key={donarDetails._id} donarDetails={donarDetails}></Card>)
                        :
                        donors.slice(0, 8).map(donarDetails => <Card key={donarDetails._id} donarDetails={donarDetails}></Card>)
                }

            </div>
            
            <div className="w-full text-center my-28">

                {
                    !isOpen && <button onClick={() => setIsOpen(true)} className="btn btn-error">See All</button>
                }

            </div>
        </div>
    );
};

export default AllDonors;