import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IksEEIeyWCAsiokNx4cAljYqvuMwRDKZNmdKyU99pPVT72oQkOyZAvihzLL7UWx2KL7t6toiZ6Gky9SHXALhi4v009AeNlnHW';

    const onToken = token => {
        console.log(token)
        alert('thank you')
    }

//   const onToken = token => {
//     axios({
//       url: '/payment',
//       method: 'post',
//       data: {
//         amount: priceForStripe,
//         token: token
//       }
//     })
//       .then(response => {
//         alert('Succesful Payment!');
//       })
//       .catch(error => {
//         console.log('Payment Error: ', error);
//         alert(
//           'There was an issue with your payment! Please make sure to use the provided credit card data'
//         );
//       });
//   };

  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;