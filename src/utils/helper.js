export const validNumber = (value) => {
    const convertNumber = Number(value)
    if(convertNumber < 0){
        return 1
    } else if(convertNumber > 50){
        return 50
    } else {
        return convertNumber
    }
}

export const validEmail = (value) => {
    const isValid = value
        .toLowerCase()
        .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    const isValidEmail = !!isValid
    if(isValidEmail){
        return { isValidEmail: isValidEmail, valueEmail: value }
    }else{
        return { isValidEmail: isValidEmail, valueEmail: null }
    }    
}

export const stylePerksName = (name) => {
    const delete_under = name.replace(/_/g, " ")
    return delete_under.charAt(0).toUpperCase() + delete_under.slice(1)
}