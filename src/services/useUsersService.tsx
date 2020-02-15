import { useEffect, useState } from "react";
import { Service } from "../types/Service";
import { User } from "../types/User";

export interface Users {
    users: User[];
}

const useUsersService = () => {
    const [result, setResult] = useState<Service<Users>>({
        status: 'loading'
    });

    useEffect(() => {
        // fetch('http://dummy.restapiexample.com/api/v1/users')
        fetch('https://jsonplaceholder.typicode.com/users/')
            .then(response => response.json())
            .then(response => setResult({ status: 'loaded', payload: response }))
            .catch(error => setResult({ status: 'error', error }));
    }, []);

    return result;
};

export default useUsersService;