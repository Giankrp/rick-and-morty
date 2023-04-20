import { useState } from "react"
import Validation from "./Validation"

const Form = ({login}) => {

    const [errors, setErrors] = useState({})
    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(Validation({
            ...userData,
            [event.target.name]: event.target.value
        }))

    }
    const handleSubmit = (event) => {
        event.preventDefault()
        login(userData)
    }
    return (
        <form onSubmit={handleSubmit}>
            <lablel htmlFor="email">Email: </lablel>
            <input type="text" name="email" value={userData.email}
                onChange={handleChange} />
            {errors.email && <p style={{ color: "red" }}>{errors.email} </p>}
            <lablel htmlFor="password">Password: </lablel>
            <input type="text" name="password" value={userData.password}
                onChange={handleChange} />
            {errors.password && <p style={{ color: "red" }}>{errors.password} </p>}

            <button>Submit</button>
        </form>

    )
}

export default Form
