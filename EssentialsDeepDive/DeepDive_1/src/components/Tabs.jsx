
export default function Tabs({children, buttons, buttonsTag}) {
    const ButtonsTag = buttonsTag;
    return (
        <>
        <ButtonsTag>
            {buttons}
        </ButtonsTag>
        {children}
        </>
    )
}