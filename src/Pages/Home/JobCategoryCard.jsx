/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const JobCategoryCard = ({job}) => {
    const {_id, postedBy, jobTitle, postDate, applicationDeadline, salaryRange, applicantsNumber} = job;
  return (
    <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
      <div className="p-4 md:p-7">
        <h3 className="text-xl text-center font-medium text-charcoalGray dark:text-white">
          <span className="font-bold">Job title:</span> {jobTitle}
        </h3>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
        <span className="font-bold">Posted by:</span> {postedBy}
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
        <span className="font-bold">Date posted:</span> {postDate}
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
        <span className="font-bold">Application Deadline:</span> {applicationDeadline}
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
        <span className="font-bold">Salary Range:</span> {salaryRange} USD
        </p>
        <p className="mt-2 text-gray-500 dark:text-gray-400">
        <span className="font-bold">Applicants Number:</span> {applicantsNumber}
        </p>
        <Link
          className="mt-3 inline-flex items-center gap-x-1 text-sm rounded-lg border border-transparent text-oliveGreen font-bold disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
          to={`/all-jobs/${_id}`}
        >
          View Details
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
            <path d="m9 18 6-6-6-6" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default JobCategoryCard;
