import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { getSingleJob } from "../../api/Api";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";
import ApplyNowForm from "./ApplyNowForm";

const SingleJobDetails = () => {
  const { _id } = useParams();
  const { user } = useContext(AuthContext);

  console.log(user);
  
  const { data: singleJob, isLoading } = useQuery({
    queryKey: ["singleJob", _id],
    queryFn: async () => await getSingleJob(_id, user.email),
  });

  if (isLoading) return <Loader></Loader>;

  return (
    <div className="max-w-[85rem] mx-auto">
    <div className="py-28 gap-10 sm:flex dark:bg-slate-900">
      {singleJob && (
        <>
          <div className="flex-shrink-0 relative w-[600px] rounded-xl overflow-hidden pt-[40%] sm:rounded-xl">
            <img
              className="w-full h-full absolute top-0 start-0 object-cover"
              src={singleJob.jobBanner}
              alt="Image Description"
            />
          </div>
          <div className="flex flex-wrap gap-10">
            <div className="p-4 flex flex-col gap-3 h-full sm:p-0">
              <h3 className="text-3xl mb-5 font-bold text-gray-800 dark:text-white">
                Job Title: {singleJob.jobTitle}
              </h3>
              <div className="relative w-60 mb-5 h-32 pb-10 rounded-xl overflow-hidden sm:rounded-xl">
                <img
                  className="w-60 h-32 absolute top-0 start-0 object-fit"
                  src={singleJob.companyLogo}
                  alt="Image Description"
                />
              </div>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                Salary Range: {singleJob.salaryRange}
              </p>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                Number of Applicants: {singleJob.applicantsNumber}
              </p>
              <p className="mt-1 text-gray-500 dark:text-gray-400">
                Job Description: {singleJob.jobDescription}
              </p>
              <div className="pt-5">
                <div>
                {new Date() > new Date(singleJob.applicationDeadline) ? (
                    <button className="py-4 px-8 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-gray-400 text-white  disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">Deadline is over</button>
                ) : (
                    <button
                    type="button"
                    id="applyBtn"
                    className="py-4 px-8 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-oliveGreen text-white  disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    data-hs-overlay="#hs-static-backdrop-modal"
                  >
                    Apply Now
                  </button>
                )}
                  
                  <ApplyNowForm singleJob={singleJob}></ApplyNowForm>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
    </div>
  );
};

export default SingleJobDetails;
