/**
 * @description 订单数放在全局。
 * @param {*} state 
 * @param {*} action 
 */
const carCount = (state = 0, action) => {
    switch (action.type) {
        case 'CAR_RESET':
            return state + action.num
        default:
            return state
    }
}
export default carCount;