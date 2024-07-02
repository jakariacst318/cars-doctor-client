import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from "react-router-dom";
import { Circles } from "react-loader-spinner";

const PrivetRoute = ({children}) => {
    const {user , loading} = useContext(AuthContext)

    if(loading){
        return  (<Circles
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
            />)
    }

    if(user?.email){
        return children
    }
    return ( <Navigate to='/login' replace></Navigate>
    );
};

export default PrivetRoute;