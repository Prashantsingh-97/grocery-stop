import { useState } from "react";
import Input from "./Input.js";
import Button from "./Button.js";
import { Link } from "react-router-dom";

export default function Cart({ cart, onProductDelete, onProductAdd }) {
  const totalPrice = cart.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  const [email, setEmail] = useState("");

  function handleFormSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="cart-layout">
      <div>
        <h1>Your Cart</h1>
        {cart.length === 0 && (
          <>
            <p>You have not added any product to your cart yet.</p>
            <Link to="/products" className="btn btn-default">
              Add products !!
            </Link>
          </>
        )}
        {cart.length > 0 && (
          <>
            <table className="table table-cart">
              <thead>
                <tr>
                  <th width="25%" className="th-product">
                    Product
                  </th>
                  <th width="20%">Unit price</th>
                  <th width="10%">Quanity</th>
                  <th width="25%">Total</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <img
                          src={product.image}
                          width="30"
                          height="30"
                          alt=""
                        />{" "}
                        {product.name}
                      </td>
                      <td>${product.price}</td>
                      <td>
                        {product.quantity > 0 && (
                          <Button
                            outline
                            onClick={() => onProductDelete(product.id)}
                            className="cart-product-delete"
                          >
                            -
                          </Button>
                        )}
                        {product.quantity}
                        <Button
                          outline
                          onClick={() => onProductAdd(product)}
                          className="cart-product-add"
                        >
                          +
                        </Button>
                      </td>
                      <td>
                        <strong>${product.price * product.quantity}</strong>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2"></th>
                  <th className="cart-highlight">Total</th>
                  <th className="cart-highlight">${totalPrice}</th>
                </tr>
              </tfoot>
            </table>
            <form className="pay-form" onSubmit={handleFormSubmit}>
              <p>
                Enter your email and then click on pay and your products will be
                delivered to you on the same day!
                <br />
              </p>
              <Input
                placeholder="Email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
                type="email"
                required
              />
              <Button type="submit">Pay</Button>
              <p>
                Use any <em>xyz@madeup</em> email !!
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
