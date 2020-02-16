import React from "react";
import UserList from "./UserList";
import useUsersService from "../../services/useUsersService";
import { Link } from 'react-router-dom';


function UsersView(props) {
    const userService = useUsersService();

    return (
        <>
            <Link to={"/users/add"} className="btn btn-primary">Add New User</Link>
            {userService.status === 'loading' && <div>Loading...</div>}
            {userService.status === 'loaded' && <UserList users={userService.payload} />}
            {userService.status === 'error' && (<div>Something went wrong.</div>)}
        </>
    );
}

export default UsersView;
/**
 * import React, { useEffect } from "react";
import UserList from "./UserList";
import { User } from "../../types/User";

interface UserProps {
    users: User[]
}

const UsersView = (props: UserProps) => {

    useEffect(() => {
        console.log(props.users);

    }, [props.users]);

    return (
        <>
            <UserList users={props.users} />
        </>
    );
}

export default UsersView;

 */