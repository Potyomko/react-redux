import { useDispatch, useSelector } from "react-redux"
import { selectUserName } from "../../redux/auth/selectors"
import { logout } from "../../redux/auth/operations"

export const UserMenu = () => {
    const userName = useSelector(selectUserName)
    const dispath = useDispatch()
    const handleLogOut = () => {
        dispath(logout())
    }
    return (
        <>
            <h1>Hello, { userName }🩷</h1>
            <button onClick={handleLogOut} type="button">Logout</button>
        </>
    )
}