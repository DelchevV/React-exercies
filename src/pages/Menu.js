import {useContext} from 'react'
import {AppContext} from '../App'


export const Menu = (props) => {
    const {username} = useContext(AppContext);
    return (
        <div>
            <h1>This is the Menu Page!</h1>
            <h1>Welcome, {username}!</h1>
        </div>

    )

}