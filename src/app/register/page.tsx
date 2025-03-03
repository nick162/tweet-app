import RegisterForm from "./_components/RegisterForm";

const Register = () => {
  return (
    <div className="flex min-h-svh flex-col items-center justify-center bg-muted p-6 md:p-10">
      <div className="w-full max-w-sm md:max-w-3xl">
        <h1>Register Page</h1>
        {/* <LoginForm /> */}
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
