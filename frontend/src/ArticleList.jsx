import React, { useEffect, useState } from 'react';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [sortBy, setSortBy] = useState('newest'); // Default sorting option

  // Function to fetch articles based on the selected sorting option
  const fetchArticles = (sortOption) => {
    fetch(`http://localhost:3000/api/articles?sortBy=${sortOption}`)
      .then(response => response.json())
      .then(data => setArticles(data))
      .catch(error => console.error('Error fetching articles:', error));
  };

  useEffect(() => {
    fetchArticles(sortBy); // Fetch articles when component mounts
  }, [sortBy]); // Re-fetch articles when sortBy changes

  const handleSortChange = (event) => {
    setSortBy(event.target.value); // Update sortBy state when the user selects a different sorting option
  };

  return (
    <div class="card">
        {articles.map((article) => (
                    <div class="card-body">
                        <h2 class="card-title">{article.title}</h2>
                        <p class="card-text">{article.summary}</p>
                    </div>
        ))}
    </div>
  );
};

export default ArticleList;