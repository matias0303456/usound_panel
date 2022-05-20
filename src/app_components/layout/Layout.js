import Footer from "./components/Footer";
import Header from "./components/Header";
import '../../styles/layout/layout.css'

export default function Layout({ children }) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
            <Footer />
        </>
    )
}