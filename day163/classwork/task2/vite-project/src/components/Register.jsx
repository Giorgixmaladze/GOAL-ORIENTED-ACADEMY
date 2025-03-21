import useForm from "../hooks/UseForm";

const Register = () => {
  const [info, setInfo] = useForm(null);

  return (
    <>
      <form onSubmit={setInfo}>
        <input
          type="email"
          placeholder="Enter your email"
          required
          name="email"
        />
        <input
          type="password"
          placeholder="Enter your password"
          required
          name="password"
        />
        <button>Submit</button>
      </form>

      <div>
        {info ? (
          <>
            <h2>{info.email}</h2>
            <p>{info.password}</p>
          </>
        ) : (
          <p>Enter Info</p>
        )}
      </div>
    </>
  );
};

export default Register;
