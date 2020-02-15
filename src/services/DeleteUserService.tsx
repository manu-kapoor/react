import { useEffect, useState } from "react";
import { Service } from "../types/Service";
import { User } from "../types/User";

const DeleteUserService = (id: number) => {
    const [result, setResult] = useState<Service<User>>({
        status: 'loading'
    });

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + id, {
            method: 'DELETE',
        })
            .then(response => response.json())
            .then(response => setResult({ status: 'loaded', payload: response }))
            .catch(error => setResult({ status: 'error', error }));
    }, []);

    return result;
};

export default DeleteUserService;