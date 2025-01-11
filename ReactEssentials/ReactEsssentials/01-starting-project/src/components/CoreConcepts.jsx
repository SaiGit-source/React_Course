

// we want to have different data everytime this CoreConcept component gets used: Props
/*
function CoreConcept(props) {
  return (
    <li>
        <img src={props.image} alt={props.title}></img>
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </li>
  );
}
*/

// Object destructuring
export default function CoreConcept({image, title, description}) {
  return (
    <li>
        <img src={image} alt={title}></img>
        <h3>{title}</h3>
        <p>{description}</p>
    </li>
  );
}
