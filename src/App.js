import logo from './logo.svg';
import './App.css';
import { FormattedMessage, IntlProvider } from 'react-intl';
import { useState } from 'react';
import locale from './locale';
import ChangeLanguage from './ChangeLanguage';

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

          <ChangeLanguage setLang={setLang} lang="en">
            English
          </ChangeLanguage>
          <ChangeLanguage setLang={setLang} lang="kr">
            한국어
          </ChangeLanguage>
          <ChangeLanguage setLang={setLang} lang="ch">
            中国人
          </ChangeLanguage>
          <ChangeLanguage setLang={setLang} lang="be">
            Tiếng Việt
          </ChangeLanguage>
        </header>
      </div>
    </IntlProvider>
  );
}

export default App;
