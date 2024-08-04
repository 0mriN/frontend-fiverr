import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { signup } from '../store/actions/user.actions'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'

export function SignUpModal({ onClose }) {
    const [credentials, setCredentials] = useState({ username: '', password: '', email: '' })
    const dispatch = useDispatch()

    const handleChange = ({ target }) => {
        const { name, value } = target
        setCredentials({ ...credentials, [name]: value })
    }

    async function onSignUp(ev) {
        ev.preventDefault()
        try {
            await dispatch(signup(credentials))
            showSuccessMsg('Sign up successful')
            onClose()
        } catch (err) {
            showErrorMsg('Sign up failed')
        }
    }

    return (
        <div className="modal">
            <button onClick={onClose}>Close</button>
            <form onSubmit={onSignUp}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={credentials.username}
                    onChange={handleChange}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={credentials.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={credentials.password}
                    onChange={handleChange}
                />
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}
