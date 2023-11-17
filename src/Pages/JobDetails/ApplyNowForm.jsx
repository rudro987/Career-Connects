/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMutation, useQuery } from "@tanstack/react-query";
import { appliedJob, getAppliedJobs } from "../../api/Api";

const ApplyNowForm = ({ singleJob }) => {
  const { user } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const singleJobData = {
    jobTitle: singleJob.jobTitle,
    jobCategory: singleJob.jobCategory,
    salaryRange: singleJob.salaryRange,
    jobDescription: singleJob.jobDescription,
    jobBanner: singleJob.jobBanner,
  }


  const id = singleJob._id;

  const dateTime = new Date().toLocaleString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const { mutateAsync } = useMutation({
    mutationFn: appliedJob,
  });

  const { data: appliedJobs } = useQuery({
    queryKey: ["appliedJobs"],
    queryFn: async () => await getAppliedJobs(),
  });

  const appliedSingleJob = appliedJobs?.find((job) => job.jobId === id);

  const formSubmit = async (data) => {
    const name = data.name;
    const email = data.email;
    const resume = data.resume;
    const submittedAt = dateTime;
    const jobId = id;

    const applicantInfo = { ...singleJobData, name, email, resume, submittedAt, jobId };
    const errorText = document.getElementById("errorText");
    if (user.email === singleJob.submittedBy) {
      errorText.innerText = "You can't apply on your own Job Post!";
      reset();
    } else if (appliedSingleJob && appliedSingleJob.email === email) {
      errorText.innerText = "You have already applied for this job!";
      reset();
    } else {
      try {
        await mutateAsync(applicantInfo);
        toast.success("Application submitted successfully!");
      } catch (error) {
        console.error(error.message);
        toast.error("Job posting failed");
      }
    }
  };

  return (
    <div
      id="hs-static-backdrop-modal"
      className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[60] overflow-x-hidden overflow-y-auto [--overlay-backdrop:static]"
      data-hs-overlay-keyboard="false"
    >
      <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
        <div className="flex flex-col w-full bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
          <div className="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
            <h3 className="font-bold text-gray-800 dark:text-white">
              Apply for the Job
            </h3>
            <button
              type="button"
              className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-overlay="#hs-static-backdrop-modal"
            >
              <span className="sr-only">Close</span>
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>
          </div>
          <div className="p-4 overflow-y-auto">
            <form onSubmit={handleSubmit(formSubmit)}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Applicant Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      readOnly
                      value={user?.displayName}
                      className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      {...register("name")}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="email"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Applicant's Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      readOnly
                      value={user?.email}
                      className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      {...register("email")}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="resume"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Applicant's Resume
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Your resume URL"
                      className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      {...register("resume", {
                        required: "Please insert your resume URL",
                      })}
                    />
                    {errors.resume && (
                      <p className="text-sm mt-1 text-oliveGreen font-medium">
                        {errors.resume.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-oliveGreen text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Submit Application
                </button>
                <p id="errorText" className="text-red-700 font-bold"></p>
              </div>
            </form>
          </div>
          <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
              data-hs-overlay="#hs-static-backdrop-modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ApplyNowForm;
