import Navbar from "../components/Navbar"
import Head from "./head"

import "../styles/globals.css"

export default function RootLayout({ children }) {
  return (
    <html>
      <Head title={"Pau Marin"} />
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}