import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

function Sidebar() {
  return (
    <div className="p-2 md:p-10 py-6 overflow-y-auto border-b border-indigo-500/50 ">
      <div className="flex flex-col items-center justify-center mb-10">
        <DocumentMagnifyingGlassIcon className="h-16 md:w-16 text-indigo-600 " />

        <h1 className="text-3xl text-center mt-2 font-bold mb-5">
          Web Scraper!
        </h1>

        <h2 className="text-lg text-center italic text-black/50">
          Scraping the Unscrapable{" "}
        </h2>
      </div>

      <ul></ul>
    </div>
  );
}

export default Sidebar;
