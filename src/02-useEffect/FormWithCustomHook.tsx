import { useForm } from '../hooks/useForm';


export const FormWithCustomHook = () => {

    const { username, email, password, onChange, onReset } = useForm({
        username: '',
        email: '',
        password: ''
    });

    return (
        <>
            <h1>Form with custom hook</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                value={ username }
                onChange={ ({ target }) => onChange(target.value, 'username') }
            />

            <input
                type="email"
                className="form-control mt-2"
                placeholder="Email"
                name="email"
                value={ email }
                onChange={ ({ target }) => onChange(target.value, 'email') }
            />

            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={ password }
                onChange={ ({ target }) => onChange(target.value, 'password') }
            />

            <button
                className="btn btn-primary mt-2"
                onClick={ onReset }
            >Reset</button>

        </>
    );

}
