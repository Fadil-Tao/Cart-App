const MapContainer = () => {
    return (
        <div className="">
            <iframe
                src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127647.77650914574!2d116.8781799757277!3d-1.1654016950855746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2df14e6abeaae51f%3A0x63b6d6597f86a4a!2sLamaru%2C%20Balikpapan%20Timur%2C%20Balikpapan%20City%2C%20East%20Kalimantan!5e0!3m2!1sen!2sid!4v1701519751129!5m2!1sen!2sid'
                className="w-full rounded h-full"
                allowFullScreen=''
                loading='lazy'
                referrerpolicy='no-referrer-when-downgrade'
            ></iframe>
            
        </div>
    );
};


export default MapContainer
