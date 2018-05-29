export default [{
  path: '/users/:id',
  name: 'users.show',
  meta: {
    container: false
  },
  component: () => import('./show')
}, {
  path: '/user',
  component: () => import('./profile'),
  children: [{
    path: 'profile',
    name: 'user.profile',
    component: () => import('./profile/basic')
  }, {
    path: 'account',
    name: 'user.account',
    component: () => import('./profile/account')
  }, {
    path: 'notification',
    name: 'user.notification',
    component: () => import('./profile/notification')
  }, {
    path: 'bindings',
    name: 'user.bindings',
    component: () => import('./profile/bindings')
  }, {
    path: 'blacklist',
    name: 'user.blacklist',
    component: () => import('./profile/blacklist')
  }]
}]
