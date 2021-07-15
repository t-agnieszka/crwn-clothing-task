import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51JDYocCBokJx4DH5MqGkchc5hl063u2RD6eiIO0OpKD8c6rUoPF4b2uajtfAA4NIzrFbRSKnrzy8APJrpLRJfFIT00jxVz1dnz';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Successful');
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total bill is £${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
