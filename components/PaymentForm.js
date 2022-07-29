import { useRef } from 'react';

const PaymentForm = ({ cardElement }) => {
  recurly.configure(process.env.NEXT_PUBLIC_RECURLY_PUBLIC_KEY);
  const formRef = useRef();

  function handleSubmit(event) {
    event.preventDefault();
    recurly.token(formRef.current, (err, token) => {
      if (err) {
        console.error("ERROR:", err);
      } else {
        console.log("TOKEN:", token);
      }
    });
  }

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <input type="text" data-recurly="first_name" placeholder="First name" />
      <input type="text" data-recurly="last_name" placeholder="Last name" />

      <div id="recurly-elements">{cardElement}</div>
      <input type="hidden" name="recurly-token" data-recurly="token" />
      <button className='text-3xl text-indigo-300	font-bold underline'>Submit</button>
    </form>
  );
};

export default PaymentForm;
