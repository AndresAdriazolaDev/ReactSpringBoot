import { useState } from "react";

const initialUserForm = {
  username: "",
  password: "",
  email: "",
};
export const UserForm = () => {
  const [userForm, setUserForm] = useState(initialUserForm);

  const { username, password, email } = userForm;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setUserForm({
      ...userForm,
      [name]: value,
    });
    return (
      <form>
        <input
          type="username"
          className="form-control my-3 w-75"
          name="username"
          placeholder="username"
          value={username}
        />
        <input
          type="password"
          className="form-control my-3 w-75"
          name="password"
          placeholder="password"
          value={password}
          onChange={onInputChange}
        />
        <input
          type="email"
          className="form-control my-3 w-75"
          name="email"
          placeholder="email"
          value={email}
          onChange={onInputChange}
        />
        <button className="btn btn-primary w-75" type="submit">
          <h5>Register</h5>
        </button>
      </form>
    );
  };
};
