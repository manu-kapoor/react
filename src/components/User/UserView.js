import React, { useEffect, useState } from "react";
import UserList from "./UserList";
import { User } from "../../types/User";
import useUserService from "../../services/useUserService";
import SaveUserService from "../../services/SaveUserService";
import DeleteUserService from "../../services/DeleteUserService";
import { Link } from 'react-router-dom';
import UserForm from "./UserForm";

function UserView(props) {

    const userService = useUserService(props.match.params.id);
    const deletedUser = null;

    const [user, setUser] = useState({
        id: "",
        name: "",
        email: "",
        phone: ""
    });

    useEffect(() => {
        if (userService.status === 'loaded') {
            setUser(userService.payload);
        }
    }, [userService.status]);

    function onChange({ target }) {
        const updatedUser = { ...user, [target.name]: target.value };
        setUser(updatedUser);
    }

    function onSubmit(event) {
        event.preventDefault();
        const saveUser = SaveUserService(user);
    }

    function onDelete(event) {
        console.log(event);
        deletedUser = DeleteUserService(user.id);
    }

    return (
        <>
            <Link to={"/add"} className="btn btn-primary">Add New User</Link>
            <UserForm user={user} onChange={onChange} onSubmit={onSubmit} onDelete={onDelete} />
            {deletedUser && deletedUser.status === 'loaded' && console.log(deletedUser.payload)}
            {/* {userService.status === 'loading' && <div>Loading...</div>} */}
            {/* {userService.status === 'loaded' && <UserForm user={user} onChange={onChange} />} */}
            {/* {userService.status === 'error' && (<div>Something went wrong.</div>)} */}
        </>
    );
}

export default UserView;