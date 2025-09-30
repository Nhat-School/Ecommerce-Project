import axios from "axios";
import { useState, useEffect } from "react";
import { PaymentSummary } from "./PaymentSummary";
import { CheckoutHeader } from "./CheckoutHeader";
import { OrderSummary } from "./OrderSummary";
import "./CheckoutPage.css";

export function CheckoutPage({ cart, loadCart }) {
  const [deliveryOption, setDeliveryOption] = useState([]);
  const [paymentSummary, setPaymentSummary] = useState([]);
  useEffect(() => {
    const fetchCheckoutData = async () => {
      const response = await axios.get("/api/delivery-options?expand=estimatedDeliveryTime");
      setDeliveryOption(response.data);
      const paymentResponse = await axios.get("/api/payment-summary");
      setPaymentSummary(paymentResponse.data);
    };
    fetchCheckoutData();
  }, [cart]);
  return (
    <>
      <title>Checkout</title>
      <link rel="icon" type="image/svg+xml" href="/vite.svg" />

      <CheckoutHeader />

      <div className="checkout-page">
        <div className="page-title">Review your order</div>

        <div className="checkout-grid">
          <OrderSummary cart={cart} deliveryOption={deliveryOption} loadCart={loadCart} />
          <PaymentSummary paymentSummary={paymentSummary} />
        </div>
      </div>
    </>
  );
}
