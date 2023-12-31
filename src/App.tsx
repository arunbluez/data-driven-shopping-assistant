import { Avatar, Button, ThemeProvider, createTheme } from "@mui/material";
import "./App.css";
import StepperComponent from "./components/StepperComponent";
import NavBar from "./components/NavBar";
import ProductList from "./components/ProductList";
import avatar from "./assets/avatar.png";
import { useState } from "react";
import { useStore } from "./stores/store";

function App() {
  const [started, setStarted] = useState(false);
  const {
    currentStep,
    currentProducts,
    addFilter,
    filtersToApply,
    removeFilter,
    reset,
  } = useStore();

  const theme = createTheme({
    palette: {
      primary: {
        main: "rgb(223, 0, 0)",
      },
      secondary: {
        main: "rgb(0, 0, 0)",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <div className="app">
        <div className="min-w-full lg:min-w-[960px] mx-auto ">
          <div className="flex flex-col md:flex-row items-center gap-4 mb-8">
            <Avatar alt="DDSA" src={avatar} sx={{ width: 120, height: 120 }} />
            <div className="text-center md:text-left md:my-8">
              <p className="text-3xl md:text-4xl font-bold mb-2">
                ShopSmartly: Guided Product Discovery
              </p>
              <p className="font-light text-gray-600 text-sm md:text-base">
                The idea is to have a customer data driven shopping journey
                through a seris of questions/filters ( to understand the users
                needs /requirements) which will recommend the user a list of N
                suitable products. The idea basically translates the customers
                needs/requirements into our technical filters/specifications so
                that a user can make a data driven buying decision.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-gray-400 mb-8 ">
            {started ? (
              <StepperComponent
                currentStep={currentStep}
                addFilter={addFilter}
                currentFilters={filtersToApply}
                currentProducts={currentProducts}
                resetState={reset}
                removeFilter={removeFilter}
              />
            ) : (
              <div className="flex flex-col items-start justify-between p-4 min-h-[300px]">
                <p className="text-2xl md:text-6xl font-bold">
                  Interseted in buying a TV?
                </p>
                <div className="flex flex-col md:flex-row items-center justify-between w-full">
                  <p className="text-xl md:text-4xl font-light text-red-500">
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
          <ProductList products={currentProducts} />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
