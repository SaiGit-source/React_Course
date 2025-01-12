import CoreConcept from "./CoreConcept";
import { CORE_CONCEPTS } from "../data";

export default function CoreConcepts() {

    return (
                <section id="core-concepts">
                <h2>Core Concepts</h2>
                <ul>
                  {/* Dynamically generate the list, use 'key' to get rid off the warning */}
                  {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}> </CoreConcept>)}       
                </ul>
                </section>        
    )
};