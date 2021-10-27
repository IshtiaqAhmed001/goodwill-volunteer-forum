import React from 'react';
import { useForm } from 'react-hook-form';

const Register = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    console.log(watch("example")); // watch input value by passing the name of it
    return (
        <div>
            <h2 className="my-5">Please Register</h2>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* register your input into the hook by invoking the "register" function */}
                    <input className="mb-4" placeholder="name" {...register("name")} />

                    {/* include validation with required or other standard HTML validation rules */}
                    <br />
                    <input className="mb-4" placeholder="email" {...register("email", { required: true })} />
                    {/* errors will return when field validation fails  */}
                    {errors.exampleRequired && <span>This field is required</span>}
                    <br />
                    <input className="mb-4" type="submit" />
                </form>
            </div>
            <h3 className="my-5">Already Registered ?</h3>
            <button className="btn btn-primary mx-2">Login</button>
            <button className="btn btn-success mx-2">Google Login</button>
        </div>
    );
};

export default Register;