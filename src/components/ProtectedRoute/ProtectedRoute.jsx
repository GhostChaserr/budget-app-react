import { Navigate } from "react-router-dom";

const ProtectedRoute = (props) => {
  // Logic for checking user auth

  // 1. ვკითხულობთ ტოკენი გვაქვს თუ არა საცავში (ავტორიზებულია თუ არა მომხმარებელი)
  const userId = localStorage.getItem("token");
  const isAuthenticated = !!userId;

  // 3. ავტორიზაციის მიხედვიტ ან ვამისამართებთ signing ის გვერდზე ან ვაძელვთ წვდომას მთავარ გვერდზე
  if (!isAuthenticated) return <Navigate to="/signin" />;

  return props.children;
};

export default ProtectedRoute;
