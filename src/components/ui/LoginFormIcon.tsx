import { Mail, LockKeyhole } from "lucide-react";

interface IProps {
  inputName: string;
}

const LoginFormIcon = ({ inputName }: IProps) => {
  if (inputName === "email") {
    return (
      <Mail
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={16}
      />
    );
  } else if (inputName === "password") {
    return (
      <LockKeyhole
        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
        size={16}
      />
    );
  }
};

export default LoginFormIcon;
