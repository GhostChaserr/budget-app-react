import { useContext } from "react";
import { LanguageContext } from "../../LanguageContext";
import { ThemeContext } from "../../ThemeContext";

const Header = () => {
  const langContext = useContext(LanguageContext);
  const themeContext = useContext(ThemeContext);

  const onLangChange = () => {
    langContext.updateLang(langContext.language === "eng" ? "ge" : "eng");
  };

  const onThemeChange = () => {
    themeContext.setTheme(themeContext.theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      Change Language to {langContext.language === "eng" ? "ge" : "eng"}
      <button onClick={onLangChange}>Update</button>
      <button onClick={onThemeChange}>
        {themeContext.theme === "light" ? "make light" : "make dark"}
      </button>
    </div>
  );
};

export default Header;
