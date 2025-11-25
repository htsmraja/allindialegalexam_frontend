import Footer from "../common/Footer";
import Header from "../common/Header";




const CommonLayout = ({ children, title, parent, subTitle }) => {
    return (
        <>
            <div id="wrapper">
                <Header />
                <main id="main">
                    <>{children}</>
                </main>
                <Footer />
            </div>
        </>
    );
};

export default CommonLayout;
