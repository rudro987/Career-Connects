import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const AllJobsTable = ({ job }) => {
  const { _id, jobTitle, postedBy, postDate, applicationDeadline, salaryRange } =
  job;
  return (
    <tr className="odd:bg-white even:bg-gray-100 dark:odd:bg-slate-900 dark:even:bg-slate-800 text-center">
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
        {postedBy}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {jobTitle}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {postDate}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {applicationDeadline}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
        {salaryRange}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
        <Link
          type="button"
          to={`/all-jobs/${_id}`}
          className="inline-flex items-center gap-x-2 text-sm rounded-lg border border-transparent text-oliveGreen font-bold hover:text-oliveGreen/[.8] disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
        >
          View Details
        </Link>
      </td>
    </tr>
  );
};

export default AllJobsTable;
