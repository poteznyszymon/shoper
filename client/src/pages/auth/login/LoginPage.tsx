import { Link } from "react-router-dom";
import LoginForm from "./LoginForm";

const LoginPage = () => {
  return (
    <div className="p-5 pt-10 border rounded-2xl min-w-[26rem] flex flex-col space-y-8 shadow-md">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-3xl font-bold">Welcome back</h1>
        <p className="text-sm text-muted-foreground">Login to your account</p>
      </div>
      <LoginForm />
      <div className="text-sm text-muted-foreground justify-center flex items-center gap-1">
        <p>Don't have an account?</p>
        <Link to={"/register"}>
          <span className="font-semibold cursor-pointer hover:text-foreground">
            Register
          </span>
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
