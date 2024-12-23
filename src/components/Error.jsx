import { useRouteError } from "react-router-dom";

import '../index.css'

export default function Error() {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Page not found</h1>
      <p>{error.data}</p>
    </div>
  );
}