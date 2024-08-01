import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../store/actions/user.actions'
import { showErrorMsg, showSuccessMsg } from '../services/event-bus.service'
{/* <img class="N3KcAH7" src="https://fiverr-res.cloudinary.com/npm-assets/layout-service/standard.0638957.png" alt="setup illustrastion banner"></img> */}

export function LoginModal({ onClose }) {
    const [credentials, setCredentials] = useState({ username: 'elad', password: '1234' })
    const dispatch = useDispatch()

    const handleChange = ({ target }) => {
        const { name, value } = target
        setCredentials({ ...credentials, [name]: value })
    }



    async function onLogin(ev = null){
        if (ev) ev.preventDefault()
        try {
            onClose()
            await login(credentials)
        } catch (err) {
            showErrorMsg('Login failed')
        }

    }

    return (
        <>
            <div className="modal-overlay" onClick={onClose}></div>
            <div className="login-modal">
                <h1>Sign in to Fiverr</h1>
                <form className="login-form" onSubmit={onLogin}>
                    <input
                        type="text"
                        name="username"
                        placeholder="Username"
                        value={credentials.username}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                    />
                    <button className="btn submit-login" type="submit">Login</button>
                </form>
            </div>
        </>
    )
}
