import { Checkbox, Radio } from "@mui/material";
import { DisplayFilterValueType } from "../filter/filter";
import { extractFilterReturnType } from "../filter/extractFilters";

type Props = {
  question: extractFilterReturnType;
  type: choiceType;
  selected: string[];
  setSelected: (items: string[]) => void;
};

enum choiceType {
  MULTIPLE,
  RADIO,
}

export default function StepChoices({
  question,
  type,
  selected,
  setSelected,
}: Props) {
  const handleCheckBox = (choice: string) => {
    if (selected?.includes(choice)) {
      const filtered = selected.filter((x) => x !== choice);
      setSelected([...filtered]);
    } else {
      selected?.push(choice);
      setSelected([...selected]);
    }
  };

  return (
    <div className="flex justify-center p-4">
      <div className="flex flex-wrap gap-4">
        {question.filters.values.map((choice: DisplayFilterValueType) => {
          if (type === choiceType.MULTIPLE) {
            return (
              <div
                className="pl-4 pr-6 py-2 border border-gray-600 rounded-xl max-w-max cursor-pointer hover:scale-105 hover:bg-red-100 duration-100"
                onClick={() => handleCheckBox(choice.value)}
              >
                <Checkbox checked={selected.includes(choice.value)} />
                {choice.label}
              </div>
            );
          } else {
            return (
              <div
                className="pl-4 pr-6 py-2 border border-gray-600 rounded-xl max-w-max cursor-pointer hover:scale-105 hover:bg-red-100 duration-100"
                onClick={() => setSelected([choice.value])}
              >
                <Radio
                  checked={selected.includes(choice.value)}
                  value={choice}
                  name="radio-buttons"
                  inputProps={{ "aria-label": choice.value }}
                />
                {choice.label}
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
