import { useState } from "react";
import { Service } from "../types/Service";
import { User } from "../types/User";

const UserService = () => {
    const [result, setResult] = useState<Service<User>>({
        status: 'init'
    });

    const deleteUser = (id: number) => {
        setResult({ status: 'loading' });

        return new Promise((resolve, reject) => {
            fetch("https://jsonplaceholder.typicode.com/users/" + id, {
                method: 'DELETE',
            })
                .then(response => response.json())
                .then(response => {
                    setResult({ status: 'loaded', payload: response });
                    resolve(response)
                })
                .catch(error => {
                    setResult({ status: 'error', error })
                    reject(error);
                });
        })
    };

    const updateUser = (user: User) => {
        setResult({ status: 'loading' });

        const headers = new Headers();
        headers.append('Content-Type', 'application/json; charset=utf-8');

        return new Promise((resolve, reject) => {
            fetch("https://jsonplaceholder.typicode.com/users/" + user.id, {
                method: 'PUT',
                body: JSON.stringify(user),
                headers: headers
            })
                .then(response => response.json())
                .then(response => {
                    setResult({ status: 'loaded', payload: response });
                    resolve(response)
                })
                .catch(error => {
                    setResult({ status: 'error', error })
                    reject(error);
                });
        })
    };

    const getUser = (id: number) => {
        console.log(id);
        setResult({ status: 'loading' });

        return new Promise((resolve, reject) => {
            fetch("https://jsonplaceholder.typicode.com/users/" + id)
                .then(response => response.json())
                .then(response => setResult({ status: 'loaded', payload: response }))
                .catch(error => setResult({ status: 'error', error }));
        })
    };

    return {
        result,
        getUser,
        updateUser,
        deleteUser
    };
};

export default UserService;