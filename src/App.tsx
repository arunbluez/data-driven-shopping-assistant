import { ThemeProvider, createTheme } from "@mui/material"
import "./App.css"
import StepperComponent from "./components/StepperComponent"
import NavBar from "./components/NavBar"

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
        <div className="min-w-full lg:min-w-[960px] min-h-[400px] mx-auto bg-white rounded-2xl p-6 border border-gray-400">
          <StepperComponent />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
