// components/form/CheckboxGroup.jsx
export function CheckboxGroup({ label, options, value = [], onChange }) {
  return (
    <div className="w-full">
      <p className="mb-1 font-medium">{label}</p>
      <div className="flex flex-wrap gap-4">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2">
            <input
              type="checkbox"
              value={opt}
              checked={value.includes(opt)}
              onChange={(e) => onChange && onChange(opt)}
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}