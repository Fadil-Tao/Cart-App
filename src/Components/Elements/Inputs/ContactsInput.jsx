const ContactsInput = (props) => {
    const { name, placeholder, type } = props;
    return (
        <input
            className=' border-2 border-gray-500 mt-2 py-1 px-2 '
            type={`${type}`}
            name={`${name}`}
            placeholder={`${placeholder}`}
            id={`${name}`}
        />
    );
};

export default ContactsInput;
