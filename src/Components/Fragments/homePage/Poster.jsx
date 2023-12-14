import posterimage from '../../../assets/poster.jpg';

const Poster = () => {
    return (
        <div className='h-96   relative w-full  z-10 items-center justify-center'>
            <img src={posterimage} alt='image.jpg' className=' h-full object-cover w-full  brightness-50' />
            <h1 className=' font-custom  text-slate-800 font-semibold text-[58px] absolute top-[35%] start-[10%] '>Rifqi FootWear</h1>
        </div>
    );
};

export default Poster;
