"use client";

// export const metadata = {
//   title: "Masuk",
//   description: "Page description",
// };

import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";

type Login = {
  username: string;
  password: string;
};

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Login>();
  const onSubmit: SubmitHandler<Login> = (data) => console.log(data);

  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}

          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Login</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <label
                    className="block text-gray-800 text-sm font-medium mb-1"
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="form-input w-full text-gray-800"
                    placeholder="Masukkan username"
                    {...register("username", { required: true })}
                  />
                  {errors.username && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-4">
                <div className="w-full px-3">
                  <div className="flex justify-between">
                    <label
                      className="block text-gray-800 text-sm font-medium mb-1"
                      htmlFor="password"
                    >
                      Password
                    </label>
                  </div>
                  <input
                    {...register("password", { required: true })}
                    className="form-input w-full text-gray-800"
                    placeholder="Masukkan password"
                  />
                  {errors.password && (
                    <span className="text-red-500">This field is required</span>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap -mx-3 mt-6">
                <div className="w-full px-3">
                  <button
                    type="submit"
                    className="btn text-white bg-blue-600 hover:bg-blue-700 w-full"
                  >
                    Sign in
                  </button>
                </div>
              </div>
            </form>
            <div className="mt-5 hover:text-gray-900 text-gray-500 ">
              <Link href={"/"} className="">
                Kembali ke halaman utama
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
