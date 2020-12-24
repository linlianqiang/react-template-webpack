
/**
 * @description 全局消息的store
 * @param {*} storeMsgCount 默认值
 * @param {*} action 默认接收action
 */
const msgCount = (storeMsgCount = 100, action) => {
    switch (action.type) {
        case 'MSG_RESET':
            return storeMsgCount + action.msgCount
        default:
            return storeMsgCount
    }
}

export default msgCount