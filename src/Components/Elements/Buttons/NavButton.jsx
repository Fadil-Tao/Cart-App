const NavButton = (props) => {
    const {
        bgColor = 'bg-cyan-400',
        children = 'this is button',
        border,
        fontColor = 'text-white',
        onClick
    } = props;

    return (
        <button
            className={`${bgColor}  rounded-lg font-semibold  ${border} p-2 md:w-36 ${fontColor} mx-2
        hover:text-cyan-400` } onClick={onClick}
        >
            {children}
        </button>
    );
};

export default NavButton;
