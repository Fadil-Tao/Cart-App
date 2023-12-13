
const SmallBlock = (props) => {
    const { title = 'Lorem Tittle', description, icons   } = props;
    return (
        <div className='px-12  w-full lg:w-[27%] text-center mt-2 flex justify-start  item-center resize-none ml-1 border-red-200 border-1'>
            <div className='flex items-center justify-center pl-2 '>
                <div className='flex items-center  justify-center '>
                    {icons}</div>
            </div>
            <div className='flex flex-col justify-start items-center'>
                <div className='flex justify-center items-center font-semibold text-cyan-500 text-xl'>{title}</div>
                <div className='flex justify-center items-center'>{description}</div>
            </div>
        </div>
    );
};

export default SmallBlock;
