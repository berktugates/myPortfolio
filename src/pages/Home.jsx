import Navbar from "../components/layouts/Navbar"
import Introduction from "../components/HomePage/Introduction"
import About from "../components/HomePage/About"
import Skills from "../components/HomePage/Skills"
import Works from "../components/HomePage/Works"
import Footer from "../components/layouts/Footer"

export default function Home() {
  return (
    <>
      <div className="flex flex-col mx-auto md:max-w-md lg:max-w-lg">
        <Navbar />
        <Introduction />
        <About />
        <Skills />
        <Works />
        <Footer />
      </div>
    </>
  );
}
