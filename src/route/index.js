import React from 'react'
import { useRoutes } from 'react-router'
import Home from '../components/Home/Home'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Services from '../pages/Services'
import Project from '../pages/Project'
import NotFound from '../pages/NotFound'



import Layout from '../layout'


function Router() {

    const routes = useRoutes([
        {
            path : '/',
            element : <Layout />,
            children : [
                {
                    element : <Home />,
                    index : true
                },
                {
                    path : 'about',
                    element : <About />
                },
                {
                    path : 'services',
                    element : <Services />
                },
                {
                    path : 'project',
                    element : <Project />
                },
                {
                    path : 'blog',
                    element : <Blog />
                },
                {
                    path : '*',
                    element : <NotFound />
                }
            ]
        }
    ])

  return routes
}

export default Router
