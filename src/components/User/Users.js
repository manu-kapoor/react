import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import UsersView from "./UsersView";
import { User } from "../../types/User"
import useUsersService from "../../services/useUsersService";

const Users = () => {


    return (
        <>
            <UsersView />
        </>
    );
}

export default Users;

/**
 * import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import UsersView from "./UsersView";
import { User } from "../../types/User"
import useUsersService from "../../services/useUsersService";

const Users: React.FC<{}> = () => {

    const userService = useUsersService();
    interface UserProps {
        users: User[]
    }
    return (
        <>
            {userService.status === 'loading' && <div>Loading...</div>}
            {userService.status === 'loaded' && <UsersView users={userService.payload.users} />}
            {userService.status === 'error' && (<div>Something went wrong.</div>)}
        </>
    );
}

export default Users;
 */
