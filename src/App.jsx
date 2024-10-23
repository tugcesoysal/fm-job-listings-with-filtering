import { useEffect, useState } from "react";
import JobCard from "./components/JobCard";
import { data } from "./data";
import FiltersDiv from "./components/FiltersDiv";

function App() {
  const [filters, setFilters] = useState([]);
  const [listing, setListing] = useState(data);

  useEffect(() => {
    setListing(() =>
      data.filter((job) =>
        filters.every(
          (filter) =>
            job.role === filter ||
            job.level === filter ||
            job.languages.includes(filter) ||
            job.tools.includes(filter),
        ),
      ),
    );
  }, [filters]);

  return (
    <div className="flex flex-col items-center bg-light-cyan-bg min-h-screen h-full text-body font-body pb-10">
      <div className="w-full h-[156px] bg-cyan">
        <div className="bg-[url('./images/bg-header-mobile.svg')] desktop:bg-[url('./images/bg-header-desktop.svg')] w-full h-full"></div>
      </div>
      {filters.length > 0 && (
        <FiltersDiv filters={filters} setFilters={setFilters} />
      )}
      <div className="w-full px-6 flex flex-col items-center mt-14 gap-10 desktop:gap-6">
        {listing.map((job) => (
          <JobCard key={job.id} job={job} setFilters={setFilters} />
        ))}
      </div>
    </div>
  );
}

export default App;
