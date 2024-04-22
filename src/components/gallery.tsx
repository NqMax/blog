export function Gallery() {
  return (
    <div className="hidden h-full grid-cols-3 grid-rows-3 gap-3 lg:grid">
      <div className="rounded border border-main bg-[url(/home/grid/grid-1.svg)] bg-cover" />
      <div className="row-span-2 rounded border border-main bg-[url(/home/grid/grid-2.svg)] bg-cover" />
      <div className="row-span-3 rounded border border-main bg-[url(/home/grid/grid-3.svg)] bg-cover" />
      <div className="row-span-2 rounded  border border-main bg-[url(/home/grid/grid-4.svg)] bg-cover" />
      <div className="rounded border border-main bg-[url(/home/grid/grid-5.svg)] bg-cover" />
    </div>
  );
}
