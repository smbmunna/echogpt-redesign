import ModelPicker from "./EmptyChat/ModelPicker";

export default function EmptyChat() {
  return (
    <div className="flex flex-col items-center justify-between flex-1 h-full w-full max-w-4xl mx-auto px-4 py-8 select-none">
      {/* Upper Content: Model Picker Header + Greeting + Prompt Cards */}
      <div className="flex-1 flex flex-col items-center justify-center w-full space-y-8 my-auto">
        {/* Model Selector Dropdown Header */}
        <ModelPicker />
      </div>
    </div>
  );
}
