import NavLayout from '../Components/Layouts/RootLayout';
import Poster from '../Components/Fragments/homePage/Poster';
import SmallBlocks from '../Components/Fragments/homePage/SmallBlocks';
import ProductContainer from '../Components/Fragments/homePage/ProductRange';
import BrandContainer from '../Components/Fragments/homePage/BrandContainer';
import ContactsContainer from '../Components/Fragments/homePage/ContactsContainer';
import Footer from '../Components/Layouts/FooterLayout';
const HomePage = () => {
    return (
        <div>
            <Poster />
            <SmallBlocks/>
            <ProductContainer/>
            <BrandContainer/>
            <ContactsContainer/>
        </div>
    );
};

export default HomePage;
