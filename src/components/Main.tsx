import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebook,
  faLinkedin,
  faMedium,
  faGithub,
  faInstagram,
  faTelegram,
} from '@fortawesome/free-brands-svg-icons';

// Import markdown content as raw text
import quienesSomosContent from '../content/quienes_somos.md?raw';
import trabajoContent from '../content/trabajo.md?raw';
import debatesContent from '../content/debates.md?raw';
import colaboracionContent from '../content/colaboracion.md?raw';

interface MainProps {
  isArticleVisible: boolean;
  timeout: boolean;
  articleTimeout: boolean;
  article: string;
  onCloseArticle: () => void;
}

// Simple markdown renderer for basic content
const renderMarkdown = (content: string) => {
  const lines = content.split('\n');
  const elements: JSX.Element[] = [];
  
  lines.forEach((line, index) => {
    if (line.startsWith('# ')) {
      elements.push(<h2 key={index} className="major">{line.substring(2)}</h2>);
    } else if (line.startsWith('## ')) {
      elements.push(<h3 key={index}>{line.substring(3)}</h3>);
    } else if (line.startsWith('### ')) {
      elements.push(<h4 key={index}>{line.substring(4)}</h4>);
    } else if (line.trim() === '') {
      // Skip empty lines
    } else if (line.startsWith('![')) {
      // Handle images
      const match = line.match(/!\[([^\]]*)\]\(([^)]+)\)/);
      if (match) {
        elements.push(<img key={index} alt={match[1]} src={match[2]} />);
      }
    } else {
      elements.push(<p key={index}>{line}</p>);
    }
  });
  
  return elements;
};

const Main: React.FC<MainProps> = ({
  timeout,
  articleTimeout,
  article,
  onCloseArticle,
}) => {
  const close = (
    <button
      className="close"
      onClick={onCloseArticle}
      aria-label="Cerrar"
      role="button"
    />
  );

  const getContent = (articleId: string) => {
    switch (articleId) {
      case 'quienes_somos':
        return renderMarkdown(quienesSomosContent);
      case 'trabajo':
        return renderMarkdown(trabajoContent);
      case 'debates':
        return renderMarkdown(debatesContent);
      case 'colaboracion':
        return renderMarkdown(colaboracionContent);
      default:
        return null;
    }
  };

  return (
    <div id="main" style={{ display: timeout ? 'flex' : 'none' }}>
      <article
        id="quienes_somos"
        className={`${article === 'quienes_somos' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        {close}
        {getContent('quienes_somos')}
      </article>

      <article
        id="trabajo"
        className={`${article === 'trabajo' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        {close}
        {getContent('trabajo')}
      </article>

      <article
        id="debates"
        className={`${article === 'debates' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        {close}
        {getContent('debates')}
      </article>

      <article
        id="colaboracion"
        className={`${article === 'colaboracion' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        {close}
        {getContent('colaboracion')}
      </article>

      <article
        id="redes_sociales"
        className={`${article === 'redes_sociales' ? 'active' : ''} ${
          articleTimeout ? 'timeout' : ''
        }`}
        style={{ display: 'none' }}
      >
        <h2 className="major">Redes Sociales</h2>
        <ul className="icons">
          <li>
            <a href="https://instagram.com/odiaasoc" target="_blank">
              <FontAwesomeIcon icon={faInstagram} aria-label="instagram" />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/odiaasoc" target="_blank">
              <FontAwesomeIcon icon={faTwitter} aria-label="twitter" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/ODIAasoc" target="_blank">
              <FontAwesomeIcon icon={faFacebook} aria-label="facebook" />
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/company/odiaasoc/" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} aria-label="linkedin" />
            </a>
          </li>
          <li>
            <a href="https://medium.com/@odiaasoc" target="_blank">
              <FontAwesomeIcon icon={faMedium} aria-label="medium" />
            </a>
          </li>
          <li>
            <a href="https://github.com/odia/" target="_blank">
              <FontAwesomeIcon icon={faGithub} aria-label="github" />
            </a>
          </li>
          <li>
            <a href="https://t.me/odiaasoc" target="_blank">
              <FontAwesomeIcon icon={faTelegram} aria-label="telegram" />
            </a>
          </li>
        </ul>
        {close}
      </article>
    </div>
  );
};

export default Main;