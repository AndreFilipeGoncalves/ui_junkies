import Home from '@/views/Home'
import About from '@/views/About'
import Components from '@/views/Components'
import componentRoutes from '@/router/components'

export default [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/components',
        name: 'Components',
        component: Components,
        children: componentRoutes
    }
]
