import SearchBar from '../Nav/SearchBar';
import { CiFilter } from 'react-icons/ci';
import { CatContext } from '../../../Pages/CollectionPage';
import { useContext, useEffect, useState } from 'react';

const FilterContainer = () => {
    const { category, setCategory } = useContext(CatContext);

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    };

    return (
        <CatContext.Provider value={category}>
            <div className='  mt-4  h-full lg:relative lg:inset-y-[25px] lg:left-80  '>
                <div className='mr-2 w-[80%] lg:w-[60%] lg:h-10 h-8 ml-6 lg:ml-10'></div>
                <div className='flex justify-center items-center lg:mr-12'>
                    <p className=' flex items-center text-cyan-400 font-semibold rounded-sm'>
                        Filter <CiFilter />
                    </p>
                    <select
                        name='Category'
                        id='Category'
                        className='rounded-md text-center bg-transparent border-[1.5px] border-slate-400 h-full mx-2 lg:mx-0 '
                        onChange={handleCategoryChange}
                        value={category.category}
                    >
                        <option value='ALL'>All</option>
                        <option value='Sneakers'>Sneakers</option>
                        <option value='Boots'>Boots</option>
                        <option value='Slides'>Slides</option>
                    </select>
                </div>
            </div>
        </CatContext.Provider>
    );
};

export default FilterContainer;
