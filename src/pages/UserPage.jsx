import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const UserPage = () => {
    const { user } = useAuthContext();
    if(!user) {
        return <Navigate to="/login" />;
    }
    return
}

export default UserPage;