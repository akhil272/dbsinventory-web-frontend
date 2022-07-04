interface Props {
  bgColor?: string;
  children?: React.ReactNode;
  onClick: () => void;
  width?: string;
  textSize?: string;
  fontWeight?: string;
}

const Button: React.FC<Props> = ({
  bgColor = "bg-primary",
  children,
  onClick,
  width = "w-full",
  textSize = "text-md",
  fontWeight = "font-medium",
}) => {
  return (
    <button
      onClick={onClick}
      className={`${bgColor} ${width} rounded-lg ${textSize} ${fontWeight} text-center text-white p-2`}
    >
      {children}
    </button>
  );
};

export default Button;
