import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-layout">
      <div>
        <h1>Online shopping simplified</h1>
        <p>
          Order your groceries from <em>Grocers Stop</em> with our easy to use
          app, and get your products delivered straight to your doorstep.
        </p>
        <Link to="/products" className="btn btn-default">
          Start Shopping
        </Link>
      </div>
      <img
        src="https://images.unsplash.com/photo-1516594798947-e65505dbb29d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        width="350"
        height="240"
        className="rounded home-image-1"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1579113800032-c38bd7635818?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
        width="240"
        height="401"
        className="rounded home-image-2"
        alt=""
      />
      <img
        src="https://images.unsplash.com/photo-1570913196376-dacb677ef459?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        width="350"
        height="240"
        className="rounded home-image-3"
        alt=""
      />
    </div>
  );
}
