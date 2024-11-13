import axios from "axios";
import { useDispatch } from "react-redux";
import { setLoading, setError, setSuccess } from "../features/statusSlice";
import {loginAndLogout} from "../features/authSlice";
import { jwtDecode } from "jwt-decode";

interface JwtPayload {
    _id: string;
    isAdmin: boolean;
}

 export interface APIrequest {
    url: string,
    method: string,
    body?: any,
    token?: string
}

const useAPI = () => {
   const dispatch = useDispatch();
    const request = async (data: APIrequest) => {
        dispatch(setSuccess(null));
        dispatch(setError(null));
        dispatch(setLoading(true));
        try {
            const response = await axios(data.url, {
                method: data.method,
                data: data.body,
                headers: data.token ? { Authorization: `Bearer ${data.token}` } : {}, 
            });
            const token = response?.data?.token
            if (token) {
                document.cookie = `authToken=${token}; path=/; secure; samesite=strict; max-age=3600`
                const tokenInfo = jwtDecode<JwtPayload>(token);
                const isAdmin = tokenInfo.isAdmin;
                dispatch(loginAndLogout({ isAuthenticated: true, isAdmin }));
            }
            dispatch(setSuccess(response.data.message));
            return response.data;           
        } catch (error: any) {
            console.log(error);
            dispatch(setError(error.message));

            return error.message;
        }
        finally {
            dispatch(setLoading(false));
        }
    }   
    return { request }
}
export default useAPI