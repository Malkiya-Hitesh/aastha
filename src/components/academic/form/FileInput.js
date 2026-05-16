// components/form/FileInput.jsx
export function FileInput({ label, id, ...props }) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block mb-1 font-medium">
        {label}
      </label>
      <input
        id={id}
        type="file"
        className="w-full border border-gray-300 rounded-md px-3 py-2"
        {...props}
      />
    </div>
  );
}