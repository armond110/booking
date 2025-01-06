import { Link } from "react-router";


export default function SearchResult ({result, id, location }) {
  
  return (
    <Link to={'/places/'+id}
      className="search-result"
      
    >
      
      {result} {location}
    </Link>
  );
};