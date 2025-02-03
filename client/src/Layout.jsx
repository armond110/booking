import { Outlet } from "react-router";
import { Analytics } from "@vercel/analytics/react"
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="2xl:items-center 2xl:mx-auto 2xl:justify-center  2xl:max-w-screen-2xl">
      <Header className="max-w-full"/>
      <Outlet />
      <Analytics />
      <Footer />
    </div>
  )
}