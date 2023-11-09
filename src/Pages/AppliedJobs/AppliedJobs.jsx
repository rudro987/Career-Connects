import { useQuery } from "@tanstack/react-query";
import Loader from "../../components/Loader";
import { getAppliedJobs } from "../../api/Api";
import AppliedJobCard from "./AppliedJobCard";

const AppliedJobs = () => {
    const { data: allAppliedJobs, isLoading } = useQuery({
        queryKey: ["allAppliedJobs"],
        queryFn: async () => await getAppliedJobs(),
      });
    
      if (isLoading) return <Loader></Loader>;
      if (allAppliedJobs.length === 0) {
        return (
          <div className="w-full flex justify-center items-center min-h-[80vh] text-3xl font-semibold">
            You haven't applied for any job yet!!
          </div>
        );
      }
    
      return (
       <div className="py-28">
       <h1 className="text-3xl font-bold pb-10 text-center">Applied Jobs</h1>
       <div className="pb-10">
        Filter by: 
       </div>
       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
       {allAppliedJobs && allAppliedJobs.map(job => <AppliedJobCard key={job._id} job={job}></AppliedJobCard>)}
       </div>
       </div>
      );
};

export default AppliedJobs;