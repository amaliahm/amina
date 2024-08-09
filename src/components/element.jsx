const ElementComponent = ({isTitle = true, title, isIcon = false, icon, onClick = {}}) => {
    return (
        <>
            <span className="element-border hover:cursor-pointer" onClick={() => onClick()}>
                {isTitle ? title : isIcon && <img src={icon} alt={title} className="w-[28px] h-[28px] color-[var(--secondary-color-one)]" /> }
            </span>
        </>
    )
}

export default ElementComponent