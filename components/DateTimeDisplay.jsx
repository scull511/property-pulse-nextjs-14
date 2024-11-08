const DateTimeDisplay = ({ message }) => {
  return <>{new Date(message.createdAt)}</>;
};

export default DateTimeDisplay;
