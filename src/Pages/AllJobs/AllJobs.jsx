/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { getAllJobs } from "../../api/Api";
import Loader from "../../components/Loader";
import AllJobsTable from "./AllJobsTable";
import { useEffect, useState } from "react";

const AllJobs = () => {
  const [searchValue, setSearchValue] = useState('');
  const [filteredJobs, setFilteredJobs] = useState([]);
  const { data: allJobs, isLoading } = useQuery({
    queryKey: ["allJobs"],
    queryFn: async () => await getAllJobs(),
  });

    useEffect(() => {
      setFilteredJobs(allJobs);
    }, [allJobs]);

    const handleSearch = () => {
      if(searchValue === ''){
        setFilteredJobs(allJobs);
      }else{
        const filtered = allJobs.filter(job => job.jobTitle.toLowerCase().includes(searchValue.toLowerCase()));
        setFilteredJobs(filtered);
      }
      setSearchValue('');
    }

  if (isLoading) return <Loader></Loader>;
  if (allJobs.length === 0) {
    return (
      <div className="w-full flex justify-center items-center min-h-[80vh] text-3xl font-semibold">
        No Job posted yet!!
      </div>
    );
  }

  return (
    <div className="max-w-[85rem] mx-auto">
      <div className="flex flex-col py-28">
        <h1 className="text-2xl font-bold text-center pb-10 underline">
          All Jobs
        </h1>
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <div className="flex justify-end pb-10">
                <div>
                  <label
                    htmlFor="hs-trailing-button-add-on-with-icon-and-button"
                    className="sr-only"
                  >
                    Label
                  </label>
                  <div className="relative flex rounded-lg shadow-sm">
                    <input
                      type="text"
                      onChange={e => setSearchValue(e.target.value)}
                      id="hs-trailing-button-add-on-with-icon-and-button"
                      name="hs-trailing-button-add-on-with-icon-and-button"
                      className="py-3 px-4 ps-11 block w-full focus-visible:outline-none border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                    />
                    <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none z-20 ps-4">
                      <svg
                        className="flex-shrink-0 h-4 w-4 text-gray-400"
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
                        <circle cx={11} cy={11} r={8} />
                        <path d="m21 21-4.3-4.3" />
                      </svg>
                    </div>
                    <button
                      type="button"
                      onClick={handleSearch}
                      className="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-oliveGreen text-white hover:bg-oliveGreen/[0.8] disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </div>
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                    >
                      Posted By
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                    >
                      Job Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                    >
                      Job Posting Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                    >
                      Application Deadline
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                    >
                      Salary Range
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                    >
                      See Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredJobs?.map((job) => (
                    <AllJobsTable key={job._id} job={job}></AllJobsTable>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
