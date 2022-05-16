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

export const stylePerksName = (name) => {
    const delete_under = name.replace(/_/g, " ")
    return delete_under.charAt(0).toUpperCase() + delete_under.slice(1)
}