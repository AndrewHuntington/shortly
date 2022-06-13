import type { NextPage } from "next";
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className="App__container px-6">
      <Header />
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </div>
  );
};

export default Home;
