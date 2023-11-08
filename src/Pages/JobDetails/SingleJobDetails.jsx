import { useQuery } from "@tanstack/react-query";
import { getSingleJob } from "../../api/Api";
import { useParams } from "react-router-dom";
import Loader from "../../components/Loader";

const SingleJobDetails = () => {
    const { _id } = useParams();
    const { data: singleJob, isLoading } = useQuery({
        queryKey: ["singleJob", _id],
        queryFn: async () => await getSingleJob(_id),
      });

      const {companyLogo, jobBanner, 
        jobTitle, jobDescription, salaryRange, applicantsNumber} = singleJob;
      
      if (isLoading) return <Loader></Loader>;

    return (
        <div>
            <h1>single job</h1>
        </div>
    );
};

export default SingleJobDetails;