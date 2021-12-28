function parseParam(url) {
    const paramsStr = /.+\?(.+)$/.exec(url)[1];
    const paramsArray = paramsStr.split('&')
    let params = {}
    paramsArray.map(param=>{
        if (/^(.+)=(.+)$/.test(param)) {
            let key = RegExp.$1
            let value = RegExp.$2
            value = /^\d+$/.test(value) ? Number(value) : value
            if (params.hasOwnProperty(key)) {
                params[key] = [].concat(params[key], value) 
            }else{
                params[key] = value
            }
        }else{
            params[param] = true
        }

    })
    return params

}
let url = 'http://www.domain.com/?user=anonymous&id=123&id=456&city=%E5%8C%97%E4%BA%AC&enabled';

// const paramsStr = /.+\?(.+)$/.test(url);
// console.log(paramsStr);
// console.log(RegExp.$1);

console.log(parseParam(url));