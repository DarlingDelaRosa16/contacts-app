import { useModalStore } from "../../hooks/useModalStore"

export const ImportContactBtn = () => {

    const {openImportModal} = useModalStore()

    return (
        <button
            className="btn btn-outline-primary ms-1"
            onClick={openImportModal}
        >
            <i className="fa-solid fa-file-import"></i>
        </button>
    )
}
