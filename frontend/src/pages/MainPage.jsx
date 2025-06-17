import Header from '../components/Header';
import Category from "../components/Category";
import Banner from "../components/Banner";
import Deal from "../components/Deal";

const Page = () => (
    <>
        <Header />
        <Banner className="mt-5 mb-14"></Banner>
        <Category className="mt-16 mb-[100px]" />
        <Deal className="my-[100px]"></Deal>
    </>
);

export default Page;