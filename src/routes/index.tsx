import { Suspense } from 'react'
import { BrowserRouter, Router, Route, Routes } from 'react-router-dom'

const AppRoutes = () => {
    return (
        <BrowserRouter>
            <>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path='/' element='asdf' />
                    </Routes>
                </Suspense>
            </>
        </BrowserRouter>
    )
}

export default AppRoutes