/**
 * @description 未读消息 全局state
 * @param {String} msgCount 
 */
import axios from 'axios'
// 同步操作
export const myAction = msgCount => {
    return {
        type: 'MSG_RESET',
        msgCount: msgCount + 2
    }
}

// 异步操作
export const actionAsync = msgCount => {
    return (dispatch) => {
        axios().then(data => {
            dispatch(myAction(data))
        })
    }
}