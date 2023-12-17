import { createContext, useState } from 'react';
import CardContainer from '../Components/Fragments/collection/CardsContainer';
import FilterContainer from '../Components/Fragments/collection/FilterContainter';
import { SnackbarProvider } from 'notistack';
export const CatContext = createContext(null);

const CollectionPage = () => {
    const [category, setCategory] = useState('ALL');
    return (
        <div className='lg:px-44  justify-center items-center flex flex-col'>
            <CatContext.Provider value={{ category, setCategory }}>
                <FilterContainer />
                <SnackbarProvider>
                    <CardContainer />
                </SnackbarProvider>
            </CatContext.Provider>
        </div>
    );
};

export default CollectionPage;
