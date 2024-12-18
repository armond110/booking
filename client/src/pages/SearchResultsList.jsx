
import SearchResult from "./SearchResult";

export default function SearchResultsList ({ results }) {
  
  return (
    <div className="dropdown">
      {results.slice(0,8).map((result, id) => {
        return (
            <form className="max-w-sm max-h-lg mx-auto  px-2 md:px-none">   
              <div className=" hover:border cursor-pointer bg-gray-100 border-gray-400">
              <SearchResult result={result.address} key={id} />
              
              </div>
            </form>
        )
      })}
    </div>
  );
};