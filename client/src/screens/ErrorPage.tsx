import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError() as any;

  return (
    <div className="error-page-container">
      <h1>Error!</h1>
      {!error.response && (
        <p>Network Error... Please try to refresh the page.</p>
      )}
      {error.response && <p>{error.response.data.message}</p>}
      <a href="/">Go to Home 🏠</a>
    </div>
  );
};

export default ErrorPage;
