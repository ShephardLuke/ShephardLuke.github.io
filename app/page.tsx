import Footer from "./template/global/footer";
import Header from "./template/global/header";

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
