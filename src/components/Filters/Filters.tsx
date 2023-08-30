export const Filters = () => {
  return (
    <section className="controllers">
      <div className="filter">
        <select name="locations" id="locations">
          <option value="vname1">vname1</option>
          <option value="vname2">vname2</option>
          <option value="vname3">vname3</option>
          <option value="vname4">vname4</option>
        </select>
      </div>
      <div className="sorting">
        <select name="sort" id="sort">
          <option value="vname1">A-Z</option>
          <option value="vname2">Z-A</option>
        </select>
      </div>
      <div className="search">
        <input type="search" placeholder="Search..." />
        <span className="material-symbols-outlined"> search </span>
      </div>
    </section>
  );
};
