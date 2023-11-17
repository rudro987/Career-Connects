/* eslint-disable react/prop-types */
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Provider/AuthProvider";
import Loader from "../../components/Loader";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateJobs = ({ job }) => {
  const { register, handleSubmit } = useForm();
  const { loading } = useContext(AuthContext);
  const {
    _id,
    jobTitle,
    postedBy,
    jobCategory,
    salaryRange,
    postDate,
    applicationDeadline,
    applicantsNumber,
    companyLogo,
    jobBanner,
    jobDescription,
  } = job;

  const queryClient = useQueryClient();

  const fetchData = (jobData) => {
    fetch(`${import.meta.env.VITE_API_URL}/my-jobs/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobData),
    })
    .then((res) => res.json())
      .then((data) => {
        if(data.modifiedCount > 0){
          console.log(`Product updated successfully!`);
        }
      })
      .catch((err) => toast.error('Update failed because of: ', err.message))
  };

  const { mutateAsync } = useMutation({
    mutationFn: fetchData,
    onSuccess: () => {
      queryClient.invalidateQueries("allJobs");
    },
  });

  const handleUpdate = async (data) => {
    try {
      await mutateAsync(data);
      toast.success("Job Updated Successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000)
    } catch (error) {
      console.log("Error updating data: ", error.message);
    }
  };

  if (loading) return <Loader></Loader>;

  return (
    <form onSubmit={handleSubmit(handleUpdate)} className="p-5">
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
              defaultValue={jobTitle}
              className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              {...register("jobTitle")}
            />
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
              defaultValue={postedBy}
              className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              {...register("postedBy")}
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
              defaultValue={jobCategory}
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
              defaultValue={salaryRange}
              className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              {...register("salaryRange")}
            />
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
              defaultValue={jobDescription}
              className="h-36 resize-none py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              {...register("jobDescription")}
            />
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
              defaultValue={postDate}
              className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              {...register("postDate")}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2 dark:text-white">
            Company Logo
          </label>
          <div className="relative">
            <input
              type="text"
              defaultValue={companyLogo}
              className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              {...register("companyLogo")}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm mb-2 dark:text-white">
            Job Banner
          </label>
          <div className="relative">
            <input
              type="text"
              defaultValue={jobBanner}
              className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              {...register("companyLogo")}
            />
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
            <input
              type="text"
              defaultValue={applicationDeadline}
              className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              {...register("applicationDeadline")}
            />
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
              defaultValue={applicantsNumber}
              className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
              {...register("applicantsNumber")}
              readOnly
            />
          </div>
        </div>
      </div>

      <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
        <button
          type="submit"
          className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Update Job
        </button>
        <button type="button" className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" data-hs-overlay="#hs-slide-down-animation-modal">
          Close
        </button>
      </div>
      <ToastContainer />
    </form>
  );
};

export default UpdateJobs;
