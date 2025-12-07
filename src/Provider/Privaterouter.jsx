
import { Navigate, useLocation } from "react-router";
import MySpinner from "../Components/MySpinner";
import useAuth from "../Hooks/useAuth";

const Privaterout = ({ children }) => {
  const { user, loading } = useAuth()
  const location = useLocation();

  if (loading) {
    return <p>Loading...</p> //ekane spinner add korte hobe
  }

  if (user && user.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default Privaterout;