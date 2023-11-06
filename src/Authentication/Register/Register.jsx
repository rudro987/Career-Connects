import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { storage } from "../../Config/firebase.config";

const Register = () => {
  const { registerUser, loading } = useContext(AuthContext);
  const [image, setImage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const formSubmit = async (data) => {
    const dateTime = Date.now();

    const name = data.name;
    const email = data.email;
    const password = data.password;

    const imageRef =
      image &&
      ref(storage, `images/${data.name}_${dateTime}/${image.name}_${dateTime}`);

    await uploadBytes(imageRef, image)
      .then(async () => {
        const uploadedImage = await getDownloadURL(imageRef);
        setImageUrl(uploadedImage);
        console.log(imageUrl);

        registerUser(email, password)
          .then((res) => {
            updateProfile(res.user, {
              displayName: name,
              photoURL: uploadedImage,
            })
              .then(() => {
                toast.success(
                  `${name}, you have been registered successfully!`
                );
                reset();
                setTimeout(() => {
                  navigate(location?.state ? location.state : "/");
                }, 1000)
              })
              .catch((err) => toast.error(err.message));
          })
          .catch((err) => toast.error(err.message));
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <div className="py-16">
        <div className="mt-7 max-w-md mx-auto bg-[#f1f7f4] border border-lightGray rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
                Sign Up
              </h1>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Already have an account?&nbsp;&nbsp;
                <Link
                  className="text-oliveGreen decoration-2 hover:underline font-bold"
                  to="/login"
                >
                  Sign in here
                </Link>
              </p>
            </div>

            <div className="mt-5">
              <form onSubmit={handleSubmit(formSubmit)}>
                <div className="grid gap-y-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Your Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Enter your name"
                        className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        {...register("name", {
                          required: "Please enter your name",
                        })}
                      />
                      {errors?.name && (
                        <p className="text-sm mt-1 text-oliveGreen font-medium">
                          {errors.name.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Email address
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        {...register("email", {
                          required: "Please enter your email address",
                        })}
                      />
                    </div>
                    {errors?.email && (
                      <p className="text-sm mt-1 text-oliveGreen font-medium">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="flex justify-between items-center">
                      <label
                        htmlFor="password"
                        className="block text-sm mb-2 dark:text-white"
                      >
                        Password
                      </label>
                    </div>
                    <div className="relative">
                      <input
                        type="password"
                        placeholder="Enter password"
                        className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        {...register("password", {
                          required: "Please enter a password",
                          minLength: {
                            value: 6,
                            message:
                              "Password should be at least 6 characters long",
                          },
                          pattern: {
                            value: /^(?=.*[A-Z])(?=.*[!@#$%^&*])/,
                            message:
                              "Password must contain at least one uppercase letter and one special symbol",
                          },
                        })}
                      />
                      {errors?.password && (
                        <p className="text-sm mt-1 text-oliveGreen font-medium">
                          {errors.password.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm mb-2 dark:text-white">
                      Upload your image
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        {...register("image", {
                          onChange: (e) => setImage(e.target.files[0]),
                          required: "Please upload your image",
                        })}
                      />
                      {errors?.image && (
                        <p className="text-sm mt-1 text-oliveGreen font-medium">
                          {errors.image.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-skyBlue text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                  >
                    Sign up
                  </button>
                </div>
              </form>
              {loading && (
                <div className="text-center">Uploading... Please wait.</div>
              )}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Register;
