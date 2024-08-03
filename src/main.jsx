import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { About, Contect, Github, Home, Signin, Signup, User } from './components'
import { ApiGithub } from "./components/api/ApiGithub.js";

import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import PasswordGeneratorCom from './components/PasswordGenerator.jsx'
import QuizHub from './components/QuizHub.jsx'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Layout />}>

            <Route path='DepPractAlawa' element={<Home />} />
            <Route path='quizhub' element={<QuizHub />} />
            <Route path='about' element={<About />} />
            <Route path='contect' element={<Contect />} />
            <Route path='signin' element={<Signin />} />
            <Route path='signup' element={<Signup />} />
            <Route path='passwordgenerator' element={<PasswordGeneratorCom />} />
            <Route path='user/:userid' element={<User />} />

            <Route
                loader={ApiGithub}
                path='github'
                element={<Github />} />

        </Route>
    )
)



ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
