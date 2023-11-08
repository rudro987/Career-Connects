/* eslint-disable react/prop-types */
import { useQuery } from "@tanstack/react-query";
import { getAllJobs } from "../../api/Api";
import Loader from "../../components/Loader";
import AllJobsTable from "./AllJobsTable";

const AllJobs = () => {
  const { data: allJobs, isLoading } = useQuery({
    queryKey: ["allJobs"],
    queryFn: async () => await getAllJobs(),
  });

  if (isLoading) return <Loader></Loader>;
  if (allJobs.length === 0) {
    return (
      <div className="w-full flex justify-center items-center min-h-[80vh] text-3xl font-semibold">
        No Job posted yet!!
      </div>
    );
  }

  return (
    <div className="flex flex-col py-28">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Posted By</th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Job Title</th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Job Posting Date</th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Application Deadline</th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">Salary Range</th>
                    <th scope="col" className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase">See Details</th>
                  </tr>
                </thead>
                <tbody>
                  {allJobs?.map(job => <AllJobsTable key={job._id} job={job}></AllJobsTable>)}
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
  );
};

export default AllJobs;
