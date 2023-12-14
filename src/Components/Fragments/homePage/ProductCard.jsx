const ProductCard = (props) =>{
    const {Title = 'Title', img = "http://placekitten.com/g/200/300" , Description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ipsum doler'} = props;

    return (
        <div className="flex flex-col justify-center  items-center w-[25%] rounded-md border-2 transition-all duration-600  hover:scale-110 hover:shadow-md hover:shadow-gray-700  p-1 mr-6 mt-4 h-[200px] lg:h-[250px] ">
            <div className="w-full h-[60%]">
                <img src={`${img}`} alt="img" className=" lg:object-cover object-fit h-full w-full rounded-xl" />
            </div>
            <div className="flex flex-col justify-center items-center">
                <h3 className=" font-semibold text-lg">{`${Title}`}</h3>
                <p className="hidden lg:block">{`${Description}`}</p>
            </div>
        </div>

    )
}

export default ProductCard