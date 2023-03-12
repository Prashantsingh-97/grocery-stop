export default function About() {
  return (
    <div className="about-layout">
      <div>
        <h1>About Us</h1>
        <p>
          We started operations in 2023. We guarantee fresh produce.
          <br />
          Save time by shopping on our app and we'll deliver the products right
          to your home. <br />
          <em>We use Stripe to process your payment.</em>
        </p>
      </div>
      <img
        src="https://images.unsplash.com/photo-1584799580661-53b7c6b99430?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
        height="310"
        width="235"
        className="rounded"
        alt=""
      />
    </div>
  );
}
