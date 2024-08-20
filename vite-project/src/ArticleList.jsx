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
    <div style={{color: 'black'}}>
      <h1>Articles.</h1>

      {/* Sorting Menu */}
      <div>
        <label>Sort by: </label>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {/* Display Articles */}

        {articles.map((article) => (
            <div class="card">
                    <div class="card-body">
                        <h2 class="card-title">{article.title}</h2>
                        <p class="card-text">{article.summary}</p>
                        <p class="card-published">{article.published}</p>
                        <a href={article.link}>Read more</a>
                    </div>
            </div>
        ))}

    </div>
  );
};

export default ArticleList;