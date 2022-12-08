

export const getEnvVariables = ()=>{
    
    const envVariable = process.env
    return {
        ...envVariable
    }
}