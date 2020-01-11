/**
 * 存储
 * @param {Object} data
 */

export function storeObject(key, object) {
    localStorage.setItem(key, JSON.stringify(object))
}

/**
 * 获取
 */


export function getStoreObject(key) {

    return JSON.parse(localStorage.getItem(key))

}



/**
* 删除
*/

export function delStore(key) {
    localStorage.removeItem(key)
}
