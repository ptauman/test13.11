import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import  { useState , useEffect} from "react";
import useAPI from "../hooks/useAPI";
import { useDispatch } from "react-redux";
import { loginAndLogout } from "../features/authSlice";
import { Resources } from "../types/type";
interface data {
    username : string
    amont : string | number
}




export const DataComponent : React.FC = () => {
    const currentUser = useSelector((state: RootState) => state.auth.username);
    const [missiles, setMissiles] = useState<data|null>(null);
    const dispatch = useDispatch();
    const {request } = useAPI();

    useEffect(() => {
        const loadMissiles = async () => {
            const response = await request({
                url: "http://localhost:3000/info/missiles/user",
                method: "post",
                body: { username: currentUser }
            });
            if (currentUser !== null) {
                const data = response.map ((missile: any) => ({ username: missile.username, amont: missile.amont as number }));
                setMissiles(data);
            }
        }
        loadMissiles()
    }, []);
    
    if(!missiles)
    {
        return (
            <>
            <div>
                <p> sorry... we don't have any data</p>
            </div>
            </>
        )
    }
    return (
        <>
        <div>
            {missiles.map((missile, index) => (
                <li key={index}>{missile}</li>
            ))}
        </div>
        </>
    )
}
