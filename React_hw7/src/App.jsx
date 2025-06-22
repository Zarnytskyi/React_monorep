import { useContext } from "react";
import LanguageSwitcher from "./LanguageSwitcher"
import { LanguageContext } from "./Language";

function App() {
  const messages = {
  en: {
    greeting: 'Hello!',
  },
  ru: {
    greeting: 'Привет!',
  },
};
  const {language} = useContext(LanguageContext);
  return (
    <>
      <LanguageSwitcher/>
      <h1>{messages[language].greeting}</h1>;
    </>
  )
}

export default App
