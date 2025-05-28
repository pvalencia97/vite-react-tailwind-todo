import { useEffect, useState } from "react";
import IconMoon from "./componets/Icons/IconMoon";
import IconSun from "./componets/Icons/IconSun";

const Header = () => { 
  const [darkMode, setDarkMode] = useState(false);

  useEffect (() => {
    if (darkMode){
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else{
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

    return(
         <header className="container mx-auto px-4 pt-8 md:max-w-xl">
        <div className="flex justify-between">
          <h1 className="text-3x1 font-semibold uppercase tracking-[0.3em] text-white">Todo</h1>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <IconSun/> : <IconMoon />  }

           
          </button>
        </div>
      </header>
    )
 }
 export default Header;