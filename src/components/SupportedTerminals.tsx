export default function SupportedTerminals({
  terminals,
}: {
  terminals: { name: string; link: string }[];
}) {
  return (
    <>
      <h2 className="font-bold text-4xl">Supported Terminals</h2>
      <ul className="mt-4 flex flex-row gap-2 flex-wrap ">
        {terminals.map((terminal) => (
          <button
            key={terminal.name}
            className="rounded-xl bg-neutral-700 text-neutral-100 hover:text-neutral-200 hover:border-e-neutral-800  py-1 px-2 text-lg "
          >
            <a target="_blank" href={terminal.link}>
              {terminal.name}
            </a>
          </button>
        ))}
      </ul>
    </>
  );
}
