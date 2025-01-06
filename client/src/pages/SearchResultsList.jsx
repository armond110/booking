import SearchResult from "./SearchResult";

export default function SearchResultsList ({ results }) {
  
  return (
    <div className="dropdown absolute bottom-0 right-80 top-16 md:left-100 ">
      {results.slice(0,12).map((result) => {
        return (
            <form className="max-w-lg max-h-xl mx-auto  md:px-none bg-gray-200 opacity-80 ">   
              <div className=" hover:border cursor-pointer border-gray-400 ">
              <div className="">
                <div><SearchResult id={result._id} result={result.title} location={result.address}/></div>
                
                </div>
              </div>
            </form>
        )
      })}
    </div>
  );
};