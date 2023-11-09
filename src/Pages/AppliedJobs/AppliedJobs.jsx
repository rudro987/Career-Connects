import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import { getAppliedJobs } from "../../api/Api";
import AppliedJobCard from "./AppliedJobCard";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const AppliedJobs = () => {
  const [appliedJobs, setAllAppliedJobs] = useState([]);
  const [filteredJobList, setFilteredJobList] = useState([]);
  const { user } = useContext(AuthContext);
  const { data: allAppliedJobs, isLoading } = useQuery({
    queryKey: ["allAppliedJobs"],
    queryFn: async () => await getAppliedJobs(),
  });

  useEffect(() => {
    if (allAppliedJobs) {
      const filteredJobs = allAppliedJobs.filter((job) => job.email === user.email);
      setAllAppliedJobs(filteredJobs);
      setFilteredJobList(filteredJobs);
    }
  }, [allAppliedJobs, user.email]);
  
  const handleFilter = filter => {
    if(filter === 'All'){
      setFilteredJobList(appliedJobs);
    }else if(filter === 'On Site'){
      const onSiteJobs = appliedJobs.filter(job => job.jobCategory === 'On Site');
      setFilteredJobList(onSiteJobs);
    }else if(filter === 'Remote'){
      const remoteJobs = appliedJobs.filter(job => job.jobCategory === 'Remote');
      setFilteredJobList(remoteJobs);
    }else if(filter === 'Hybrid'){
      const hybridJobs = appliedJobs.filter(job => job.jobCategory === 'Hybrid');
      setFilteredJobList(hybridJobs);
    }else if(filter === 'Part-Time'){
      const partTimeJobs = appliedJobs.filter(job => job.jobCategory === 'Part-Time');
      setFilteredJobList(partTimeJobs);
    }
  }

  if (isLoading) return <Loader></Loader>;

  return (
    <div className="py-28 max-w-[85rem] mx-auto">
      <h1 className="text-3xl font-bold pb-10 text-center">Applied Jobs</h1>
      <div className="pb-10 flex gap-5 items-center">
        <h1>Filter by Category: </h1>
        <select
          className="py-3 px-4 pe-9 bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-gray-700 dark:border-transparent dark:text-gray-400 dark:focus:ring-gray-600"
          onChange={(e) => handleFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="On Site">On Site</option>
          <option value="Remote">Remote</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Part-Time">Part-Time</option>
        </select>
      </div>
      
        {filteredJobList.length === 0 ? (
          <div className="w-full flex justify-center items-center min-h-[50vh] text-3xl font-semibold">
            You haven't applied for any job in this category yet!!
          </div>
        ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {
            filteredJobList.map((job) => (
            <AppliedJobCard key={job._id} job={job}></AppliedJobCard>
          ))
          }
          </div>
        )}
      
    </div>
  );
};

export default AppliedJobs;
