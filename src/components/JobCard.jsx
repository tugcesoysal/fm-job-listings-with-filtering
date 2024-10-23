const JobCard = ({ job, setFilters }) => {
  const tags = [job.role, job.level, ...job.languages, ...job.tools];

  const handleFilter = (e) => {
    const newFilter = e.target.textContent;
    setFilters((prevFilters) => {
      if (!prevFilters.includes(newFilter)) {
        return [...prevFilters, newFilter];
      }
      return prevFilters;
    });
  };

  return (
    <div className="relative bg-white rounded-md w-5/6 pt-8 px-6 pb-6  transition-all ease-in-out desktop:flex  desktop:flex-row desktop:px-10 desktop:py-8 desktop:gap-6 shadow-drop-shadow">
      <div className="absolute left-0 top-0 bg-cyan w-[5px] h-full"></div>
      {/* image   */}
      <div className="flex items-center justify-center w-12 h-12 absolute -top-6 left-6 desktop:relative desktop:top-0 desktop:left-0 desktop:w-44 desktop:h-44 ">
        <img
          src={job.logo}
          alt="job logo"
          className="w-12 h-12 desktop:w-44 desktop:h-44"
        />
      </div>
      {/* Content */}
      <div className="w-full flex flex-col gap-4 desktop:flex-row desktop:justify-between desktop:items-center ">
        {/* Info */}
        <div className=" flex flex-col gap-2 ">
          <div className="flex gap-8 desktop:gap-4">
            <h2 className="text-cyan font-bold text-sm desktop:text-lg">
              {job.company}
            </h2>
            <div className="flex gap-2 h-6">
              {job.new && (
                <div className="font-bold uppercase text-white bg-cyan rounded-xl text-sm p-2 flex items-center justify-center">
                  new!
                </div>
              )}
              {job.featured && (
                <div className="font-bold uppercase text-white bg-very-dark-cyan rounded-xl text-sm p-2 flex items-center justify-center">
                  featured
                </div>
              )}
            </div>
          </div>
          <p className="text-very-dark-cyan font-bold leading-6 desktop:text-[22px] cursor-pointer hover:text-cyan ">
            {job.position}
          </p>
          <div className="text-dark-cyan leading-6 flex gap-2 desktop:gap-3 desktop:text-lg">
            <p>{job.postedAt}</p>
            <p>·</p>
            <p>{job.contract}</p>
            <p>·</p>
            <p>{job.location}</p>
          </div>
        </div>
        {/* Line */}
        <div className="w-full h-[1px] bg-dark-cyan desktop:hidden"></div>
        {/* Filters */}
        <div className="flex flex-wrap  gap-4 text-cyan font-bold leading-6 text-base  desktop:ml-auto">
          {tags.map((tag) => (
            <button
              onClick={handleFilter}
              className="bg-light-cyan-bg rounded-[4px] px-2 py-1 cursor-pointer  hover:text-white hover:bg-cyan"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobCard;
