import "./App.css";
import { FixedComponent } from "./components/FixedComponent";
import { ScrollingContent } from "./components/ScrollingContent";

function App() {
  let language = "EN";
  const storedLanguage = localStorage.getItem(
    "preferredLanguagePortfolioChicao",
  );
  if (storedLanguage) {
    language = storedLanguage;
  }

  // Update language preference
  const handleLanguageChange = (newLanguage: string) => {
    // Persist the user's language preference
    localStorage.setItem("preferredLanguagePortfolioChicao", newLanguage);
    window.location.reload();
  };

  const languageOptions = ["EN", "PT"];

  return (
    <div className="container mx-auto px-10 py-20 lg:grid lg:grid-flow-col">
      <div className="laguage">
        {languageOptions.map((lang) => (
          <button key={lang} onClick={() => handleLanguageChange(lang)}>
            {lang}
          </button>
        ))}
      </div>
      <FixedComponent language={language} />
      <ScrollingContent language={language} />
    </div>
  );
}

export default App;
