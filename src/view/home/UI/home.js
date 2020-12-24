
/**
 * @description UI组件，不做改变state的动作，只是定义一个交互动作。
 */
import React from 'react';
class Home extends React.Component {
    constructor(props) {
        super(props)

    }
    render() {
        console.log('props:', this.props)
        return <div>
            <button onClick={this.props.buttonClick}>发起一个dispatch</button>
            有多少个消息：{this.props.msgCount}
        </div>
    }
}
export default Home;