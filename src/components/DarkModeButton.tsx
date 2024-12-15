import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export default function DarkModeBtn() {
  const [darkmode, setDarkMode] = useState(
    localStorage.getItem("theme") ?? "light"
  );
  const toggleDarkMode = () => {
    darkmode == "dark" ? setDarkMode("light") : setDarkMode("dark");
  };
  useEffect(() => {
    localStorage.setItem("theme", darkmode);
    if (darkmode == "dark") {
      document.body.classList.add("tw-dark");
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("tw-dark");
      document.body.classList.remove("dark");
    }
  }, [darkmode]);
  return (
    <button
      className="border p-1 rounded-lg  border-stone-700 text-stone-700 dark:border-stone-100 dark:text-stone-100"
      onClick={toggleDarkMode}
    >
      {darkmode == "dark" ? <Moon /> : <Sun />}
    </button>
  );
}
