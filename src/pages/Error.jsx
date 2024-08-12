import { useRouteError, NavLink } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h2>Oops!</h2>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>

      <NavLink to="/" className="nav-link">
        <h1>Go Back</h1>
      </NavLink>
    </div>
  );
}

