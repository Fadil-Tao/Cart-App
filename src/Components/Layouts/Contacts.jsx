import ContactsInput from "../Elements/Inputs/ContactsInput";

const ContactsLayout = () => {
    return (
        <div className=' shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] p-8 lg:p-4 w-[80%] lg:w-[30%]'>
            <div className='flex flex-col justify-center items-center'>
                <h2 className='font-semibold'>Leave Us A Massage!</h2>
                <p className='text-center text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
            </div>
            <div className='grid'>
                <ContactsInput type='text' name='name' placeholder='Name: ' />
                <ContactsInput type='email' name='email' placeholder='Email: ' />
                <ContactsInput type='tel' name='phone' placeholder='Phone Number: ' />
                <ContactsInput type='tel' name='phone' placeholder='Phone Number: ' />
            </div>
            <textarea
                name='massage'
                id='massage'
                cols='4'
                rows='3'
                placeholder='Pesan : '
                className='border-2 border-gray-500 mt-2 py-1 px-2 w-full'
            ></textarea>
        </div>
    );
};

export default ContactsLayout
