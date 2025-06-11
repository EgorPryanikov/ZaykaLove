import Header from '../components/Header';
import Category from "../components/Category";
import Banner from "../components/Banner";

const Page = () => (
    <>
        <Header />
        <Banner className="mt-5 mb-14"></Banner>
        <Category className="mt-16 mb-[100px]" />
    </>
);

export default Page;