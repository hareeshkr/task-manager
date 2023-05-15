interface IProps {
  label: string;
  onClick: () => void;
  type?: "button" | "submit" | "reset" | undefined;
  buttonType: "primary" | "transparent" | "danger";
  title?: string;
}

const Button = ({ label, onClick, type, buttonType, title }: IProps) => {
  return (
    <button
      className={`button-primary ${
        buttonType === "transparent" && "button-transparent"
      } ${buttonType === "danger" && "button-danger"}`}
      onClick={onClick}
      type={type}
      title={title}
    >
      {label}
    </button>
  );
};

export default Button;
