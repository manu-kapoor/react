import React from "react";
import { Link } from 'react-router-dom';

function UserList(props) {

    return (
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {props.users && props.users.map(user => {
                    return (
                        < tr key={user.id} >
                            <td>
                                <Link to={"/user/" + user.id}>{user.id}</Link>
                            </td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.phone || "-"}</td>
                        </tr>
                    );
                })
                }
            </tbody>
        </table>
    );
}

export default UserList;
