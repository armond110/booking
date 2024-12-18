import { Link } from "react-router";


export default function SearchResult ({ result }) {
  return (
    <Link to={'/places/'+result}
      className="search-result"
      
    >
      {result}
    </Link>
  );
};