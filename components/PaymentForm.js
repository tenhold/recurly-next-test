import dynamic from 'next/dynamic';
import { useRef } from 'react';
import { CardElement, useRecurly } from '@recurly/react-recurly';

// const CardElement = dynamic(() => {
//   return import('@recurly/react-recurly')
//     .then((mod) => mod.CardElement);
// }, { ssr: false });

const PaymentForm = () => {
  const formRef = useRef();
  const recurly = useRecurly();

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
      <CardElement />
      <button>Submit</button>
    </form>
  );
};

export default PaymentForm;
