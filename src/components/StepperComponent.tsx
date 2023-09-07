import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import StepChoices from "./StepChoices";
import { ApplyableFilter } from "../filter/filter";
import { FeatureName, Product } from "../product/product";
import { extractFilter } from "../filter/extractFilters";

enum choiceType {
  MULTIPLE,
  RADIO,
}

const features: FeatureName[] = [
  "displaySize",
  "displayTechnology",
  "displayResolution",
];

interface Props {
  currentStep: number;
  currentProducts: readonly Product[];
  currentFilters: readonly ApplyableFilter[];
  addFilter: (filter: ApplyableFilter) => void;
  resetState: () => void;
  removeFilter: () => void;
}

export default function StepperComponent({
  currentStep,
  currentProducts,
  addFilter,
  resetState,
  removeFilter,
}: Props) {
  const [selected, setSelected] = React.useState<string[]>([]);

  const handleNext = () => {
    const filterSelected: ApplyableFilter = {
      feature: extractFilter(currentProducts, features[currentStep]).filterName,
      filterFor: selected,
    };
    addFilter(filterSelected);
    setSelected([]);
  };

  const handleBack = () => {
    setSelected([]);
    removeFilter();
  };

  const handleReset = () => {
    setSelected([]);
    resetState();
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={currentStep}>
        {features.map((_, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps}></StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {currentStep === features.length ? (
        <div className="min-h-[200px] flex flex-col justify-between">
          <p className="text-xl font-bold my-16">
            Find our suggested Televisions below:
          </p>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </div>
      ) : (
        <React.Fragment>
          <div>
            <p className="text-2xl font-black py-4 m-4">
              {
                extractFilter(currentProducts, features[currentStep]).filters
                  .question
              }
            </p>
            <StepChoices
              question={extractFilter(currentProducts, features[currentStep])}
              type={choiceType.MULTIPLE}
              setSelected={setSelected}
              selected={selected}
            />
          </div>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={currentStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {currentStep === features.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
