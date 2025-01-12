
// ...props -> collect all other props that might be received on this section component and merge into props object
// we then forward props into this function, this ensures that extra props that might be set on custom component will be forwarded to 'built-in' section elements
export default function Section({title, children, ...props}){
    return (
        <section {...props}>
        <h2>{title}</h2>
        {children}
        </section>
    );
}