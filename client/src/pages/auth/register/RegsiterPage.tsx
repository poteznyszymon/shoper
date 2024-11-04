import { Link } from "react-router-dom";
import RegisterForm from "./RegisterForm";

const RegisterPage = () => {
  return (
    <div className="p-5 pt-10 border rounded-2xl min-w-[32rem] flex flex-col space-y-8 shadow-md">
      <div className="flex flex-col items-center gap-1">
        <h1 className="text-3xl font-bold">Create an account</h1>
        <p className="text-sm text-muted-foreground">Enter your details</p>
      </div>
      <RegisterForm />
      <div className="text-sm text-muted-foreground justify-center flex items-center gap-1">
        <p>Already have an account?</p>
        <Link to={"/login"}>
          <span className="font-semibold cursor-pointer hover:text-foreground">
            Login
          </span>
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
