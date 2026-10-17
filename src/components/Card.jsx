const Card = ({ className = "", children }) => {
  return (
    <div
      className={`rounded-xl border border-jovi/5 bg-white shadow-[0_10px_30px_6px_rgba(0,0,0,0.05)] transition duration-300 ease-in-out hover:-translate-y-1.5 ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;