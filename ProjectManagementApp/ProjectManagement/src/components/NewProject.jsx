import { useRef } from "react"
import Input from "./Input"
import Modal from "./Modal"
// include the value into this className : w-[35rem] then tailwind wil assign this custom value

export default function NewProject({onAdd, onCancel}) {
// only i want to read those input values only when i click the 'Save' button, we use useRef()
// 3 refs for 3 inputs    
    const title = useRef()
    const description = useRef()
    const dueDate = useRef()
    const modalRef = useRef()

    function handleSave(){ 
        const enteredTitle = title.current.value;
        const enteredDescription = description.current.value;
        const enteredDueDate = dueDate.current.value;
        // to access entered value
        // we are calling the prop function()
        // this is for validation
        if (enteredTitle.trim()==='' || 
            enteredDescription==='' || 
            enteredDueDate===''){
            // if true, show error modal
            modalRef.current.open()
            // in case of errors, we open this modal/dialog
            return
        }

        onAdd({
            title: enteredTitle,
            description: enteredDescription,
            dueDate: enteredDueDate
        })
    }

    return (
        <>
        <Modal ref={modalRef} buttonCaption="Ok">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Error: you didnt enter a value</p>
            <p className="text-stone-600 mb-4">Please make sure you provide a valid value for every input field</p>
        </Modal>
        <div className="w-[35rem]">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button 
                    className="text-stone-800 hover:text-stone-950"
                    onClick={onCancel}>
                        Cancel</button></li>
                <li><button 
                        className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                        onClick={handleSave}>Save</button></li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title"></Input>
                <Input ref={description} label="Description" textarea></Input>
                <Input type="date" ref={dueDate} label="Due Date"></Input>
            </div>
        </div>
        </>
    )
}