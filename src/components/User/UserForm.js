import React from "react";
import TextInput from "../../common/TextInput";

function UserForm(props) {
    return (
        <form onSubmit={props.onSubmit}>
            {props.existingUser && <TextInput id="id"
                name="id"
                label="ID"
                onChange={props.onChange}
                value={props.user.id}
                readOnly={true} />}
            <TextInput id="name"
                name="name"
                label="Name"
                onChange={props.onChange}
                value={props.user.name} />
            <TextInput id="email"
                name="email"
                label="Email"
                onChange={props.onChange}
                value={props.user.email} />
            <TextInput id="phone"
                name="phone"
                label="Phone"
                onChange={props.onChange}
                value={props.user.phone} />
            <input type="submit" value="Save" className="btn btn-primary" />
            {props.existingUser && <input type="button" value="Delete" className="btn btn-danger" onClick={props.onDelete} />}
        </form>
    )
}

export default UserForm;
