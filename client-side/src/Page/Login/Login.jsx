import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form"
import './Login.css'

const Login = () => {
    const { register, reset, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        const email = data.email
        const password = data.password

        console.log( email, password)
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className="login-banner md:hero py-24   bg-base-200">
                <div className="flex-col p-10 ">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold">Please Login</h1>
                    </div>

                    <div className="flex-shrink-0 rounded md:w-[1050px] w-full max-w-sm shadow-2xl bg-base-100 mt-5">
                        <div className="card-body">

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

                                <input  {...register('password')} name='password' type="password" placeholder="Password" className="input rounded  input-bordered" required />
                                {errors.password && <span className='text-sm mt-3 text-red-600'>Password must be at least 6 characters long and include at least one capital letter and one special characte</span>}                            </div>

                            <div className="form-control mt-6">
                                <button className="login_btn">
                                    Login
                                </button>
                            </div>

                            <p><small>Dont you have Account? <Link className='font-semibold' to='/register'>Register</Link></small></p>

                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;