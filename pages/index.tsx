import type { NextPage } from "next";
import Header from "../components/Header";
import Hero from "../components/Hero";

const Home: NextPage = () => {
  return (
    <div className="App__container">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default Home;
