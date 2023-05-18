// HOME PAGE
import Nav from "../components/nav/nav.js";
import Footer from "../components/footer/footer.js";

export default function Home() {
  return (
    <main className="flex-row">
      <Nav />
      <h1 className="text-4xl lg:text-6xl">MAIN CONTENT</h1>
      <Footer />
    </main>
  );
}
