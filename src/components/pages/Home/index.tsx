import { Header } from "../../parts/Header";
import { Main } from "../../views/Main";
import { Footer } from "../../parts/Footer";

export const Home: React.FC = () => {
  return (
    <>
      <div className="contents">
        <Header />
        <Main />
      </div>
      <Footer />
    </>
  );
};
