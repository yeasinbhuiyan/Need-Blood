import './CreateProfile.css'


const CreateProfile = () => {
    return (
        <div className="create_profile">
            <form >
                <div className="create_profile_common">
                    <label>Profile Picture : </label>
                    <input type="file" name="profile" required />
                </div>

                <div className="create_profile_common">
                    <label>Name : </label>
                    <input type="text" name="name" placeholder="Name" required />
                </div>

                <div className="create_profile_common">
                    <label>Location : </label>
                    <input type="text" name="location" />
                </div>
                <div className="create_profile_common">
                    <label>Blood Group : </label>
                    <input type="text" name="blood_group" />
                </div>
            </form>
        </div>
    );
};

export default CreateProfile;