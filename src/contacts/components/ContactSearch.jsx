import { useForm } from '../hooks/useForm'

export const ContactSearch = () => {

    const {searchText, onInputChangeAndSearch, onResetForm} = useForm({ searchText: '' })

    const onSearchSubmit =(e)=>{
        e.preventDefault()
        onResetForm()
    }

    return (
        <form className='mt-3 ms-3 d-flex col-3' onSubmit={onSearchSubmit}>

            <input
                type="text"
                className='form-control'
                placeholder='Search'
                name='searchText'
                autoComplete='off'
                value={searchText}
                onChange={onInputChangeAndSearch}
            />

            <button
                className='btn btn-outline-primary ms-1'
                type='submit'
            >
                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            </button>

        </form>
    )
}
