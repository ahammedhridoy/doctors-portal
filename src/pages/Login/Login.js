import React from "react";
import { useForm } from "react-hook-form";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.int";
import Loading from "../Shared/Loading";
import { Link } from "react-router-dom";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  if (gError || error) {
    return (
      <div>
        <p>Error: Something Is Wrong!</p>
      </div>
    );
  }
  if (gLoading || loading) {
    return <Loading></Loading>;
  }

  if (gUser || user) {
    return (
      <div>
        <p>Signed In User: {gUser.email}</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="text-center text-2xl font-bold">Login</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input input-bordered w-full max-w-xs mb-3"
              placeholder="First Name"
              {...register("firstName", { required: true })}
              aria-invalid={errors.firstName ? "true" : "false"}
            />
            {errors.firstName?.type === "required" && (
              <p role="alert">First name is required</p>
            )}

            <input
              className="input input-bordered w-full max-w-xs"
              placeholder="Email Address"
              {...register("mail", { required: "Email Address is required" })}
              aria-invalid={errors.mail ? "true" : "false"}
            />
            {errors.mail && <p role="alert">{errors.mail?.message}</p>}

            <input
              type="submit"
              value="Login"
              className="mt-4 btn w-full text-white"
            />
          </form>

          <p>New to Doctors Portal? <Link to={"/register"}> <span className="text-blue-700">Register Now</span></Link></p>

          <div className="divider">OR</div>

          <button
            onClick={() => signInWithGoogle()}
            className="btn btn-outline btn-primar hover:text-white"
          >
            Continue With Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
