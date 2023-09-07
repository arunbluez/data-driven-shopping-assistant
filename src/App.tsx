import { Avatar, Button, ThemeProvider, createTheme } from "@mui/material"
import "./App.css"
import StepperComponent from "./components/StepperComponent"
import NavBar from "./components/NavBar"
import ProductList from "./components/ProductList"
import avatar from "./assets/avatar.png"
import { useMemo, useState } from "react"
import { fetchProducts } from "./product/fetchProducts"
import { extractFilters } from "./filter/extractFilters"
import { useBoundStore } from "./stores/store"
import { applyFilters } from "./filter/applyFilters"

function App() {
  const [started, setStarted] = useState(false)
  const products = fetchProducts()
  const filters = extractFilters(products)

  const selectedState = useBoundStore((state) => state.selectedState)

  const filteredProducts = useMemo(() => {
    return applyFilters(products, selectedState)
  }, [selectedState, products])

  console.log(selectedState)

  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(223, 0, 0)",
      },
      secondary: {
        main: "rgb(0, 0, 0)",
      },
    },
  })

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <div className="app">
        <div className="min-w-full lg:min-w-[960px] mx-auto ">
          <div className="flex items-center gap-4">
            <Avatar alt="DDSA" src={avatar} sx={{ width: 120, height: 120 }} />
            <div className="text-left my-8">
              <p className="text-4xl font-bold mb-2">
                Data Driven Shopping Assistant
              </p>
              <p className="font-light text-gray-600">
                The idea is to have a customer data driven shopping journey
                through a seris of questions/filters ( to understand the users
                needs /requirements) which will recommend the user a list of N
                suitable products. The idea basically translates the customers
                needs/requirements into our technical filters/specifications so
                that a user can make a data driven buying decision.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-400 mb-8 min-h-[300px]">
            {started ? (
              <StepperComponent filters={filters} />
            ) : (
              <div className="flex flex-col items-start justify-between p-4 min-h-[300px]">
                <p className="text-6xl font-bold">Interseted in buying a TV?</p>
                <div className="flex items-center justify-between w-full">
                  <p className="text-4xl font-light text-red-500">
                    Try our smart assistant
                  </p>
                  <Button
                    variant="contained"
                    size="large"
                    color="secondary"
                    onClick={() => setStarted(true)}
                  >
                    Start
                  </Button>
                </div>
              </div>
            )}
          </div>
          <ProductList products={filteredProducts} />
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
