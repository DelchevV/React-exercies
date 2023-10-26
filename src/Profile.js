import { ChangeProfile } from "./ChangeProfile"
import {useContext} from 'react'
import {AppContext} from './App'

export const Profile = (props) => {
    const {username} = useContext(AppContext);
    return <div>
        <h1>Profile, user is: {username} <ChangeProfile/></h1>
    </div>
}