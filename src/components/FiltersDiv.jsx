const FiltersDiv = ({ filters, setFilters }) => {
  const handleRemoveFilter = (filterValue) => {
    setFilters((prevFilters) =>
      prevFilters.filter((filter) => filter !== filterValue),
    );
  };

  return (
    <div className="bg-white w-4/5 rounded-[5px] desktop:px-10 p-5 flex justify-between gap-10 shadow-drop-shadow desktop:w-3/4 -mt-10">
      <div className="flex flex-wrap gap-4 rounded-[5px] ">
        {filters.map((filter) => (
          <div className="bg-light-cyan-filter h-8 flex gap-3 justify-center items-center pl-2">
            <p className="text-cyan font-bold">{filter}</p>
            <button
              onClick={() => handleRemoveFilter(filter)}
              className="bg-cyan w-8 h-8 flex items-center justify-center rounded-r-[5px] hover:bg-very-dark-cyan"
            >
              <img src="./images/icon-remove.svg" />
            </button>
          </div>
        ))}
      </div>
      <button
        onClick={() => setFilters([])}
        className="text-dark-cyan font-bold leading-6 hover:text-cyan hover:underline "
      >
        Clear
      </button>
    </div>
  );
};

export default FiltersDiv;
