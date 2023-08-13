//Filter.js

const Filter = ({ setFilter }) => {
    return (
      <input
        className="form-control"
        type="search"
        onChange={(e) => setFilter(e.target.value)}
      ></input>
    );
  };
  
  export default Filter;
  