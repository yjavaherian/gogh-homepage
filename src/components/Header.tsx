import DarkModeBtn from "./DarkModeButton.tsx";
import GitHubStars from "./Github.tsx";
import { ClipboardList, Quote } from "lucide-react";

export default function Header() {
  return (
    <header className="pt-20 pb-10 px-40 w-full  flex flex-row justify-between">
      <section className="w-1/2">
        <div className="flex flex-row place-items-center gap-6">
          <a href="https://github.com/Gogh-Co/Gogh" className="">
            <svg
              viewBox="0 0 37 23"
              xmlns="http://www.w3.org/2000/svg"
              className="w-32 inline dark:fill-neutral-300 fill-neutral-700"
            >
              <path d="M10.856 1.487c-1.045-1.812-3.33-1.788-5-.884C2.199 2.582-.305 7.562.03 11.668c.194 2.372 3.05 4.73 5.458 4.14 2.939-.722 3.088-5.65 3.729-7.984.133-.483-1.62.02-1.825.249-.135.149-.818.957-.957.928-.448-.095-2.124.628-1.59.74 1.647.349 3.224-.635 4.293-1.821l-1.825.249c-.596 2.168-.997 4.474-1.866 6.556-.353.846-.619.265.299.395-.389-.055-.781-.3-1.123-.477-1.104-.573-1.914-1.27-2.412-2.431-1.051-2.456.328-5.584 1.516-7.724.886-1.598 3.601-5.251 5.198-2.483.272.472 2.083-.256 1.931-.518M4.865 15.22c-1.119 1.924-2.508 4.428-4.451 5.605-.266.16-.58.564-.166.767.415.203.997.048 1.369-.177 2.212-1.34 3.777-3.957 5.049-6.145.466-.8-1.479-.605-1.801-.05m10.928-7.082c-3.107-2.71-8.293 4.344-4.917 6.406 1.558.95 3.814-.193 4.94-1.326 1.544-1.554 1.996-3.722-.023-5.08-.517-.347-2.232.427-1.805.715 1.047.704 1.518 1.63 1.112 2.864-.247.753-1.385 2.38-2.326 2.133-1.383-.364-.953-2.401-.609-3.314.224-.597 1.001-2.4 1.823-1.683.46.4 2.241-.335 1.805-.715m9.731-1.696c-2.701-2.72-7.031.546-7.437 3.74-.602 4.728 4.226 4.353 6.488 1.605-.578-.136-1.157-.271-1.735-.408a67.322 67.322 0 01-1.938 4.34 35.051 35.051 0 01-2.183 3.895c-.58.889-2.924 3.034-1.749.387 1.479-3.332 6.007-4.955 8.86-6.955 2.846-1.994 5.629-4.583 7.429-7.578.581-.966 3.516-7.203-.384-4.762-4.098 2.566-5.349 10.238-5.466 14.483-.024.91 1.401.737 1.79.22a74.104 74.104 0 012.067-2.607c.531-.643 1.083-1.281 1.701-1.842-.916-.561-1.334-.262-1.255.896-.166.563-.262 1.124-.351 1.702-.672 4.375 4.127 1.224 5.419.009.953-.895-.567-1.573-1.285-.898-4.113 3.863-.726-.92-1.564-2.718a.733.733 0 00-.634-.452c-2.337-.198-4.533 3.752-5.72 5.327l1.79.22c.103-3.745.963-7.246 2.689-10.578.532-1.027 1.209-2.107 2.104-2.864-.831-.211-1.259.083-1.284.884-.482 1.26-1.273 2.454-2.025 3.553-2.346 3.434-5.894 6-9.401 8.134-2.547 1.549-4.753 2.988-6.33 5.592-1.961 3.235 1.827 3.995 3.827 2.133 2.767-2.576 4.368-6.852 5.741-10.292.409-1.025-1.292-.946-1.735-.408-4.39 5.33-2.712-7.444.802-3.905.627.633 2.454-.164 1.769-.853z" />
            </svg>
          </a>
          <DarkModeBtn />
        </div>
        <h2 className="mt-4 font-bold text-4xl">
          Turn your Terminal into a modern piece of art
        </h2>
        <p className="mt-4 text-2xl ">
          Gogh is a collection of themes for various terminal emulators. These
          themes are designed to make your terminal more visually appealing and
          improve your productivity by providing a better contrast and color
          differentiation.
        </p>
        <div className="mt-20">
          <code className="bg-secondary-200 text-secondary-950 rounded-xl p-4 mr-4 dark:border">
            <span className="text-secondary-500">$</span> bash -c "$(wget -qO-
            https://git.io/vQgMr)"
            <button
              className="ml-10 text-secondary-500 hover:text-secondary-600 "
              onClick={() => {
                navigator.clipboard.writeText(
                  'bash -c "$(wget -qO- https://git.io/vQgMr)"'
                );
              }}
            >
              <ClipboardList className=" h-5 inline " />
            </button>
          </code>
          <GitHubStars />
        </div>
      </section>
      <section className="w-80">
        <a href="https://en.wikipedia.org/wiki/Vincent_van_Gogh">
          <img
            src="portrait.jpg"
            className="rounded-lg"
            alt="self portrait of vincent van gogh "
          />
          <div className="mt-6">
            <Quote className="w-4 h-4" />
            <blockquote className="inline italic text-xl">
              There is no blue without yellow and without orange.
            </blockquote>
          </div>
        </a>
      </section>
    </header>
  );
}
