import Header from "./components/Header.tsx";
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
    <main className="vincent font-inter text-neutral-700">
      <Header />

      <section className="px-40 mt-8 ">
        <SupportedTerminals terminals={supportedTerminals} />
      </section>

      <section className=" mt-8">
        <TerminalsList />
      </section>
    </main>
  );
}

export default App;
