import Button from "./Button"

export default function ProjectSidebar({onStartAddingProject}) {
    // tailwind sets 1/3 of available width - className="w-1/3"
    // px-8 padding and py-16 top bottom padding, bg is background color
    return <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
        <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
        <div>
    <Button onClick={onStartAddingProject}>+ Add Project</Button>
        </div>
    </aside>
}