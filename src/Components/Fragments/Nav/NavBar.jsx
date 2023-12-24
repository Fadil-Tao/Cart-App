import { useState } from 'react';
import NavButton from '../../Elements/Buttons/NavButton';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';
import { GiMorgueFeet } from "react-icons/gi";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const cartProducts = useSelector((state) => state.cart);

    return (
        <nav className='flex-col  md:flex-row flex items-center justify-center bg-transaparent py-4 md:px-40 px-20 text-xl  w-full shadow-[0_3px_10px_rgb(0,0,0,0.2)] '>
            <div className='flex w-[80%] lg:ml-4 '>
                <div className='flex rounded-lg justify-between lg:justify-start items-center mr-1  '>
                    <div className='flex items-center justify-start  '>
                        <span>
                            <GiMorgueFeet />
                        </span>
                        <h1 className=' font-serif whitespace-nowrap overflow-hidden text-xl '>
                            Rifqi FootWear
                        </h1>
                    </div>
                </div>
                <div className='md:hidden'>
                    <NavButton
                        onClick={() => {
                            setIsOpen(!isOpen);
                            console.log(isOpen);
                        }}
                    >
                        {isOpen ? <RxCross1 /> : <RxHamburgerMenu />}
                    </NavButton>
                </div>
            </div>
            <div
                className={` ${
                    isOpen ? 'flex' : 'hidden'
                } lg:flex items-center  justify-center w-full`}
            >
                <ul className={`md:flex py-2 `}>
                    <li className=''>
                        <NavButton bgColor='bg-transparent' fontColor='text-slate-800'>
                            <Link to='/home'>Home</Link>
                        </NavButton>
                    </li>
                    <li className=''>
                        <NavButton bgColor='bg-transparent' fontColor='text-slate-800'>
                            <Link to='/collection'>Collection</Link>
                        </NavButton>
                    </li>
                    <li className=''>
                        <NavButton bgColor='bg-transparent' fontColor='text-slate-800'>
                            <Link to='/mycart'> My cart </Link>
                        </NavButton>
                    </li>
                    <li className='flex justify-center items-center'>
                        <span className='flex justify-center items-center'>
                            {' '}
                            <AiOutlineShoppingCart />{' '}
                            {cartProducts.reduce((n, { qty }) => n + qty, 0)}
                        </span>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
