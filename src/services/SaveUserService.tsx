import { useEffect, useState } from "react";
import { Service } from "../types/Service";
import { User } from "../types/User";

const SaveUserService = (user: User) => {
    const [result, setResult] = useState<Service<User>>({
        status: 'loading'
    });

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/" + user.id, {
            method: 'PUT',
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(response => setResult({ status: 'loaded', payload: response }))
            .catch(error => setResult({ status: 'error', error }));
    }, []);

    return result;
};

export default SaveUserService;