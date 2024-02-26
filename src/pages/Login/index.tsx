import Header from "../../components/Header";
import { Form } from "react-router-dom";

const Login = () => {
  return (
    <main className="flex flex-col items-center">
      <Header />
      <h1 className="text-3xl mb-10">Login</h1>
      <Form className="grid grid-cols-1 gap-2" method="post">
        <input
          className="rounded-sm p-2"
          placeholder="Username"
          type="text"
          autoComplete="username"
        />
        <input
          className="rounded-sm p-2"
          placeholder="Password"
          type="password"
          autoComplete="current-password"
        />
        <button type="submit">Login</button>
      </Form>
    </main>
  );
};

export default Login;
