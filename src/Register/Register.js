import React from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import auth from "../firebase.int";
import Loading from "../pages/Shared/Loading";

function Register() {
  const [signInWithGoogle, gUser, gLoading, gError] =
    useCreateUserWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data, event) => {
    console.log(data);
    createUserWithEmailAndPassword(data.email, data.password, data.name);
    event.preventDefault();
  };

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

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
          <h2 className="text-center text-2xl font-bold">Register</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className="input input-bordered w-full max-w-xs mb-3"
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
              aria-invalid={errors.name ? "true" : "false"}
            />
            {errors.name?.type === "required" && (
              <p role="alert">Name is required</p>
            )}

            <input
              className="input input-bordered w-full max-w-xs mb-3"
              placeholder="Email"
              type="email"
              {...register("email", { required: true })}
              aria-invalid={errors.email ? "true" : "false"}
            />
            {errors.email?.type === "required" && (
              <p role="alert">Email is required</p>
            )}

            <input
              className="input input-bordered w-full max-w-xs"
              placeholder="Password"
              type="password"
              {...register("password", { required: "Password is required" })}
              aria-invalid={errors.password ? "true" : "false"}
            />
            {errors.password && <p role="alert">{errors.password?.message}</p>}

            <input
              type="submit"
              value="Register"
              className="mt-4 btn w-full text-white"
            />
          </form>

          <p>
            Already Register?{" "}
            <Link to={"/login"}>
              <span className="text-blue-700">Login Now</span>
            </Link>
          </p>

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
}

export default Register;
