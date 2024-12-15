// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
import oldThemes from "./assets/themes.json" with { type: "json" };
import Terminal, { Theme } from "./Terminal.tsx";

interface oldTheme {
    name: string  
    color_01: string
    color_02: string
    color_03: string
    color_04: string
    color_05: string
    color_06: string
    color_07: string
    color_08: string
    color_09: string
    color_10: string
    color_11: string
    color_12: string
    color_13: string
    color_14: string
    color_15: string
    color_16: string
    background: string 
    foreground: string 
    cursor: string
}

function convertTheme(theme:oldTheme){
  return {
    name:theme.name,
    background:theme.background,
    foreground: theme.foreground,
    cursor: theme.cursor,
    colors:[
      theme.color_01,
      theme.color_02,
      theme.color_03,
      theme.color_04,
      theme.color_05,
      theme.color_06,
      theme.color_07,
      theme.color_08,
      theme.color_09,
      theme.color_10,
      theme.color_11,
      theme.color_12,
      theme.color_13,
      theme.color_14,
      theme.color_15,
      theme.color_16
    ]
  }
}

function App() {
  let themes:Theme[]  = oldThemes.map(convertTheme);
  themes = themes.filter(theme => theme.name == 'Espresso')
  return (
    <body>
      <h1>Goph</h1>
      <section>
        <h2>Color scheme for your terminal</h2>
        <p>
          Gogh is a collection of color schemes for various terminal emulators.
          These schemes are designed to make your terminal more visually
          appealing and improve your productivity by providing a better contrast
          and color differentiation.
        </p>
      </section>
      <section>
        <h2>Supported Terminals</h2>
        <ul>
          <li>Alacritty</li>
          <li>Gnome Terminal</li>
          <li>Konsole</li>
          <li>Cygwin </li>
          <li>Foot</li>
          <li>Guake</li>
          <li>iTerm</li>
          <li>Kitty</li>
          <li>Mate</li>
          <li>Mintty</li>
          <li>Pantheon / Elementary</li>
          <li>Tilix</li>
          <li>XFCE4</li>
          <li>Terminator</li>
        </ul>
      </section>
      <section>
        <h2>Instal (Linux & macOS)</h2>
        <h3>Wget</h3>
        <code>bash -c "$(wget -qO- https://git.io/vQgMr)"</code>
        <h3>Curl</h3>
        <code>bash -c "$(curl -sLo- https://git.io/vQgMr)"</code>
      </section>
      <section>
        <div>
          <button>All</button>
          <button>Light</button>
          <button>Dark</button>
        </div>
        <div>
          {themes.map(theme => <Terminal {...theme}></Terminal>)}
        </div>
      </section>
    </body>
  );
}

export default App;
