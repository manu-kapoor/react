import { useEffect, useState } from "react";
import { Service } from "../types/Service";
import { User } from "../types/User";

const useUserService = (id: number) => {
    const [result, setResult] = useState<Service<User>>({
        status: 'loading'
    });

    useEffect(() => {
        // fetch("http://dummy.restapiexample.com/api/v1/user/" + id)
        fetch("https://jsonplaceholder.typicode.com/users/" + id)
            .then(response => response.json())
            .then(response => setResult({ status: 'loaded', payload: response }))
            .catch(error => setResult({ status: 'error', error }));
    }, []);

    return result;
};

export default useUserService;