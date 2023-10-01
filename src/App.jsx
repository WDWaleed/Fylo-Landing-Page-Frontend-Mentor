import { lazy, Suspense } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import StayProductive from "./components/StayProductive";
import Testimonials from "./components/Testimonials";
import SignUpForm from "./components/SignUpForm";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="text-white">
      <Header />
      <main className="bg-MainBack">
        <Hero />
        <Features />
        <StayProductive />
        <Testimonials />
        <SignUpForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
