import { PenLine, Trash2 } from "lucide-react";
import CollaboratorCircle from "./ui/CollaboratorsCircle";
import type { ICollaborator, INote } from "../interfaces";

interface IProps {
  id: string;
  title: string;
  description: string;
  dateOfEdit: string;
  collaborators: ICollaborator[];
  onEditHandler: (note: INote) => void;
  onDeleteHandler: (id: string) => void;
}

const Note = ({
  id,
  title,
  description,
  dateOfEdit,
  collaborators,
  onEditHandler,
  onDeleteHandler,
}: IProps) => {
  /* ---------------------------- Handlers ---------------------------- */
  const handleCollaboratorColor = (lastName: string) => {
    const firstChar = lastName[0].toUpperCase();
    const alphaIndex = firstChar.charCodeAt(0) - 65;
    const hue = (alphaIndex / 26) * 360;
    return hue;
  };

  /* ---------------------------- Renders ---------------------------- */
  const renderCollaboratorsCircles = collaborators.map((collaborator, idx) => {
    return (
      <CollaboratorCircle
        key={idx}
        firstName={collaborator.firstName}
        lastName={collaborator.lastName}
        colorHue={handleCollaboratorColor(collaborator.lastName)}
      />
    );
  });

  return (
    <div className=" bg-white rounded-2xl p-3 shadow-md justify-between space-y-3">
      <div className="flex justify-between">
        <span className="text-gray-800 text-lg font-semibold">{title}</span>
        <div className="flex items-center space-x-2">
          <PenLine
            size={18}
            className="cursor-pointer text-gray-500 hover:text-blue-500 transition-colors duration-200"
            onClick={() => {
              onEditHandler({
                id,
                title,
                description,
                dateOfEdit,
                collaborators,
              });
            }}
          />
          <Trash2
            size={18}
            className="cursor-pointer text-gray-500 hover:text-red-500 transition-colors duration-200"
            onClick={() => {
              onDeleteHandler(id);
            }}
          />
        </div>
      </div>
      <div className="min-h-20">
        <span className="text-gray-600 text-sm leading-none">
          {description}
        </span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-gray-500 text-sm">{`Edited ${dateOfEdit}`}</span>
        <div className="flex -space-x-1">{renderCollaboratorsCircles}</div>
      </div>
    </div>
  );
};

export default Note;
