import { useState, useContext } from "react";
import {AppContext} from './App'

export const ChangeProfile = (props) => {
    const {username, setUsername} = useContext(AppContext);
    const [newUsername, setNewUsername] = useState('');

    const serveName = (event) => {
        setNewUsername(event.target.value)
    }

    return (
        <div>
            <input onChange={serveName}></input>
            <button onClick={() => {
                setUsername(newUsername)
            }}>Update</button>
        </div>
    )
};