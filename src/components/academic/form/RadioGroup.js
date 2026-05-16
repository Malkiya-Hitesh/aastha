// components/form/RadioGroup.jsx
export function RadioGroup({ label, name, options, value, onChange }) {
  return (
    <div>
      <p className="mb-1 font-medium">{label}</p>
      <div className="flex gap-4">
        {options.map((opt) => (
          <label key={opt} className="flex items-center gap-2">
            <input
              type="radio"
              name={name}
              value={opt}
              checked={value === opt}
              onChange={(e) => onChange && onChange(e.target.value)}
            />
            {opt}
          </label>
        ))}
      </div>
    </div>
  );
}