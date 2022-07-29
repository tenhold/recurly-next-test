import PaymentForm from '../components/PaymentForm';
import dynamic from 'next/dynamic';
import { Elements } from '@recurly/react-recurly';

const RecurlyProvider = dynamic(() => {
  return import('@recurly/react-recurly')
    .then((mod) => mod.RecurlyProvider);
}, { ssr: false });

export default function Home() {
  return (
    <div>
      <RecurlyProvider publicKey={process.env.NEXT_PUBLIC_RECURLY_PUBLIC_KEY}>
        <Elements>
          <PaymentForm />
        </Elements>
      </RecurlyProvider>
      {/* <h1 className="text-3xl text-green-300 font-bold underline">
        Hello world!
      </h1> */}
    </div >


  );
}
