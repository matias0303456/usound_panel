import Footer from "./components/Footer";
import Header from "./components/Header";
import Nav from './components/Nav'
import '../../styles/layout/layout.css'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                <Nav />
                <section className="mainContent">
                    {children}
                </section>
            </main>
            <Footer />
        </>
    )
}