import { Controller, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { storage } from "../../Config/firebase.config";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { useMutation } from "@tanstack/react-query";
import { postJob } from "../../api/Api";
import Loader from "../../components/Loader";

const AddJob = () => {
  const { user, loading } = useContext(AuthContext);

  const [companyLogo, setCompanyLogo] = useState(null);
  const [banner, setBanner] = useState(null);

  const dateTime = new Date().toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const applicantsNumber = 0;

  const {
    register,
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  const { mutateAsync } = useMutation({
    mutationFn: postJob,
  });

  const formSubmit = async (data) => {
    console.log(data)
    const applicantsNumber = parseInt(data.applicantsNumber)
    console.log(applicantsNumber)
    const formData = new FormData();
    formData.append('jobTitle', data.jobTitle);
    formData.append('postedBy', data.postedBy);
    formData.append('jobCategory', data.jobCategory);
    formData.append('salaryRange', data.salaryRange);
    formData.append('jobDescription', data.jobDescription);
    formData.append('postDate', data.postDate);
    formData.append('applicationDeadline', data.applicationDeadline);
    formData.append('applicantsNumber', applicantsNumber);

    const logoRef =
      companyLogo &&
      ref(
        storage,
        `jobs/${data.name}_${dateTime}/${companyLogo.name}_${dateTime}`
      );
    const bannerRef =
      banner &&
      ref(
        storage,
        `banners/${data.name}_${dateTime}/${banner.name}_${dateTime}`
      );

    if (logoRef) {
      await uploadBytes(logoRef, companyLogo);
      const uploadedLogo = await getDownloadURL(logoRef);
      formData.append('companyLogo', uploadedLogo);
      if (bannerRef) {
        await uploadBytes(bannerRef, banner);
        const uploadedBanner = await getDownloadURL(bannerRef);
        formData.append('jobBanner', uploadedBanner);
      }
    }

    try {
        await mutateAsync(formData);
        toast.success(
          `${data.postedBy}, your Job has been posted successfully!`
        );
        setCompanyLogo(null);
        setBanner(null);
        reset();
      } catch (error) {
        console.error(error.message);
        toast.error("Job posting failed");
        setCompanyLogo(null);
        setBanner(null);
        reset();
      }

  };
  loading && <Loader></Loader>

  return (
    <div className="py-16">
      <div className="mt-7 max-w-md mx-auto bg-[#f1f7f4] border border-lightGray rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Post a Job
            </h1>
          </div>

          <div className="mt-5">
            <form onSubmit={handleSubmit(formSubmit)}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="jobTitle"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Job Title
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter Job Title"
                      className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      {...register("jobTitle", {
                        required: "Please enter a Job Title here",
                      })}
                    />
                    {errors.jobTitle && (
                      <p className="text-sm mt-1 text-oliveGreen font-medium">
                        {errors.jobTitle.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="postedBy"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Posting as:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={user?.displayName}
                      className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      {...register("postedBy", {
                        required: true,
                      })}
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="jobCategory"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Job Category
                  </label>
                  <div className="relative">
                    <select
                      {...register("jobCategory")}
                      className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                    >
                      <option value="On site">On Site</option>
                      <option value="Remote">Remote</option>
                      <option value="Part-Time">Part-Time</option>
                      <option value="Hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="salaryRange"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Salary Range
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Example: 5000-7000"
                      className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      {...register("salaryRange", {
                        required: "Please enter salary range",
                      })}
                    />
                    {errors.salaryRange && (
                      <p className="text-sm mt-1 text-oliveGreen font-medium">
                        {errors.salaryRange.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="jobDescription"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Job Description
                  </label>
                  <div className="relative">
                    <textarea
                      type="text"
                      placeholder="Job Details"
                      className="h-36 resize-none py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      {...register("jobDescription", {
                        required: "Please briefly describe the Job Details",
                      })}
                    />
                    {errors.jobDescription && (
                      <p className="text-sm mt-1 text-oliveGreen font-medium">
                        {errors.jobDescription.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="postDate"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Posting Date
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={dateTime}
                      className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      {...register("postDate")}
                      readOnly
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 dark:text-white">
                    Company Logo
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      {...register("companyLogo", {
                        onChange: (e) => setCompanyLogo(e.target.files[0]),
                        required: "Please upload company logo",
                      })}
                    />
                    {errors?.companyLogo && (
                      <p className="text-sm mt-1 text-oliveGreen font-medium">
                        {errors.companyLogo.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 dark:text-white">
                    Job Banner
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      {...register("jobBanner", {
                        onChange: (e) => setBanner(e.target.files[0]),
                        required: "Please upload Job Banner",
                      })}
                    />
                    {errors?.jobBanner && (
                      <p className="text-sm mt-1 text-oliveGreen font-medium">
                        {errors.jobBanner.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="applicationDeadline"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Application Deadline
                  </label>
                  <div className="relative">
                    <Controller
                      name="applicationDeadline"
                      control={control}
                      defaultValue={null}
                      render={({ field }) => (
                        <DatePicker
                          {...field}
                          selected={field.value}
                          onChange={(date) => {
                            field.onChange(date);
                            setValue("applicationDeadline", date);
                          }}
                          className="py-3 px-4 cursor-pointer block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                        />
                      )}
                    />
                    {errors.applicationDeadline && (
                      <p className="text-sm mt-1 text-oliveGreen font-medium">
                        {errors.applicationDeadline.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="applicantsNumber"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Applicants number:
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={applicantsNumber}
                      className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      {...register("applicantsNumber", {
                        required: true,
                      })}
                      readOnly
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-skyBlue text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AddJob;
