import React, { useState, useEffect } from 'react';
import Header from './Header.astro';
import Main from './Main';
import Footer from './Footer.astro';

const App: React.FC = () => {
  const [isArticleVisible, setIsArticleVisible] = useState(false);
  const [timeout, setTimeout] = useState(false);
  const [articleTimeout, setArticleTimeout] = useState(false);
  const [article, setArticle] = useState('');
  const [loading, setLoading] = useState('is-loading');

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setLoading('');
    }, 100);

    // Add event listeners for navigation buttons
    const handleNavClick = (event: Event) => {
      const target = event.target as HTMLButtonElement;
      const articleId = target.getAttribute('data-article');
      
      if (articleId) {
        event.preventDefault();
        handleOpenArticle(articleId);
      }
    };

    // Attach listeners to all navigation buttons
    document.addEventListener('click', handleNavClick);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleNavClick);
    };
  }, []);

  const handleOpenArticle = (articleId: string) => {
    setIsArticleVisible(!isArticleVisible);
    setArticle(articleId);

    window.setTimeout(() => {
      setTimeout(!timeout);
    }, 325);

    window.setTimeout(() => {
      setArticleTimeout(!articleTimeout);
    }, 350);
  };

  const handleCloseArticle = () => {
    setArticleTimeout(!articleTimeout);

    window.setTimeout(() => {
      setTimeout(!timeout);
    }, 325);

    window.setTimeout(() => {
      setIsArticleVisible(!isArticleVisible);
      setArticle('');
    }, 350);
  };

  return (
    <div
      className={`body ${loading} ${
        isArticleVisible ? 'is-article-visible' : ''
      }`}
    >
      <div id="wrapper">
        <Header timeout={timeout} />
        <Main
          isArticleVisible={isArticleVisible}
          timeout={timeout}
          articleTimeout={articleTimeout}
          article={article}
          onCloseArticle={handleCloseArticle}
        />
        <Footer timeout={timeout} />
      </div>
      <div id="bg" />
    </div>
  );
};

export default App;