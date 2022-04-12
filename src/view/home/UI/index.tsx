/*
 * @Description: 
 * @Date: 2022-03-14 11:38:22
 * @LastEditTime: 2022-03-31 15:25:12
 */

/**
 * @description UI组件，不做改变state的动作，只是定义一个交互动作。
 */
import React from 'react';
class Home extends React.Component {
    constructor(props: any) {
        super(props)

    }
    render() {
        console.log('props:', this.props)
        return <div>
            <button onClick={(this.props as any).buttonClick}>发起dispatch</button>
            有多少个消息：{(this.props as any).msgCount}
            
        </div>
    }
}
export default Home;