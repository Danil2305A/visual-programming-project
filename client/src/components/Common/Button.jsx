export default function Button({
                                   children,
                                   primary = false,
                                   secondary = false,
                                   big = false,
                                   small = false,
                                   onClick
                               }) {
    const buttonClasses = [
        'button',
        primary ? 'button_primary' : '',
        secondary ? 'button_secondary' : '',
        big ? 'button_big' : '',
        small ? 'button_small' : ''
    ].filter(Boolean).join(' ');

    return (
        <button className={buttonClasses} onClick={onClick}>
            {children}
        </button>
    );
}