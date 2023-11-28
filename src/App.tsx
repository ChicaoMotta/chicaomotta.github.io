import "./App.css";
import { FixedComponent } from "./components/FixedComponent";
import { ScrollingContent } from "./components/ScrollingContent";
import { useEffect, useState } from "react";

function App() {
  const [language, setLanguage] = useState("EN");

  // Use useEffect to set initial language based on user preference (if stored)
  useEffect(() => {
    const storedLanguage = localStorage.getItem("preferredLanguage");
    if (storedLanguage) {
      setLanguage(storedLanguage);
    }
  }, []);

  // Update language preference
  const handleLanguageChange = (newLanguage: string) => {
    setLanguage(newLanguage);
    // Persist the user's language preference
    localStorage.setItem("preferredLanguage", newLanguage);
  };

  const languageOptions = ["EN", "PT"];

  return (
    <div className="container mx-auto px-10 py-20 lg:grid lg:grid-flow-col">
      <div className="laguage">
        {languageOptions.map((lang) => (
          <button key={lang} type="button" onClick={() => handleLanguageChange(lang)}>{lang}</button>
        ))}
      </div>
      <FixedComponent language={language} />
      <ScrollingContent language={language} />
    </div>
  );
}

export default App;
