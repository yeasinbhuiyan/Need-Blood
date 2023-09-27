import './BloodGroup.css'

const BloodGroup = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 m-5 items-center md:my-8 my-6 gap-8'>
            <div className=''>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium error eveniet itaque natus ratione perferendis ad eius dicta, accusantium, eos recusandae velit eum incidunt quam, placeat neque! Praesentium aspernatur doloribus corrupti labore modi aut quibusdam unde. Non voluptas error dolores tempore? Inventore, at nemo porro nobis voluptatibus eaque repudiandae maxime error enim adipisci distinctio delectus nesciunt iusto modi quaerat quod aspernatur, vero ipsum libero vel numquam ullam nulla? Enim molestias, impedit quibusdam repellat dolorum animi, harum reprehenderit perferendis ut necessitatibus soluta? Ab, quia voluptate? Blanditiis accusantium possimus maxime necessitatibus id nulla itaque quod vitae non quis voluptas, tenetur nesciunt fugiat!</p>
            </div>
            <div className='group_table'>
                <h1 className='text-red font-bold p-3 text-center text-2xl mb-5 rounded-xl donors_recuirment'>Blood Type Donors</h1>
                <table >
                    <thead >
                        <tr className='table_head'>
                            <th>SL.</th>
                            <th>Blood Type</th>
                            <th>Donate Blood To</th>
                            <th>Receive Blood From</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr>
                            <td>1.</td>
                            <td><span>A+</span></td>

                            <td>
                                <span>A+</span>
                                <span>AB+</span>
                            </td>

                            <td><span>A+</span>
                                <span>A-</span>
                                <span>O+</span>
                                <span>O-</span>
                            </td>
                        </tr>



                        <tr>
                        <td>2.</td>
                            <td><span>O+</span></td>
                            <td><span>O+</span> <span>A+</span> B+ <span>AB+</span></td>
                            <td><span>O+</span> <span>O-</span></td>
                        </tr>



                        <tr>
                        <td>3.</td>
                            <td><span>B+</span></td>

                            <td>
                                <span>B+</span>
                                <span>AB+</span>
                            </td>

                            <td><span>B+</span>
                                <span> B-</span>
                                <span>O+</span>
                                <span>O-</span>
                            </td>
                        </tr>



                        <tr>
                        <td>4.</td>
                            <td><span>AB+</span> </td>
                            <td><span>AB+</span> </td>
                            <td><span>Everyone</span></td>
                        </tr>



                        <tr>
                        <td>5.</td>
                            <td> <span>A-</span></td>
                            <td><span>A+</span> <span>A-</span> <span>AB+</span> <span>AB-</span> </td>
                            <td><span>A-</span> <span>O-</span></td>
                        </tr>


                        <tr>
                        <td>6.</td>
                            <td><span>O-</span></td>
                            <td><span>Everyone</span></td>
                            <td><span>O-</span></td>

                        </tr>



                        <tr>
                        <td>7.</td>
                            <td>
                                <span>B-</span>
                            </td>

                            <td>
                                <span>B+ </span>
                                <span>B-</span>
                                <span>AB+</span>
                                <span>AB-</span>
                            </td>

                            <td>
                                <span>B-</span>
                                <span>O-</span>
                            </td>
                        </tr>




                        <tr>
                        <td>8.</td>
                            <td><span>AB+</span></td>

                            <td>
                                <span>AB+</span>
                                <span>AB-</span>
                            </td>

                            <td>
                                <span>AB-</span>
                                <span>A-</span>
                                <span>B- </span>
                                <span>O-</span>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BloodGroup;