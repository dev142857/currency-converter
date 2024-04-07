import { Suspense } from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'
import { PublicRoutes } from './route'
// import 'bootstrap/dist/css/bootstrap.min.css';

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        {PublicRoutes.map(({component:Component, slug}, index) => (
                            <Route path={`${slug}`} element={<Component />} />
                        ))}
                    </Routes>
                </Suspense>
            </>
        </BrowserRouter>
    )
}

export default AppRoutes