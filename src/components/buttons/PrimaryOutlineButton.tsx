type ButtonProps = {
  children?: React.ReactNode;
  onClick: () => void;
  text: string;
};

export default function PrimaryOutlineButton(props: ButtonProps) {
  return (
    <div>
      <button
        type="button"
        onClick={props.onClick}
        className="inline-flex items-center justify-center gap-2 rounded-md border-2 border-blue-200 px-4 py-3 text-sm font-semibold text-blue-500 transition-all hover:border-blue-500 hover:bg-blue-500 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
      >
        {props.text}
      </button>
    </div>
  );
}
