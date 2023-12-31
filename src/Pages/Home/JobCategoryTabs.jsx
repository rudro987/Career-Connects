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
    }else if(filter === 'On site'){
      const onSiteJobs = jobs.filter(job => job.jobCategory === 'On site');
      setFilteredJobs(onSiteJobs);
    }else if(filter === 'Remote'){
      const remoteJobs = jobs.filter(job => job.jobCategory === 'Remote');
      setFilteredJobs(remoteJobs);
      
    }else if(filter === 'Hybrid'){
      const hybridJobs = jobs.filter(job => job.jobCategory === 'Hybrid');
      setFilteredJobs(hybridJobs);
    }else if(filter === 'Part-Time'){
      const partTimeJobs = jobs.filter(job => job.jobCategory === 'Part-Time');
      setFilteredJobs(partTimeJobs);
    }
  }

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
            id="all-tab"
            className="hs-tab-active:font-semibold hs-tab-active:border-oliveGreen hs-tab-active:text-oliveGreen py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-oliveGreen font-bold focus:outline-none focus:text-oliveGreen disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
            role="tab"
            onClick={() => {
                handleFilter("All");
            }}
          >
            All
          </button>
          <button
            type="button"
            id="on-site-tab"
            className="hs-tab-active:font-semibold hs-tab-active:border-oliveGreen hs-tab-active:text-oliveGreen py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-oliveGreen font-bold focus:outline-none focus:text-oliveGreen disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            role="tab"
            onClick={() => {
                handleFilter("On site");
            }}
          >
            On site
          </button>
          <button
            type="button"
            id="remote-tab"
            className="hs-tab-active:font-semibold hs-tab-active:border-oliveGreen hs-tab-active:text-oliveGreen py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-oliveGreen font-bold focus:outline-none focus:text-oliveGreen disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            role="tab"
            onClick={() => {
                handleFilter("Remote");
            }}
          >
            Remote
          </button>
          <button
            type="button"
            id="hybrid-tab"
            className="hs-tab-active:font-semibold hs-tab-active:border-oliveGreen hs-tab-active:text-oliveGreen py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-oliveGreen font-bold focus:outline-none focus:text-oliveGreen disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
            role="tab"
            onClick={() => {
                handleFilter("Hybrid");
            }}
          >
            Hybrid
          </button>
          <button
            type="button"
            id="part-time-tab"
            className="hs-tab-active:font-semibold hs-tab-active:border-oliveGreen hs-tab-active:text-oliveGreen py-4 px-1 inline-flex items-center gap-x-2 border-b-2 border-transparent text-sm whitespace-nowrap text-gray-500 hover:text-oliveGreen font-bold focus:outline-none focus:text-oliveGreen disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-oliveGreen"
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
          <div className="text-charcoalGray dark:text-gray-400 bg-pearlWhite rounded-md max-w-full px-7 justify-items-center mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10 gap-5">
              {Array.isArray(filteredJobs) && filteredJobs?.map((job) => (
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
