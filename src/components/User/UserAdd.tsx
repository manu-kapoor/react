import React, { useState, FormEventHandler } from "react";
import { User } from "../../types/User";
import UserForm from "./UserForm";
import UserService from "../../services/UserService";
import { toast } from "react-toastify";
import { Redirect } from "react-router";
import { RouteComponentProps } from 'react-router-dom';

function UserAdd(props: RouteComponentProps) {
    const [user, setUser] = useState<User>({
        id: 0,
        name: "",
        email: "",
        phone: 0
    });

    const { result, createUser } = UserService();

    function onChange(event: React.ChangeEvent<HTMLInputElement>) {
        let updatedUser: User = { ...user, [event.target.name]: event.target.value };
        setUser(updatedUser);
    };

    function handleSubmit(event: React.FormEvent<FormEventHandler>) {
        event.preventDefault();
        createUser(user).then((res: User) => {
            toast.success(res.name + " added with ID: " + res.id);
            props.history.push('/');
        })
    };

    return (
        <UserForm user={user} onChange={onChange} onSubmit={handleSubmit} existingUser={false} />
    );
};

export default UserAdd;
