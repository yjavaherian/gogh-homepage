import Terminal, { type Theme } from "./Terminal.tsx";
import { useState } from "react";
import oldThemes from "../assets/themes.json" with { type: "json" };
import { convertTheme, lightOrDark } from "../utils.ts";


export default function TerminalsList() {
    const [filteredBackgrounds, setFilteredBackgrounds] = useState<string[]>([
    "light",
    "dark",
    ]);
    const themes: Theme[] = oldThemes
        .map(convertTheme)
        .filter((theme) =>
            filteredBackgrounds.includes(lightOrDark(theme.background))
        );

    return (
    <>
      <div className="flex flex-row gap-2 justify-center place-items-center">
        <button
          className="py-3  w-56 text-2xl font-bold rounded-xl bg-amber-700 hover:bg-amber-900 active:bg-amber-950 text-amber-50 "
          onClick={() => setFilteredBackgrounds(["light", "dark"])}
        >
          All
        </button>
        <button
          className="py-3  w-56 text-2xl font-bold rounded-xl bg-amber-700 hover:bg-amber-900 active:bg-amber-950 text-amber-50 "
          onClick={() => setFilteredBackgrounds(["light"])}
        >
          Light Themes
        </button>
        <button
          className="py-3  w-56 text-2xl font-bold rounded-xl bg-amber-700 hover:bg-amber-900 active:bg-amber-950 text-amber-50 "
          onClick={() => setFilteredBackgrounds(["dark"])}
        >
          Dark Themes
        </button>
      </div>
      <ul className="mt-8 grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
        {themes.map((theme) => (
          <li key={theme.name}>
            <Terminal {...theme} />
          </li>
        ))}
      </ul>
    </>
  );
}
