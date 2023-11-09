import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import { getAllJobs } from "../../api/Api";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import MyJobsTable from "./MyJobsTable";

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  const { data: allJobs, isLoading } = useQuery({
    queryKey: ["allJobs"],
    queryFn: async () => await getAllJobs(),
  });

  const filteredJobs =
    allJobs && allJobs?.filter((job) => job.submittedBy === user.email);

  if (isLoading) return <Loader></Loader>;
  if (filteredJobs.length === 0) {
    return (
      <div className="w-full flex justify-center items-center min-h-[80vh] text-3xl font-semibold">
        No Job posted yet!!
      </div>
    );
  }
  return (
    <div className="min-h-[70vh] py-28">
    <h1 className="text-2xl font-bold text-center pb-10 underline">My Jobs</h1>
      <div className="flex flex-col">
        <div className="-m-1.5 overflow-x-auto">
          <div className="p-1.5 min-w-full inline-block align-middle">
            <div className="overflow-hidden">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                    >
                      Company Logo
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                    >
                      Job Banner
                    </th>
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
                      Job Category
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
                      Applicants Number
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
                      Update
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase"
                    >
                      Delete
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredJobs?.map((job) => (
                    <MyJobsTable key={job._id} job={job}></MyJobsTable>
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

export default MyJobs;
