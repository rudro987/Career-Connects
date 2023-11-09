import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobCategoryCard from "./JobCategoryCard";
import { AuthContext } from "../../Provider/AuthProvider";
import Loader from "../../components/Loader";

const JobCategoryTabs = () => {
  const { loading } = useContext(AuthContext);
  const [jobs, setJobs] = useState([]);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const data = useLoaderData();

  useEffect(() => {
    setJobs(data);
    setFilteredJobs(data);
  }, [data]);

  const handleFilter = filter => {
    if(filter === 'All'){
        setFilteredJobs(jobs);
    }else if(filter === 'On Site'){
      const onSiteJobs = jobs.filter(job => job.jobCategory === 'On Site');
      console.log('setting jobs data as: ', onSiteJobs )
      setFilteredJobs(onSiteJobs);
    }else if(filter === 'Remote'){
      const remoteJobs = jobs.filter(job => job.jobCategory === 'Remote');
      console.log('setting jobs data as: ', remoteJobs )
      setFilteredJobs(remoteJobs);
      
    }else if(filter === 'Hybrid'){
      const hybridJobs = jobs.filter(job => job.jobCategory === 'Hybrid');
      console.log('setting jobs data as: ', hybridJobs )
      setFilteredJobs(hybridJobs);
    }else if(filter === 'Part-Time'){
      const partTimeJobs = jobs.filter(job => job.jobCategory === 'Part-Time');
      console.log('setting jobs data as: ', partTimeJobs )
      setFilteredJobs(partTimeJobs);
    }
  }


  

  loading && <Loader></Loader>;

  return (
    <div>
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mt-16 mb-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
          Job Categories
        </h2>
      </div>
      <div className="border-b border-gray-200 dark:border-gray-700">
        <nav
          className="-mb-0.5 flex justify-center space-x-6"
          aria-label="Tabs"
          role="tablist"
        >
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
            role="tab"
            onClick={() => {
                handleFilter("All");

            }}
          >
            All
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            role="tab"
            onClick={() => {
                handleFilter("On Site");
            }}
          >
            On Site
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            role="tab"
            onClick={() => {
                handleFilter("Remote");
            }}
          >
            Remote
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            role="tab"
            onClick={() => {
                handleFilter("Hybrid");
            }}
          >
            Hybrid
          </button>
          <button
            type="button"
            className="hs-tab-active:font-semibold hs-tab-active:border-blue-600 hs-tab-active:text-blue-600 py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-blue-600 focus:outline-none focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            role="tab"
            onClick={() => {
                handleFilter("Part-Time");
            }}
          >
            Part-Time
          </button>
        </nav>
      </div>
      <div className="mt-3">
        <div
        >
          <div className="text-charcoalGray dark:text-gray-400">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-20">
              {filteredJobs &&
                filteredJobs.map((job) => (
                  <JobCategoryCard key={job._id} job={job}></JobCategoryCard>
                ))}
            </div>
          </div>
        </div>
       
        
        
      </div>
    </div>
  );
};

export default JobCategoryTabs;
