// components/form/Input.jsx
export function Input({ label, id, type = "text", ...props }) {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block mb-1 font-medium">
        {label}
      </label>
      <input
        id={id}
        type={type}
        className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        {...props}
      />
    </div>
  );
}