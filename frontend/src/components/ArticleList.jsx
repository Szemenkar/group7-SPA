import React, { useEffect, useState } from 'react';

const ArticleList = ({ theme }) => {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState('newest'); // Default sorting option

  // Function to fetch articles based on the selected sorting option
  const fetchArticles = (sortOption) => {
    fetch(`http://localhost:3000/api/articles?sortBy=${sortOption}`)
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error('Error fetching articles:', error));
  };

  useEffect(() => {
    fetchArticles(sortBy); // Fetch articles when component mounts
  }, [sortBy]); // Re-fetch articles when sortBy changes

  const handleSortChange = (event) => {
    setSortBy(event.target.value); // Update sortBy state when the user selects a different sorting option
  };

  return (
    <div>
      <div className="sort-options">
        <label htmlFor="sortBy">Sort by: </label>
        <select id="sortBy" value={sortBy} onChange={handleSortChange}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
          <option value="mostPopular">Most Popular</option>
        </select>
      </div>
      <div className="card">
        {articles.map((article) => (
          <a
            href={article.link}
            className={`card ${theme}`}
            key={article.id}
            target="_blank" // new tab
          >
            <div className={`card-body ${theme}`} key={article.id}>
              <h2 className="card-title">{article.title}</h2>
              <p className="card-text">{article.summary}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ArticleList;