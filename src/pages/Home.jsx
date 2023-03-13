import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
function Home() {
    return (
        <div className="container main-layout">
            <Header className="layout-header" />
            <Content className="latout-content" />
            <Footer className="layout-footer" />
        </div>
    );
}
export default Home;