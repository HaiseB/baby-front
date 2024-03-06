export function InputRange({ value, onChange }) {
    return <div>
        <input
            type="range"
            className="form-range"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            min={0}
            max={10}
        />
    </div>
}