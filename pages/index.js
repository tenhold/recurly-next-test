import dynamic from 'next/dynamic';

export default function Home() {
  const PaymentForm = dynamic(() => import('../components/PaymentForm'));
  const CardElement = dynamic(() => import('../components/CardElement'));

  return (
    <div>
      <PaymentForm
        cardElement={<CardElement />}
      />
    </div >


  );
}
