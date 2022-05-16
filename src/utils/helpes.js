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