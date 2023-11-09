/* eslint-disable react/prop-types */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteJob } from "../../api/Api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DeleteConfirmation from "./DeleteConfirmation";

const MyJobsTable = ({ job }) => {
  const queryClient = useQueryClient();
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
  } = job;

  const { mutateAsync } = useMutation({
    mutationFn: deleteJob,
    onSuccess: () => {
      queryClient.invalidateQueries("allJobs");
    },
  });

  const handleDelete = async () => {
    await mutateAsync(_id);
    toast.success("Job Deleted Successfully");
  };

  return (
    <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800 text-center">
      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
        <img src={companyLogo} className="w-10 h-10 object-contain" />
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
        <img src={jobBanner} className="w-10 h-10 object-contain" />
      </td>

      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
        {postedBy}
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {jobTitle}
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {jobCategory}
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {postDate}
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {applicationDeadline}
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {applicantsNumber}
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {salaryRange}
      </td>
      <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
        <button
          type="button"
          to="/"
          className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          Update
        </button>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <div>
          <button
            type="button"
            className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            data-hs-overlay="#hs-slide-down-animation-modal"
          >
            Delete
          </button>
          <DeleteConfirmation handleDelete={handleDelete} />
        </div>
      </td>
      <ToastContainer />
    </tr>
  );
};

export default MyJobsTable;
