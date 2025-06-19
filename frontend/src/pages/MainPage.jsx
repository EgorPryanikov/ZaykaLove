import Header from '../components/Header';
import Category from "../components/Category";
import Banner from "../components/Banner";
import Deal from "../components/Deal";
import Popular from "../components/Popular";
import About from "../components/About";

const Page = () => (
    <>
        <Header />
        <Banner className="mt-5 mb-14"></Banner>
        <Category className="mt-16 mb-[100px]" />
        <Deal className="mt-[100px]"></Deal>
        <Popular className="mt-[100px]"></Popular>
        <About className="mt-[100px]"></About>

    </>
);

export default Page;