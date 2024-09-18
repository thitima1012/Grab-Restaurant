import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { Children } from "react";

const AdminPage = ({ Children }) => {
    const { user } = useAuthContext();
    if (!user) {
      return <Navigate to="/login" />;
    }
    if (user.roles.includes("ROLES_ADMIN")) {
        return Children;
    }
    return <Navigate to="/notallowed" />;
};

export default AdminPage;