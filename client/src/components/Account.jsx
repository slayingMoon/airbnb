import { useContext } from "react";
import { UserContext } from "../auth/UserContext";

export default function Account() {
    const {ready, user} = useContext(UserContext);

    if(!ready) {
        return 'Loading...';
    }

    if(ready && !user) {
        return <Navigate to={'/login'} />
    }

    return (
        <div>account page for {user.name}</div>
    );
};