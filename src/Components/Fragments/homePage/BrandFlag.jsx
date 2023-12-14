const BrandFlag = ({img,title}) => {
    return (
        <div className='bg-white border-gray-500 h-[150px] p-1 w-[20%] grid place-items-center border-solid m-1'>
            <img
                src={`${img}`}
                alt='image'
                className='lg:object-cover object-fit w-full h-full   '
            />
            <p className="text-black font-semibold font-sans">{`${title}`}</p>
        </div>
    );
};

export default BrandFlag;
