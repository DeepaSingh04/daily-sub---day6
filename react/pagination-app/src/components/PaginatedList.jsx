
import React, { useEffect, useState } from 'react';

const PaginatedList = () => {
  const [items, setItems] = useState([]); 
  const [currentPage, setCurrentPage] = useState(1); 
  const itemsPerPage = 10; 

  // Fetching data from API
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await res.json();
      setItems(data);
    };
    fetchData();
  }, []);

  
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = items.slice(startIndex, endIndex);

  
  const totalPages = Math.ceil(items.length / itemsPerPage);

 
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

 
  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Paginated Posts</h2>
      {currentItems.map((item) => (
        <div key={item.id} style={{ border: '1px solid #ccc', margin: '8px', padding: '10px' }}>
          <h4>{item.title}</h4>
          <p>{item.body}</p>
        </div>
      ))}

     
      <div style={{ marginTop: '20px' }}>
        <button onClick={handlePrev} disabled={currentPage === 1}>Prev</button>
        <span style={{ margin: '0 10px' }}>Page {currentPage} of {totalPages}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
      </div>
    </div>
  );
};

export default PaginatedList;
