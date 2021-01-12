import React, {useState} from 'react'

export const AuthPage = () => {
    const [form, setForm] = useState({
        email: '', password: ''
    })
}

const changeHandler = event => {
    setForm({ ...form, [event.target.name]: event.target.value})
}

export const AuthPage = () => {
    return (
        <div className="row">
              <div className="col s6 offset-s3">
                  <h1>Kek</h1>
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                    <span className="card-title">Card Title</span>
                    </div>
                        <div className="input-field">
                        <input
                         placeholder="Enter email"
                         id="email"
                         type="text"
                         name="email"
                         onChange={changeHandler}
                         />
                        <label htmlFor="email">Email</label>
                        </div>

                        <div className="input-field">
                        <input
                         placeholder="Enter password"
                         id="password"
                         type="password"
                         name="password"
                         onChange={changeHandler}
                         />
                        <label htmlFor="password">Password</label>
                        </div>
                    <div className="card-action">
                    <button className="btn yellow darken-4" style={{ margin: "10px" }}>sign-in</button>
                        <button className="btn gray lighten-1 black-text">sign-up</button>
                    </div>
                </div>
              </div>
        </div>
    )
}