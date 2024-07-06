import React, { createContext, useContext, useState } from 'react';
import { Language } from '../interfaces/language.enum';

type languageContextType = {
  languageOption: Language;
  setLanguageOption: (lan: Language) => void;
};

const LanguageContext = createContext<languageContextType | null>(null);

const LanguageProvider = ({ children }: { children: React.ReactElement }) => {
  const [languageOption, setLanguageOption] = useState<Language>(
    Language.english
  );

  return (
    <LanguageContext.Provider
      value={{
        languageOption,
        setLanguageOption,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = (): languageContextType => {
  return useContext(LanguageContext) as languageContextType;
};

export { useLanguage, LanguageProvider };
