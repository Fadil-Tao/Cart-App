import { FaRegTrashCan } from 'react-icons/fa6';
import { useDispatch } from 'react-redux';


const CartCard = (props) => {
    const {
        name = 'Nike Air Jordan ',
        price = '$ 200',
        qty = 1,
        image = 'http://placekitten.com/g/200/300',
        action,
        increase,
        decrease,
    } = props;
    return (
        <div className='flex w-[450px] shadow-md p-2 resize-none border-2 border-cyan-500 mb-2'>
            <div className='w-[150px] h-[120px] '>
                <img src={`${image}`} alt='image' className='w-full h-full rounded-md' />
            </div>
            <div className='grid w-[80%] grid-cols-4 resize-none items-center justify-start'>
                <div className='ml-6'>
                    <p className='text-md font-semibold'>{`${name}`}</p>
                </div>
                <div className='ml-6'>
                    <p >{`${price}`}</p>
                </div>
                <div className='ml-6 flex '>
                    <button className='font-semibold' onClick={(e) => decrease(e)}>-</button>
                    <p className='mx-3 text-xl'>{`${qty}`}</p>
                    <button className='font-semibold' onClick={(e) => increase(e)}>+</button>
                </div>
                
                <button  className='ml-6' onClick={(event)=> action(event)}>
                    <FaRegTrashCan />
                </button>
            </div>
        </div>
    );
};

export default CartCard;
