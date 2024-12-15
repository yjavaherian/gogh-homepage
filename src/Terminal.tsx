import { Minus, Square, X } from "lucide-react";

export interface Theme {
  name: string;
  foreground: string;
  background: string;
  cursor: string;
  colors: string[];
}
// user colors:    0 1 2 3 4 6 8 12
// unused colors:  5 7 9 10 11 13 14 15

export default function Terminal(theme: Theme) {
  return (
    <div>
      <header className="bg-neutral-800 text-neutral-100 text-center relative p-2 rounded-t-lg">
        {theme.name}
        <div className="absolute right-0 top-0 flex flex-row gap-2 pr-2 pt-2">
          <button className="bg-neutral-700 rounded-full">
            <Minus className="w-5 h-5 p-1" />
          </button>
          <button className="bg-neutral-700 rounded-full">
            <Square className="w-5 h-5 p-1" />
          </button>
          <button className="bg-neutral-700 rounded-full">
            <X className="w-5 h-5 p-1" />
          </button>
        </div>
      </header>
      <main
        style={{
          backgroundColor: theme.background,
          color: theme.foreground,
          fontFamily: "Cascadia Code",
        }}
        className="p-4 rounded-b-lg "
      >
        <div className="grid grid-cols-8 w-fit mb-8">
          {theme.colors.map((color) => (
            <span
              style={{ backgroundColor: color }}
              className="w-16 h-8"
            ></span>
          ))}
        </div>

        <span style={{ color: theme.colors[2] }}>john</span>
        <span style={{ color: theme.colors[6] }}>@</span>
        <span style={{ color: theme.colors[4] }}>doe-pc</span>
        <strong style={{ color: theme.colors[1] }} className="font-bold">
          $
        </strong>
        <span> ls -l</span>
        <span
          style={{
            backgroundColor: theme.cursor,
            animation: "1s blink step-end infinite",
          }}
        >
          &nbsp;
        </span>
        <div>
          <span>drwxr-xr-x 1 john john&nbsp;</span>
          <strong style={{ color: theme.colors[3], fontWeight: 700 }}>
            Documents
          </strong>
        </div>

        <div>
          <span>drwxr-xr-x 1 john john&nbsp;</span>
          <strong
            style={{
              color: theme.colors[0],
              backgroundColor: theme.colors[2],
              fontWeight: 700,
            }}
          >
            Downloads
          </strong>
        </div>

        <div>
          <span>drwxr-xr-x 1 john john&nbsp;</span>
          <strong
            style={{
              color: theme.colors[0],
              backgroundColor: theme.colors[8],
              fontWeight: 700,
            }}
          >
            Pictures
          </strong>
        </div>

        <div>
          <span>drwxr-xr-x 1 john john&nbsp;</span>
          <strong style={{ color: theme.colors[12], fontWeight: 700 }}>
            Music
          </strong>
        </div>
      </main>
    </div>
  );
}
