import React from 'react';

export default function ChangeLanguage({ setLang, children, lang }) {
  return (
    <button
      onClick={() => {
        setLang(lang);
      }}
    >
      {children}
    </button>
  );
}
