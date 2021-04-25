
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: '/login', component: () => import('pages/Login.vue') },
      { path: '/register', component: () => import('pages/Register.vue') },
      { path: '/explore', component: () => import('pages/Explore.vue') },
      { path: '/cars/new', component: () => import('pages/AddCar.vue') },
      { path: '/cars/:id', component: () => import('pages/CarDetails.vue') },
      { path: '/users/:id', component: () => import('pages/UserProfile.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
