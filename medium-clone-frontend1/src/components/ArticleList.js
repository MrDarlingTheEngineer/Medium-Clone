import React, { useEffect, useState } from 'react';
import { fetchArticles } from '../api';

const ArticleList = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const loadArticles = async () => {
      const response = await fetchArticles();
      setArticles(response.data);
    };
    loadArticles();
  }, []);

  return (
    <div>
      {articles.map((article) => (
        <div key={article.id}>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ArticleList;

