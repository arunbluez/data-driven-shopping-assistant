import { ThemeProvider, createTheme } from "@mui/material"
import "./App.css"
import StepperComponent from "./components/StepperComponent"
import NavBar from "./components/NavBar"
import ProductList from "./components/ProductList"

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(223, 0, 0)",
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <div className="app">
        <div className="min-w-full lg:min-w-[960px] mx-auto ">
          <div className="bg-white rounded-2xl p-6 border border-gray-400 mb-8">
            <StepperComponent />
          </div>
          <ProductList />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
