import { createPortal } from "react-dom"
import { useImperativeHandle, useRef } from "react"
import Button from "./Button"
// from index.html:     <div id="modal-root"></div>
// note we dont need forwardRef if we are using version > Reactv19. refs will be used as regular props
export default function Modal({children, ref, buttonCaption}){
    // to expose the function that could be called from outside this function , we use useImperativeHandle
    const dialogRef = useRef()
    useImperativeHandle(ref, () => {
        return {
            open(){
                dialogRef.current.showModal()
            }
        }
    })
    return createPortal(
    <dialog ref={dialogRef} 
            className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
        {children}
        {/* this part needed to close this dialog*/}
        <form method="dialog" className="mt-4 text-right">
            <Button>
                {/* to close this dialog*/}
                {buttonCaption}
            </Button>
        </form>
    </dialog>, document.getElementById('modal-root')
    )
}