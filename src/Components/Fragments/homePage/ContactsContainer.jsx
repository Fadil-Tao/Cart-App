import ContactsLayout from '../../Layouts/Contacts';
import Location from './Location';

const ContactsContainer = () => {
    return (
        <div className='flex justify-center items-center w-full  px-8'>
            <ContactsLayout/>
            <Location />
        </div>
    );
};

export default ContactsContainer;
