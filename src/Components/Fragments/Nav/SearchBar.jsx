import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = ({Click, onChange}) => {
    return (
        <div className='flex w-full h-full  border-2 border-gray-500 '>
            <input type='text' id='search' placeholder='Input' className='w-full p-4' onChange={(e) => onChange(e)}/>
            <button className=' bg-red-400 px-2' onClick={(e) => Click(e)}>
                <AiOutlineSearch />
            </button>
        </div>
    );
};

export default SearchBar;
