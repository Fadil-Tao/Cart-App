import { Outlet } from 'react-router-dom';
import NavBar from '../Fragments/Nav/NavBar';
import { Provider } from 'react-redux';
import store from '../../store/store';
import Footer from './FooterLayout';

const RootLayout = () => {
    return (
        <>
            <Provider store={store}>
                <NavBar />
                <main className=' z-20'>
                    <Outlet />
                </main>
            </Provider>
            <Footer/>
        </>
    );
};

export default RootLayout;
