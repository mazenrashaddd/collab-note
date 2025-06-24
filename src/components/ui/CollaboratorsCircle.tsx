interface IProps {
  firstName: string;
  lastName: string;
  colorHue: number;
}

const CollaboratorCircle = ({ firstName, lastName, colorHue }: IProps) => {
  const initials = (firstName[0] + lastName[0]).toUpperCase();
  const backgroundColor = `hsl(${colorHue}, 90%, 80%)`;
  const textColor = `hsl(${colorHue}, 70%, 40%)`;
  return (
    <span
      style={{ backgroundColor, color: textColor }}
      className="text-white w-7 h-7 flex items-center justify-center text-xs font-semibold rounded-full border-2 border-white shadow-sm"
    >
      {initials}
    </span>
  );
};

export default CollaboratorCircle;
