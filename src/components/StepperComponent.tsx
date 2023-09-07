import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import StepChoices from "./StepChoices";
import { ApplyableFilter } from "../filter/filter";
import { useBoundStore } from "../stores/store";
import { extractFilterReturnType } from "../filter/extractFilters";

const steps = [
  "Select campaign settings",
  "Create an ad group",
  "Create an ad",
];

const optionalSteps: number[] = [];

type Props = {
  filters: extractFilterReturnType[];
};
enum choiceType {
  MULTIPLE,
  RADIO,
}

export default function StepperComponent({ filters }: Props) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());
  const [selected, setSelected] = React.useState<string[]>([]);
  const selectedState = useBoundStore((state) => state.selectedState);
  const setSelectedState = useBoundStore((state) => state.setSelectedState);
  const resetSelectedState = useBoundStore((state) => state.resetSelectedState);
  const isStepOptional = (step: number) => {
    return optionalSteps.includes(step);
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    const filterSelected: ApplyableFilter = {
      feature: filters[activeStep].filterName,
      filterFor: selected,
    };
    setSelectedState(filterSelected, activeStep);
    setSelected([]);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setSelected([...selectedState[activeStep - 1].filterFor]);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
    setSelected([]);
    resetSelectedState();
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {filters.map((_, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          // if (isStepOptional(index)) {
          //   labelProps.optional = (
          //     <Typography variant="caption">Optional</Typography>
          //   )
          // }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps}></StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? (
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
              {filters[activeStep].filters.question}
            </p>
            <StepChoices
              question={filters[activeStep]}
              type={choiceType.MULTIPLE}
              setSelected={setSelected}
              selected={selected}
            />
          </div>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {isStepOptional(activeStep) && (
              <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                Skip
              </Button>
            )}
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finish" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}
    </Box>
  );
}
