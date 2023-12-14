import SmallBlock from '../../Elements/SmallBlock';
import { FaRupiahSign } from 'react-icons/fa6';
import { TbDiscountCheckFilled } from 'react-icons/tb';
import { CiDeliveryTruck } from 'react-icons/ci';

const SmallBlocks = () => {
    return (
        <div className='flex flex-col  lg:flex-row  items-center justify-center lg:shadow-[0_3px_10px_rgb(0,0,0,0.2)] lg:h-24 w-full  '>
            <SmallBlock
                title='Free Shipping'
                icons={<CiDeliveryTruck size={50} color='rgb(6 182 212)' />}
                description='We Provide Excellent Shipping Service'
            />
            <SmallBlock
                title='Original'
                icons={<TbDiscountCheckFilled size={40} color='rgb(6 182 212)' />}
                description='We Put Originality Above Everything'
            />
        </div>
    );
};

export default SmallBlocks;
