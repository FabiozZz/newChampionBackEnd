export function sort(arr,params={}){
    if (params.type === 'asc'){
        return arr.sort((item,nextItem)=>item[params.type]>nextItem[params.type])
    }else if (params.type === 'desc'){
        return arr.sort((item,nextItem)=>item[params.type]<nextItem[params.type])
    }
    
}
export function getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
}