import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import './Register.css'
const Register = () => {
    const { register, watch, reset, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        const name = data.name
        const email = data.email
        const profile = data.image[0]
        const password = data.confirmPassword
        console.log(name, email, password, profile)
    }


    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="signUp-banner md:hero py-24  bg-base-200">
                <div className="flex-col p-10 ">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold">Please Register</h1>
                    </div>

                    <div className="flex-shrink-0 rounded  w-full max-w-sm shadow-2xl bg-base-100 mt-5">
                        <div className="card-body">

                            <div className="form-control">
                                <div>
                                    <label htmlFor='image' className='block mb-2 text-sm'>
                                        Select Image
                                    </label>
                                    <input
                                        {...register("image", { required: true })}
                                        type='file'
                                        id='image'
                                        name='image'
                                        accept='image/*'
                                        required
                                        className='rounded'
                                    />
                                </div>


                                {errors.image && <span className='text-sm mt-3 text-red-600'>Please Select Your Valid Photo.</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input  {...register("name", { required: true })} name='name' type="text" placeholder="Name" className="input rounded input-bordered" required />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input {...register("email", { required: true, pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i })} name='email' type="email" placeholder="email" className="input rounded input-bordered" required />
                                {errors.email && <span className='text-sm mt-3 text-red-600'>Please enter a valid email address</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>

                                {/* pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/  */}
                                <input {...register("password", { required: true, minLength: 6, maxLength: 16 })} name='password' type="password" placeholder="password" className="input rounded input-bordered" required />
                                {errors.password && <span className='text-sm mt-3 text-red-600'> Password must be between 6 and 14 characters long.</span>}
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>

                                <input  {...register('confirmPassword', {
                                    validate: (value) => value === watch('password') || 'Passwords do not match'
                                })} name='confirmPassword' type="password" placeholder="Confirm Password" className="input rounded  input-bordered" required />
                                {errors.confirmPassword && <p className='text-red-400 text-sm'>{errors.confirmPassword.message}</p>}
                            </div>

                            <div className="form-control mt-6">

                                <button className="register-btn">
                                    Register

                                </button>
                            </div>

                            <p><small>Already have an account? <Link className='font-semibold' to='/login'>Login</Link></small></p>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Register;