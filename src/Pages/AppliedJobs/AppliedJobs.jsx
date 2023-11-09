import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import { getAppliedJobs } from "../../api/Api";
import AppliedJobCard from "./AppliedJobCard";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AppliedJobs = () => {
  const { user } = useContext(AuthContext);
  const { data: allAppliedJobs, isLoading } = useQuery({
    queryKey: ["allAppliedJobs"],
    queryFn: async () => await getAppliedJobs(),
  });

  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredJobs = allAppliedJobs?.filter((job) => {
    if (selectedCategory === "All") {
      return job.email === user.email;
    } else {
      return job.category === selectedCategory && job.email === user.email;
    }
  });

  if (isLoading) return <Loader></Loader>;

  return (
    <div className="py-28">
      <h1 className="text-3xl font-bold pb-10 text-center">Applied Jobs</h1>
      <div className="pb-10 flex gap-5 items-center">
        <h1>Filter by Category: </h1>
        <select
          className="py-3 px-4 pe-9 bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
        >
          <option value="All">All</option>
          <option value="On Site">On Site</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Part-Time">Part-Time</option>
        </select>
      </div>
      
        {filteredJobs.length === 0 ? (
          <div className="w-full flex justify-center items-center min-h-[50vh] text-3xl font-semibold">
            You haven't applied for any job yet!!
          </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {
            filteredJobs.map((job) => (
            <AppliedJobCard key={job._id} job={job}></AppliedJobCard>
          ))
          }
          </div>
        )}
      
    </div>
  );
};

export default AppliedJobs;
