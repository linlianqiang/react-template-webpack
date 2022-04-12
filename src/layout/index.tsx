/*
 * @Description: 布局
 * @Date: 2022-03-24 11:04:44
 * @LastEditTime: 2022-03-31 15:22:37
 */
import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import { routes } from '@routes/pageRoutes';
import style from '@styles/layout.module.scss';
import HeaderContent from './Header';
import SiderComponent from './Sider';

const { Header, Content, Sider } = Layout;

class LayoutComponent extends Component<any> {
  render() {
    return(
      <Layout style={{height: '100%'}}>
        <Header className={style.header}><HeaderContent /></Header>
        <Layout>
          <Sider className={style.sider} width={200}><SiderComponent /></Sider>
          <Layout style={{padding: '10px'}}>
            <Content className={style.content}>
              <Switch>
                {
                  routes.map(r => {
                    const {path, exact, component} = r
                    const LazyCom = component
                    return <Route
                      key={path + ''}
                      exact={exact !== false}
                      path={path}
                      render={(props: any) => (<LazyCom {...props}/>)}/>
                  })
                }
              </Switch>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    )
  }
}

export default LayoutComponent;