import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = ({ Click, onChange }) => {
    return (
        <div className='flex w-full h-full  border-2 rounded-2xl '>
            <input
                type='text'
                id='search'
                placeholder='Input'
                className='w-full p-4  outline-none  rounded-l-2xl'
                onChange={(e) => onChange(e)}
            />
            <button className=' bg-red-400 px-2 rounded-e-2xl' onClick={(e) => Click(e)}>
                <AiOutlineSearch />
            </button>
        </div>
    );
};

export default SearchBar;
