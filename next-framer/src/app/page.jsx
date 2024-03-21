import About from "@/components/About";
import Hero from "@/components/Hero";
import Portfolio from "@/components/portfolio";

const Home = () => {
  return (
    <main className="min-h-[300dvh] bg-slate-200">
      <Hero />
      <About />
      <Portfolio />
    </main>
  );
};

export default Home;
