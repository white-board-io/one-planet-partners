export function Breakpoint() {
  return (
    <aside
      aria-hidden
      className="pointer-events-none fixed right-4 bottom-4 z-50 rounded-md bg-brand-black/85 px-3 py-2 font-mono text-xs leading-none tracking-wide text-brand-white shadow-lg backdrop-blur-sm"
    >
      <span className="opacity-70">Breakpoint:</span>{" "}
      <span className="sm:hidden">xs</span>
      <span className="hidden sm:inline md:hidden">sm</span>
      <span className="hidden md:inline lg:hidden">md</span>
      <span className="hidden lg:inline xl:hidden">lg</span>
      <span className="hidden xl:inline 2xl:hidden">xl</span>
      <span className="hidden 2xl:inline">2xl</span>
    </aside>
  );
}
