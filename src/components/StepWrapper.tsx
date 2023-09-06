import StepChoices from "./StepChoices"

type Props = {
  step: number
}
enum choiceType {
  MULTIPLE,
  RADIO,
}
export default function StepWrapper({ step }: Props) {
  return (
    <div>
      <p className="text-2xl font-black py-4 m-4">QUESTION {step}</p>
      <StepChoices
        choices={["option1", "option2", "option3"]}
        type={choiceType.MULTIPLE}
      />
    </div>
  )
}
