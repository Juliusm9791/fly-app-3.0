// HOME PAGE
import Nav from "../components/nav/nav.js";
import Footer from "../components/footer/footer.js";

export default function Home() {
  return (
    <>
      <Nav />
      <h1 className="text-4xl lg:text-6xl">Hello, Home!</h1>
      <Footer />
    </>
  );
}
