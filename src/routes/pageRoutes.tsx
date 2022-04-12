/*
 * @Description: 
 * @Date: 2022-03-23 16:17:04
 * @LastEditTime: 2022-03-31 16:28:54
 */
import * as React from 'react'
import { RouteProps } from 'react-router-dom'
import NotFound  from '@components/notFound'
import {HomeOutlined
} from '@ant-design/icons'

const Home = React.lazy(() => import( /* webpackChunkName:"dashboard" */ '@view/home/UI/index'))
const Form = React.lazy(() => import( /* webpackChunkName:"form" */ '@view/form/index'))

export interface XRouteProps extends RouteProps {
  title?: string
  icon?: React.ReactNode
  meta?: {
    title: string;
  }
  subRoute?: XRouteProps[]
}

/**
 * 子级页面路由的path请保持与父级path有相同的Menu前缀，确保菜单选中
 */
const routesConf: Partial<XRouteProps>[] = [
  {
    title: '首页',
    path: '/',
    icon: <HomeOutlined/>,
    component: Home,
  },
  {
    title: '表单',
    path: '/form',
    component: Form
  }
]

const routes = routesConf.reduce((prev, cur) => {
  if (cur.subRoute) {
    let _cur: XRouteProps = {}
    if (cur.component) {
      _cur = {
        title: cur.title,
        path: cur.path,
        component: cur.component,
        meta: cur.meta,
      }
      prev.push(_cur)
    }
    return prev.concat(cur.subRoute.map((item) => {
      const _item = { ...item }
      _item.path = cur.path + String(_item.path)
      return _item
    }))
  }
  return prev.concat(cur)
}, [])

routes.push({
  path: '*',
  component: NotFound
})


const LeftMenuConfig = () => routesConf
  .filter(route => typeof route.title === 'string')
  .map<XRouteProps>(
  (route) => {
    let subRoute: XRouteProps[] = []
    if (route.subRoute && route.subRoute.length > 0) {
      subRoute = route.subRoute
        .filter(_route => typeof _route.title === 'string')
        .map(_route => ({
          path: route.path + String(_route.path),
          title: _route.title,
          icon: _route.icon
        }))
    }
    return {
      icon: route.icon,
      path: route.path,
      title: route.title,
      subRoute,
    }
  }
)


// console.log(routesConf, routes, 'LeftMenuConfig')

export {
  routesConf,
  routes,
  LeftMenuConfig
}