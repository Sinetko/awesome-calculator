export const setCurrentValueValidator = (value, current) => {
    if (value === '+' && current === '') return false; //fix operations without nums
    if (value === '*' && current === '') return false; //fix operations without nums
    if (value === '/' && current === '') return false; //fix operations without nums
    if (value === '-' && current === '-') return false; //fix nums ----15
    if (value === '0' && current === '0') return false; //fix nums 000000
    if (value === '.' && current.includes('.')) return false; //fix nums 0..0..1....

    return true;
}
export const setPreviousValueValidator = (value, previous, current) => {

    
    if (value === '-' && previous === '' && current === '-') return false; //fix operations without nums
    if (value === '+' && previous === '' && current === '') return false; //fix operations without nums
    if (value === '+' && previous.charAt(previous.length-1) === '+' && current === '') return false; //fix operations without nums
    if (value === '-' && previous.charAt(previous.length-1) === '-' && current === '') return false; //fix operations without nums
    if (value === '/' && previous.charAt(previous.length-1) === '/' && current === '') return false; //fix operations without nums
    if (value === '*' && previous.charAt(previous.length-1) === '*' && current === '') return false; //fix operations without nums
    if (value === '*' && previous === '' && current === '') return false; //fix operations without nums
    if (value === '/' && previous === '' && current === '') return false; //fix operations without nums

    return true;
}