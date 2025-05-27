function TextLink({ text, url = "#", styles, icon = null }) {
    return (
        <a
            className={`text-my-green underline block max-md:text-xs max-md:text-center ${styles}`}
            href={url}
        >
            {text}
            {icon}
        </a>
    );
}

export default TextLink;
