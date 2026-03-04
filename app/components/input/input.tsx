interface MyInput {
  id?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
  min?: number;
  max?: number;
  defaultValue?: string;
  accept?: string;
  value?: string;
  error?: string;
  success?: string;
  roundedFull?: boolean;
  paddingFull?: boolean;
  className?: string;
  maxLength?: number;
  minLength?: number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface MyTextarea {
  id?: string;
  label?: string;
  name?: string;
  placeholder?: string;
  rows?: number;
  cols?: number;
  className?: string;
  success?: string;
  error?: string;
  value?: string;
  min?: number;
  max?: number;
  defaultValue?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export const input = (InputProps: MyInput) => {
  const {
    label,
    id,
    name,
    placeholder,
    type,
    min,
    max,
    maxLength,
    minLength,
    defaultValue,
    className,
    required,
    onChange,
    success,
    error,
    value,
  } = InputProps;
  return (
    <>
      <div className="flex gap-0.5 flex-col w-full">
        {label && (
          <label htmlFor={id} className="my-2">
            {label}
            {required && <span>*</span>}
          </label>
        )}
        <input
          id={id}
          name={name}
          placeholder={placeholder}
          type={type}
          required={required}
          min={min}
          max={max}
          maxLength={maxLength}
          minLength={minLength}
          defaultValue={defaultValue}
          value={value}
          onChange={onChange}
          className={`lg:py-4 py-2.5  lg:px-8 px-6 border border-gray-300 rounded-full w-full focus:ring-4 focus:ring-orange-500 ${className}`}
        />
        {error && <span className="error">{error}</span>}
        {success && <span className="success">{success}</span>}
      </div>
    </>
  );
};

export const textArea = (textAreaProps: MyTextarea) => {
  const {
    id,
    label,
    name,
    placeholder,
    rows,
    cols,
    className,
    error,
    success,
    value,
    onChange,
    required,
    max,
  } = textAreaProps;
  return (
    <>
      <div className="flex gap-0.5 flex-col w-full">
        {label && (
          <label htmlFor={id} className="my-2">
            {label}
            {required && <span>*</span>}
          </label>
        )}
        <textarea
          name={name}
          placeholder={placeholder}
          rows={rows || 4}
          cols={cols || 50}
          maxLength={max}
          className={`w-full px-6 py-3 mt-2 border border-gray-300 rounded-3xl focus:ring-4 focus:ring-orange-500 transition duration-200 ${className || ""}`}
          value={value}
          onChange={onChange}
          required={required}
        />
        {max && <span>Maxmimum characters hit</span>}
        {error && <span className="error">{error}</span>}
        {success && <span className="success">{success}</span>}
      </div>
    </>
  );
};
