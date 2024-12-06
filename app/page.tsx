import Footer from "./website-shared/footer";
import Header from "./website-shared/header";

export default function Page() {
  return (
    <>
      <Header currentPage="Home"/>
      <div className="main">
        <h1>Home</h1>
        <p>Welcome to my website! Here is where I keep details of all of my projects.</p>
      </div>
      <Footer/>
    </>
  );
}
