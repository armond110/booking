import axios from "axios";

export default function Image({src,...rest}) {
  src = src && src.includes('https://')
    ? src
    : axios.defaults.baseURL + '/uploads/'+src;
  return (
    <img {...rest} src={src} alt={''} />
  );
}