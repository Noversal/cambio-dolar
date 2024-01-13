import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Spinner from './Spinner'
import NavBar from './NavBar'

export default function Layout () {
  return (
    <>
      <NavBar />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  )
}
