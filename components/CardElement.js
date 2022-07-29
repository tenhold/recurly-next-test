import React from 'react';

export default function CardElement() {
  const elements = recurly.Elements();
  const cardElement = elements.CardElement();
  cardElement.attach('#recurly-elements');

  return (
    <div>
    </div>
  );
}
