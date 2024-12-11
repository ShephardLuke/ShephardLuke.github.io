import Footer from "../template/global/footer"
import Header from "../template/global/header"

export default function Page() {
    return (
        <>
            <Header currentPage="Contact"/>
            <div className="main">
                <h1>Contact</h1>
                <p>Email: <a href="mailto:ShephardLuke@hotmail.com">ShephardLuke@hotmail.com</a></p>
            </div>
            <Footer/>
        </>
    )
}