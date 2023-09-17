import {Link} from "react-router-dom";

const ErrorPage = () => {
  return (
    <>
      <h1>Wrong page , go back to <Link to='/'> Home </Link> </h1>
    </>
  );
};

export default ErrorPage;
