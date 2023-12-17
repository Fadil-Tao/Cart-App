import { FaCartPlus } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
const Card = (props) => {
    const {
        img = 'https://placekitten.com/g/200/300',
        name = 'Producst Name',
        brand = 'Brand Name',
        price = 30,
        category = 'shoes',
        action,
        link,
        state
    } = props;
    return (
        <div className='flex justify-center items-center mt-10 mr-1'>
            <div className='w-[268px] h-[320px]  px-2 py-4 rounded-xl shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] '>
                <div className='w-full  h-44'>
                    <img
                        src={`${img}`}
                        alt='image'
                        className='object-fit rounded-[20px] w-full h-full '
                    />
                </div>
                <div className='flex   justify-between mt-4'>
                    <div className=' h-8 flex w-56 '>
                        <p className='font-serif font-semibold text-sm'><Link to={`${link}`} state={{data : state}}>{name}</Link></p>
                    </div>
                    <div className='flex items-center'>
                        <button
                            className=' rounded-full h-8 w-8 text-center flex justify-center items-center bg-black  text-white'
                            onClick={(event)=>action(event)}
                        >
                            <FaCartPlus />
                        </button>
                    </div>
                </div>
                <div>
                    <p className=' text-slate-700'>{category}</p>
                    <p className=' text-slate-500'>{brand}</p>
                    <p>$ {price}</p>
                </div>
            </div>
        </div>
    );
};

export default Card;
