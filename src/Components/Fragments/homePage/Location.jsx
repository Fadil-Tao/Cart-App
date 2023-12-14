import MapContainer from '../../Elements/MapContainer';
const Location = () => {
    return (
        <div className='hidden lg:flex flex-col p-4  w-[40%]'>
            <MapContainer />
            <div className='grid grid-rows-2 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-xl bg-white  p-6 '>
                <div className='border-b-slate-400 border-b-[0.5px]'>
                    <h3>Address :</h3>
                    <p className=''>Street Valley Balikpapan</p>
                </div>
                <div className='grid grid-cols-2 gap-4 border-b-slate-400 border-b-[0.5px]'>
                    <div>
                        <h3>Phone :</h3>
                        <p>082277643482</p>
                    </div>
                    <div>
                        <h3>Email :</h3>
                        <p>info@rFootWear.com</p>
                    </div>
                </div>
                <div>
                    <p>
                        <span>Website : </span>Rfootwear.com
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Location;
