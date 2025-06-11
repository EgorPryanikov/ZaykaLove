import Header from '../components/Header';
import Category from "../components/Category";
import Deal from "../components/Deal";

const Page = () => (
    <>
        <Header />
        <Deal className="mt-5 mb-14"></Deal>
        <Category className="mt-16 mb-[100px]" />
    </>
);

export default Page;