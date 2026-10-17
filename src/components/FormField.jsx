const FormField = ({ label, id, erro, multiline = false, ...props }) => {
  const classes = `rounded-lg border bg-white px-4 py-3 text-[0.95rem] outline-none focus:border-jovi focus:ring-[3px] focus:ring-[#3d5afe]/15 sm:text-base lg:text-[0.95rem] ${
    erro ? "border-red-500" : "border-black/15"
  }`;

  return (
    <div className="flex flex-col gap-[0.3rem] sm:gap-[0.4rem]">
      <label
        htmlFor={id}
        className="text-[0.95rem] font-semibold sm:text-[1.1rem] lg:text-[0.9rem]"
      >
        {label}
      </label>

      {multiline ? (
        <textarea
          id={id}
          name={id}
          className={`${classes} min-h-28 resize-y`}
          {...props}
        />
      ) : (
        <input id={id} name={id} className={classes} {...props} />
      )}

      {erro && <span className="text-sm text-red-600">{erro}</span>}
    </div>
  );
};

export default FormField;
