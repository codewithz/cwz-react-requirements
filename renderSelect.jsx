export const renderSelect = (
  label,
  id,
  options,
  schema,
  data,
  setData,
  errors,
  setErrors
) => {
  return (
    <div className="form-group mt-3">
      <label htmlFor={id}>{label}</label>
      <select
        onChange={(e) =>
          handleChange(e, schema, data, setData, errors, setErrors)
        }
        value={data.genreId}
        id={id}
        className="form-control mt-2"
      >
        <option value="" />
        {options.map((option) => (
          <option key={option._id} value={option._id}>
            {option.name}
          </option>
        ))}
      </select>
      {errors[id] && <div className="alert alert-danger">{errors[id]}</div>}
    </div>
  );
};
