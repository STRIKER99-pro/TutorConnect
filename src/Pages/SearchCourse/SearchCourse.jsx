import { useState, useEffect } from 'react';
import Header from './Components/Header.jsx';
import SearchSection from './Components/SearchSection.jsx';
import CourseGrid from './Components/CourseGrid.jsx';
import dataStruct from "./Search course/images/C-Data-Structures-tutorial.jpg";
import CProgramming from "./Search course/images/C-and-C-Programming-course.jpg";
import Algebra from "./Search course/images/Algebra-101.jpg";
import Probability from "./Search course/images/probability_vs_stats.png";
import OperatingSystem from "./Search course/images/what_is_operating_system_3b4b575025.jpg";
import './Search.css';

function SearchCourse() {
  const [searchValue, setSearchValue] = useState('');
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [activeFilter, setActiveFilter] = useState('All');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Initial static courses (fallback data)
  const staticCourses = [
    {
      id: 1,
      title: 'Data Structures and Algorithms',
      description: 'Learn about structures and how to implement stacks and queues with Linked lists..',
      image: dataStruct,
      price: '20,000FCFA',
      category: 'Engineering',
      level: null
    },
    {
      id: 2,
      title: 'Programming C/C++',
      description: 'Learn how to program the most common programming language (C) and OOP language (C++)',
      image: CProgramming,
      price: '20,000FCFA',
      category: 'Engineering',
      level: null
    },
    {
      id: 3,
      title: 'Algebra',
      description: 'Learn simple concepts in algebra like set theory, matrices, elementary row operations and more..',
      image: Algebra,
      price: '20,000FCFA',
      category: 'Engineering',
      level: 'Math'
    },
    {
      id: 4,
      title: 'Probability',
      description: 'Learn fundamental probability concepts permutations and combinations and more..',
      image: Probability,
      price: '20,000FCFA',
      category: 'Engineering',
      level: 'Math'
    },
    {
      id: 5,
      title: 'Operating Systems',
      description: 'Learn about the different types of OS\'s like Linux, Windows, Macbook...',
      image: OperatingSystem,
      price: '20,000FCFA',
      category: 'Engineering',
      level: null
    }
  ];

  // Load initial courses
  useEffect(() => {
    setCourses(staticCourses);
    setFilteredCourses(staticCourses);
  }, []);

  // Fetch courses from API when search value changes
  useEffect(() => {
    const fetchCourses = async () => {
      if (!searchValue.trim()) {
        setFilteredCourses(courses);
        setError(null);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3000/courses?search=${searchValue}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch courses');
        }

        const data = await response.json();
        setFilteredCourses(data.length > 0 ? data : []);
        setError(null);
      } catch (err) {
        console.error('Error fetching courses:', err);
        // Fallback to filtering static courses
        const filtered = courses.filter(course =>
          course.title.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredCourses(filtered);
        setError(null);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimer = setTimeout(fetchCourses, 300);
    return () => clearTimeout(debounceTimer);
  }, [searchValue, courses]);

  // Handle category filter
  useEffect(() => {
    if (activeFilter === 'All') {
      setFilteredCourses(courses);
    } else {
      const filtered = courses.filter(
        course => course.category === activeFilter
      );
      setFilteredCourses(filtered);
    }
  }, [activeFilter, courses]);

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    setSearchValue(''); // Clear search when filter changes
  };

  return (
    <div className="App">
      <Header />
      
      <SearchSection
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        activeFilter={activeFilter}
        onFilterChange={handleFilterChange}
      />

      <section>
        <a className="title">Showing {filteredCourses.length} Course{filteredCourses.length !== 1 ? 's' : ''}</a>
        
        {loading && <p style={{ textAlign: 'center', marginTop: '20px' }}>Loading courses...</p>}
        {error && <p style={{ textAlign: 'center', marginTop: '20px', color: 'red' }}>{error}</p>}
        
        <CourseGrid courses={filteredCourses} />
      </section>
    </div>
  );
}

export default SearchCourse;
