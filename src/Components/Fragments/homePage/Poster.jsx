import posterimage from '../../../assets/poster.jpg';

const Poster = () => {
    return (
        <div className='md:h-[400px] my-10 md:mt-0 flex flex-wrap w-full md:flex-row flex-col-reverse  z-10 items-center justify-between md:px-40 '>
            <div className=''>
                <h1 className=' font-custom  text-slate-800 font-semibold text-[58px]  '>
                    Rifqi FootWear
                </h1>
            </div>
            <div className='md:w-[50%] w-[80%] md:h-[70%] shadow-x group '>
                <img
                    src={posterimage}
                    alt='image.jpg'
                    className=' h-full object-cover w-full  rounded-2xl brightness-50'
                />
            </div>
        </div>
    );
};

export default Poster;
