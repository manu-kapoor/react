import React, { useEffect, useState } from "react";
import UserService from "../../services/UserService";
import { Link } from 'react-router-dom';
import UserForm from "./UserForm";
import { toast } from 'react-toastify';
import useUserService from "../../services/useUserService";

function UserView(props) {

    const userService = useUserService(props.match.params.id);
    const { result, getUser, updateUser, deleteUser } = UserService();

    const [user, setUser] = useState({
        id: "",
        name: "",
        email: "",
        phone: ""
    });

    /* useEffect(() => {
        getUser(props.match.params.id).then((res) => {
            console.log(res);
            setUser(res.payload);
        });
    }, []); */
    useEffect(() => {
        if (userService.status === 'loaded') {
            setUser(userService.payload);
        }
    }, [userService.status, userService.payload]);

    function onChange({ target }) {
        const updatedUser = { ...user, [target.name]: target.value };
        setUser(updatedUser);
    }

    function handleSubmit(event) {
        event.preventDefault();
        updateUser(user).then(() => {
            toast.success('User successfully updated.');
            props.history.push("/")
        });
    }

    function handleDelete(event) {
        console.log(event);
        deleteUser(user.id).then(() => {
            toast.success('User successfully deleted.');
            props.history.push("/")
        });
    }

    return (
        <>
            <Link to={"/users/add"} className="btn btn-primary">Add New User</Link>
            {userService.status === 'loading' && <div>Loading...</div>}
            {userService.status === 'loaded' && <UserForm user={user} onChange={onChange} onSubmit={handleSubmit} onDelete={handleDelete} existingUser={true} />}
            {userService.status === 'error' && (<div>Something went wrong.</div>)}
            {/* {result.status === 'loading' && <div>Loading...</div>}
            {result.status === 'loaded' && <UserForm user={user} onChange={onChange} onSubmit={handleSubmit} onDelete={handleDelete} />}
            {result.status === 'error' && (<div>Something went wrong.</div>)} */}
        </>
    );
}

export default UserView;