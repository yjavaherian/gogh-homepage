import vangophSignature from "./assets/goph.svg";
import SupportedTerminals from "./components/SupportedTerminals.tsx";
import TerminalsList from "./components/TerminalsList.tsx";

const supportedTerminals = [
  { name: "Alacritty", link: "https://github.com/alacritty/alacritty" },
  { name: "Cygwin", link: "https://www.cygwin.com/" },
  { name: "Foot", link: "https://codeberg.org/dnkl/foot" },
  {
    name: "Gnome",
    link: "https://help.gnome.org/users/gnome-terminal/stable/",
  },
  { name: "Guake", link: "http://guake-project.org/" },
  { name: "iTerm", link: "https://iterm2.com/" },
  { name: "Kitty", link: "https://sw.kovidgoyal.net/kitty/" },
  { name: "Konsole", link: "https://konsole.kde.org/" },
  { name: "Mate", link: "https://github.com/mate-desktop/mate-terminal" },
  { name: "Mintty", link: "https://mintty.github.io/" },
  { name: "Pantheon", link: "https://github.com/elementary/terminal" },
  { name: "Tilix", link: "https://gnunn1.github.io/tilix-web/" },
  { name: "XFCE4", link: "https://docs.xfce.org/apps/terminal/start" },
  {
    name: "Terminator",
    link: "https://github.com/gnome-terminator/terminator",
  },
];
function App() {
  return (
    <main className="pt-20 flex flex-col place-items-center font-sans text-neutral-700">
      <header className="flex flex-col place-items-center">
        <img className="w-96" src={vangophSignature} alt="goph logo" />
        <blockquote className="mt-6 italic text-2xl ">
          There is no <span className="text-blue-400">blue</span> without{" "}
          <span className="text-yellow-400">yellow</span> and without{" "}
          <span className="text-orange-400">orange</span>.
          {/* <Quote  className="ml-1 w-4 h-4 inline"/> */}
          <br />
          <a
            href="https://en.wikipedia.org/wiki/Vincent_van_Gogh"
            className="text-amber-800 hover:text-amber-900 hover:underline"
          >
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
        <SupportedTerminals terminals={supportedTerminals} />
      </section>
      <section className="mt-8 w-2/3">
        <h2 className="mb-8 font-bold text-4xl">Instal (Linux & macOS)</h2>

        <code className="block w-fit  bg-stone-300 text-stone-950 rounded-lg p-4">
          <span className="text-stone-500">$</span> bash -c "$(wget -qO-
          https://git.io/vQgMr)"
        </code>
        <span className="block text-xl my-2">or</span>

        <code className="block w-fit bg-stone-300 text-stone-950 rounded-lg p-4">
          <span className="text-stone-500">$</span> bash -c "$(curl -sLo-
          https://git.io/vQgMr)"
        </code>
      </section>
      <section className="w-11/12 mt-8">
        <TerminalsList />
      </section>
    </main>
  );
}

export default App;
