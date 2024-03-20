import AboutPage from "@/components/About";
import Hero from "@/components/Hero";

const Home = () => {
  return (
    <main className="min-h-[300dvh] bg-slate-200">
      <Hero />
      <AboutPage />
    </main>
  );
};

export default Home;
