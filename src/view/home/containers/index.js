/**
 * @description :容器组件，维护state，不负责渲染。
 * 
 */
import Home from '../UI/home'
import { myAction } from '../../../store/actions/msgCount'
import { connect } from 'react-redux'

// 处理业务逻辑，得到一个state。因为这里是容器组件，所以在这里处理state。


let mapStateToProps = state => {
    // reducer /index ,定义了所有的store (vuex)
    console.log('vuex:', state)
    return {
        msgCount: state.msgCount
    }
}

let mapDispatchToProps = dispatch => {
    return {
        buttonClick: () => {
            console.log('dispatch一下')
            dispatch(myAction('200')) //根据action的type，触发指定的reducer
        }
    }
}
// connect是高阶组件，会将dispatch 传入 HomeView 中。以及state，和methods。
const HomeView = connect(
    mapStateToProps,
    mapDispatchToProps
)(Home)
export default HomeView;
