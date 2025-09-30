import axios from "axios";
import { useState, useEffect } from "react";
import { PaymentSummary } from "./PaymentSummary";
import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummary } from "./OrderSummary";
import "./CheckoutPage.css";

export function CheckoutPage({ cart }) {
  const [deliveryOption, setDeliveryOption] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState([]);
  useEffect(() => {
    const fetchCheckoutData = async () => {
      const response = await axios("/api/delivery-options?expand=estimatedDeliveryTime");
      setDeliveryOption(response.data);
      const paymentResponse = await axios("/api/payment-summary");
      setPaymentSummary(paymentResponse.data);
    };
    fetchCheckoutData();
  }, []);
  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOption={deliveryOption} />
          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}
