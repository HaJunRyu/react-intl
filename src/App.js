import logo from './logo.svg';
import './App.css';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { useState } from 'react';
import locale from './locale';

function App() {
  const [lang, setLang] = useState('en');
  return (
    <IntlProvider locale="en" messages={locale[lang]} defaultLocale="en">
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <FormattedMessage id="reactMessage" />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <button
            onClick={() => {
              setLang('en');
            }}
          >
            English
          </button>
          <button
            onClick={() => {
              setLang('kr');
            }}
          >
            한국어
          </button>
          <button
            onClick={() => {
              setLang('ch');
            }}
          >
            中国人
          </button>
          <button
            onClick={() => {
              setLang('be');
            }}
          >
            Tiếng Việt
          </button>
        </header>
      </div>
    </IntlProvider>
  );
}

export default App;
