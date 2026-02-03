import React from 'react';
import search from "../Search course/images/search.svg";

function SearchSection({ searchValue, onSearchChange, activeFilter, onFilterChange }) {
  const filters = ['All', 'Design', 'Development', 'Marketing', 'Data Science', 'Business', 'Engineering'];

  return (
    <section id="searchsection">
      <center>
        <div className="siteinfo1">
          <a>Discover Your Courses</a>
          <p>Explore our wide range of courses taught by expert tutors</p>
        </div>
      </center>

      <div className="srch">
        <button>
          <img src={search} alt="Search" />
        </button>
        <input
          type="search"
          placeholder="Search for Course.."
          value={searchValue}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </div>

      <div className="filters">
        <text>Filter:</text>
        {filters.map((filter) => (
          <a
            key={filter}
            className={activeFilter === filter ? 'active' : ''}
            onClick={() => onFilterChange(filter)}
          >
            {filter}
          </a>
        ))}
      </div>
    </section>
  );
}

export default SearchSection;