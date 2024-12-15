import { useState } from "react";
import vangophSignature from "./assets/goph.svg";
import oldThemes from "./assets/themes.json" with { type: "json" };
import Terminal, { Theme } from "./Terminal.tsx";
import { convertTheme, lightOrDark } from "./utils.ts";
import { Quote } from "lucide-react";


function App() {
  const [filteredBackgrounds,setFilteredBackgrounds] = useState<string[]>(['light','dark']);

  const  themes:Theme[]  = oldThemes.map(convertTheme).filter(theme =>  filteredBackgrounds.includes(lightOrDark(theme.background)));
  // themes = themes.filter(theme => theme.name == 'Espresso')
  return (
    <main className="pt-20 flex flex-col place-items-center font-sans text-neutral-700">
      <header className="flex flex-col place-items-center" >
        <img className="w-96" src={vangophSignature} alt="goph logo" />
        <blockquote className="mt-6 italic text-2xl ">
         
        There is no <span className="text-blue-400">blue</span> without <span className="text-yellow-400">yellow</span> and without <span className="text-orange-400">orange</span>.
         {/* <Quote  className="ml-1 w-4 h-4 inline"/> */}
         <br />
        <a href="https://en.wikipedia.org/wiki/Vincent_van_Gogh" className="text-amber-800 hover:text-amber-900 hover:underline">
        - Vincent Van Gogh
        </a>
        </blockquote>
        
      </header>
      <section className="mt-20 w-2/3">
        <h2 className="font-bold text-4xl">Color scheme for your terminal</h2>
        <p className="mt-4 text-2xl ">
          Gogh is a collection of color schemes for various terminal emulators.
          These schemes are designed to make your terminal more visually
          appealing and improve your productivity by providing a better contrast
          and color differentiation.
        </p>
      </section>

       <section className="mt-8 w-2/3">
        <h2 className="font-bold text-4xl" >Supported Terminals</h2>
        <ul className="mt-4 flex flex-row gap-2 flex-wrap ">
          <button  className="rounded-xl bg-neutral-700 text-neutral-100 hover:text-neutral-200 hover:border-e-neutral-800  py-1 px-2 text-lg "  ><a target="_blank" href="https://github.com/alacritty/alacritty">Alacritty</a></button>
          <button  className="rounded-xl bg-neutral-700 text-neutral-100 hover:text-neutral-200 hover:border-e-neutral-800  py-1 px-2 text-lg "  ><a target="_blank" href="https://www.cygwin.com/">Cygwin</a></button>
          <button  className="rounded-xl bg-neutral-700 text-neutral-100 hover:text-neutral-200 hover:border-e-neutral-800  py-1 px-2 text-lg "  ><a target="_blank" href="https://codeberg.org/dnkl/foot">Foot</a></button>
          <button  className="rounded-xl bg-neutral-700 text-neutral-100 hover:text-neutral-200 hover:border-e-neutral-800  py-1 px-2 text-lg "  ><a target="_blank" href="https://help.gnome.org/users/gnome-terminal/stable/">Gnome Terminal</a></button>
          <button  className="rounded-xl bg-neutral-700 text-neutral-100 hover:text-neutral-200 hover:border-e-neutral-800  py-1 px-2 text-lg "  ><a target="_blank" href="http://guake-project.org/">Guake</a></button>
          <button  className="rounded-xl bg-neutral-700 text-neutral-100 hover:text-neutral-200 hover:border-e-neutral-800  py-1 px-2 text-lg "  ><a target="_blank" href="https://iterm2.com/">iTerm</a></button>
          <button  className="rounded-xl bg-neutral-700 text-neutral-100 hover:text-neutral-200 hover:border-e-neutral-800  py-1 px-2 text-lg "  ><a target="_blank" href="https://sw.kovidgoyal.net/kitty/">Kitty</a></button>
          <button  className="rounded-xl bg-neutral-700 text-neutral-100 hover:text-neutral-200 hover:border-e-neutral-800  py-1 px-2 text-lg "  ><a target="_blank" href="https://konsole.kde.org/">Konsole</a></button>
          <button  className="rounded-xl bg-neutral-700 text-neutral-100 hover:text-neutral-200 hover:border-e-neutral-800  py-1 px-2 text-lg "  ><a target="_blank" href="https://github.com/mate-desktop/mate-terminal">Mate</a></button>
          <button  className="rounded-xl bg-neutral-700 text-neutral-100 hover:text-neutral-200 hover:border-e-neutral-800  py-1 px-2 text-lg "  ><a target="_blank" href="https://mintty.github.io/">Mintty</a></button>
          <button  className="rounded-xl bg-neutral-700 text-neutral-100 hover:text-neutral-200 hover:border-e-neutral-800  py-1 px-2 text-lg "  ><a target="_blank" href="https://github.com/elementary/terminal">Pantheon / Elementary</a></button>
          <button  className="rounded-xl bg-neutral-700 text-neutral-100 hover:text-neutral-200 hover:border-e-neutral-800  py-1 px-2 text-lg "  ><a target="_blank" href="https://gnunn1.github.io/tilix-web/">Tilix</a></button>
          <button  className="rounded-xl bg-neutral-700 text-neutral-100 hover:text-neutral-200 hover:border-e-neutral-800  py-1 px-2 text-lg "  ><a target="_blank" href="https://docs.xfce.org/apps/terminal/start">XFCE4</a></button>
          <button  className="rounded-xl bg-neutral-700 text-neutral-100 hover:text-neutral-200 hover:border-e-neutral-800  py-1 px-2 text-lg "  ><a target="_blank" href="https://github.com/gnome-terminator/terminator">Terminator</a></button>
        </ul>

      </section>
      <section  className="mt-8 w-2/3">
        <h2 className="mb-8 font-bold text-4xl" >Instal (Linux & macOS)</h2>
      

        <code className="block w-fit  bg-stone-300 text-stone-950 rounded-lg p-4"><span className="text-stone-500">$</span> bash -c "$(wget -qO- https://git.io/vQgMr)"</code>
        <span className="block text-xl my-2"> 
          or
        </span>
                 
        <code className="block w-fit bg-stone-300 text-stone-950 rounded-lg p-4"><span className="text-stone-500">$</span> bash -c "$(curl -sLo- https://git.io/vQgMr)"</code>

      </section>
      <section  className="w-11/12 mt-8">
        <div className="flex flex-row gap-2 justify-center place-items-center">
          <button className="py-3  w-56 text-2xl font-bold rounded-xl bg-amber-700 hover:bg-amber-900 active:bg-amber-950 text-amber-50 " onClick={() => setFilteredBackgrounds(['light','dark'])}>All</button>
          <button className="py-3  w-56 text-2xl font-bold rounded-xl bg-amber-700 hover:bg-amber-900 active:bg-amber-950 text-amber-50 " onClick={() => setFilteredBackgrounds(['light'])}>Light Themes</button>
          <button className="py-3  w-56 text-2xl font-bold rounded-xl bg-amber-700 hover:bg-amber-900 active:bg-amber-950 text-amber-50 " onClick={() => setFilteredBackgrounds(['dark'])} >Dark Themes</button>
        </div>
        <ul className="mt-8 grid gap-4 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ">
          {themes.map(theme => <li key={theme.name}>
            <Terminal {...theme} />
            </li>)}
        </ul>
      </section>
    </main>
  );
}

export default App;
