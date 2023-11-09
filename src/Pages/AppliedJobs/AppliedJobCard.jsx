/* eslint-disable react/prop-types */

const AppliedJobCard = ({job}) => {
    const {jobTitle, jobCategory, salaryRange, jobDescription, jobBanner} = job;
    return (
        <div className="flex flex-col bg-white border shadow-sm rounded-xl dark:bg-slate-900 dark:border-gray-700 dark:shadow-slate-700/[.7]">
        <div className="rounded-md p-10">
        <img className="w-full h-56 rounded-xl " src={jobBanner} alt="Image Description" />
        </div>
        <div className="p-4 md:p-5">
          <h3 className="text-lg font-medium text-gray-800 dark:text-white">
          <span className="font-bold">Job Title:</span> {jobTitle}
          </h3>
          <p className="mt-1 text-gray-500 dark:text-gray-400 text-base">
            <span className="font-bold">Job Category:</span> {jobCategory}
          </p>

          <p className="mt-1 text-gray-500 dark:text-gray-400">
          <span className="font-bold">Salary Range:</span> {salaryRange}
          </p>

          <p className="mt-1 text-gray-500 dark:text-gray-400">
          <span className="font-bold">Job Description:</span>{jobDescription.slice(0, 100) + '...'}
          </p>

        </div>
      </div>
    );
};

export default AppliedJobCard;