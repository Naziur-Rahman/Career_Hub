import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="  text-3xl flex items-center justify-center h-screen">
            <h1>Oops !!!</h1><br></br>

        <Link to={"/"}><h1>Go back home</h1></Link>
        </div>
    );
};

export default ErrorPage;