function dateFormat(date,format) {
    let day = date.getDate()
    let month = date.getMonth()+1
    let year = date.getFullYear()
    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    let temp = format
    temp = temp.replace('yyyy',year)
    temp = temp.replace('MM',month)
    temp = temp.replace('dd',day)
    temp = temp.replace('HH',hour)
    temp = temp.replace('mm',minute)
    temp = temp.replace('ss',second)
    // if (rex.test(format)) {
    //     return `${year}/${month}/${day}`
    // }
    return temp

}
console.log(dateFormat(new Date('2021-12-27 23:59:59'),'yyyy$dd$MM HH-mm-ss')); 
// console.log(new Date('2021-12-27 23:59:59'));