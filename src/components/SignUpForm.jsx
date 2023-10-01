import { useState } from "react";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [correctEmail, setCorrectEmail] = useState(true);
  const validateEmail = (e) => {
    e.preventDefault();
    const emailRegex = /\S+@\S+\.\S+/;
    const isValid = emailRegex.test(email);
    setCorrectEmail(isValid);
  };
  return (
    <article id="sign-up" className="mx-auto w-[90%] max-w-[1000px] bg-IntroBack translate-y-1/2 rounded-lg py-8 px-10">
      <h3 className="text-center text-2xl  my-4 font-bold custom:text-3xl">
        Get early access today
      </h3>
      <p className="mx-auto my-4 max-w-[750px] text-center text-Cyan">
        It only takes a minute to sign up and our free starter tier is extremely
        generous. If you have any questions, our support team would be happy to
        help you.
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="mx-auto my-6 mt-10 flex w-full max-w-[850px] flex-wrap justify-center gap-6"
      >
        <input
          type="email"
          placeholder="email@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setCorrectEmail(true);
          }}
          className="grow rounded-full px-8 py-4 text-IntroBack"
        />
        <button
          onClick={(e) => validateEmail(e)}
          className="w-[250px] rounded-full px-8 py-4 font-bold"
        >
          Get Started For Free
        </button>
      </form>
      <p
        className={`${
          correctEmail ? "hidden" : "block"
        } mx-auto -mt-4 max-w-[850px] pl-4 text-LightRed`}
      >
        Please enter a valid email address
      </p>
    </article>
  );
};
export default SignUpForm;
