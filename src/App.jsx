import Download from "./components/Download";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import Form from "./components/Form";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Download />
        <FAQ />
        <Form />
      </main>
      <Footer />
    </>
  );
}

export default App;
