import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router"


export const MundoResinaApp = () => {
  return (
    <BrowserRouter>
        <AppRouter />
    </BrowserRouter>
  )
}
