const Input = ({ lable = '', placeholder = '', type = 'text', prepend = null, isOptional = false, ...rest }) => {
  return (
    <div className="input-box">
      <label htmlFor={lable} className="form-label" style={{ marginRight: 'auto' }}>
        {lable} {isOptional && <span className="muted"> (optional)</span>}
      </label>
      <div className=" input-group">
        {prepend && <span className="input-group-text prepend">{prepend}</span>}
        <input type={type} className="form-control" id={lable} placeholder={placeholder} {...rest} />
      </div>
    </div>
  );
};

export default Input;
