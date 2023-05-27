import { MutableRefObject } from "react";

type TextInputProps = {
  textRef: MutableRefObject<string>;
  placeholder: string;
};

export default function TextInput(props: TextInputProps) {
  return (
    <input
      type="text"
      className="block w-full rounded-md border-gray-200 px-4 py-3 text-sm focus:border-blue-500 focus:ring-blue-500 dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400"
      placeholder={props.placeholder}
      value={props.textRef.current}
    />
  );
}
