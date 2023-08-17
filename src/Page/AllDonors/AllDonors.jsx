import { useEffect, useState } from "react";
import SectionTitle from "../../Components/GlobalElement/SectionTitle/SectionTitle";
import Card from "../../Components/GlobalElement/Card/Card";
import { AiOutlinePlus } from 'react-icons/ai';


const AllDonors = () => {
    const [donors, setDonors] = useState([])


    useEffect(() => {
        fetch('/Donors.json')
            .then(res => res.json())
            .then(data => setDonors(data))
    }, [])
    return (
        <div>
            <h1 className="text-white">A </h1>


            <SectionTitle heading={"  Our All Donors "} />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4  mx-auto gap-10 px-10 my-10">
             
                <div className="card w-full text-center flex items-center justify-center bg-base-100 shadow-xl group">
                    <AiOutlinePlus  className="w-[60%] h-[60%] text-red"/>
                </div>
                {
                    donors &&

                    donors.map(donarDetails => <Card key={donarDetails._id} donarDetails={donarDetails}></Card>)
                }

            </div>

        </div>
    );
};

export default AllDonors;