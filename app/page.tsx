import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/outline";

function HomePage() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center">
        <DocumentMagnifyingGlassIcon className="h-64 w-64 text-indigo-600/20 " />

        <h1 className="text-3xl text-center mt-2 font-bold mb-5">
          Welcome to Amazon Web Scraper!
        </h1>

        <h2 className="text-lg italic text-black/50">Get started by editing</h2>

        <h3 className="text-lg italic text-black/50">
          https://www.amazon.com/dp/B08H95Y452
        </h3>
      </div>
    </div>
  );
}

export default HomePage;
