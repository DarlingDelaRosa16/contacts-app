import { useState } from 'react';
import { useContactStore } from '../../hooks/useContactStore';

export const useForm = ( initialForm = {} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const {setFilterContact} = useContactStore();

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    const setDataForm = (data)=>{
        setFormState(data)
    }

    const onInputChangeAndSearch = ({target})=>{
        const{name, value}= target;
        setFormState({...formState, [name]: value})

        if(value !== '' && value.length > 1 ) {
            setFilterContact(value)
        }else{
            setFilterContact(null)
        }
        
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,
        setDataForm,
        onInputChangeAndSearch,
    }
}