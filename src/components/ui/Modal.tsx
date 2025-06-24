import { Dialog } from "@headlessui/react";
import type { ChangeEvent, Dispatch, SetStateAction } from "react";
import type { INote } from "../../interfaces";
import { ArrowLeft, Clock3, UsersRound } from "lucide-react";
import { memo } from "react";

interface IProps {
  modalTitle: string;
  noteToEdit: INote;
  setNoteToEdit: (note: INote) => void;
  onChangeHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  descriptionOnChangeHandler: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  isModalOpen: boolean;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setNotesData: Dispatch<SetStateAction<INote[]>>;
}

const Modal = ({
  isModalOpen,
  setIsModalOpen,
  modalTitle,
  noteToEdit,
  onChangeHandler,
  descriptionOnChangeHandler,
  setNotesData,
}: IProps) => {
  return (
    <Dialog
      open={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="w-full max-w-md space-y-1 rounded-xl bg-white shadow-lg">
          <div className="flex justify-between items-center border-b-1 border-gray-300 px-5 py-3">
            <div className="flex items-center space-x-3">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                }}
                className="cursor-pointer"
              >
                <ArrowLeft size={20} className="text-gray-700" />
              </button>
              <span className="text-gray-700">{modalTitle}</span>
            </div>
          </div>
          <div className="px-6 py-4 space-y-3">
            <div className="flex text-sm text-gray-600 space-x-2">
              <div className="flex items-center space-x-1 px-1">
                <Clock3 size={15} className="flex items-center" />
                <span className="text-gray-600">{`Last edited: ${noteToEdit.dateOfEdit}`}</span>
              </div>
              <div className="flex items-center space-x-1">
                <UsersRound size={15} />
                <span>
                  {noteToEdit.collaborators.length}{" "}
                  {noteToEdit.collaborators.length > 1
                    ? "Collaborators"
                    : "Collaborator"}
                </span>
              </div>
              <div></div>
            </div>
            <input
              type="text"
              name="title"
              className="text-xl text-gray-800 font-semibold border border-gray-300 rounded-md px-3 py-1"
              value={noteToEdit.title}
              onChange={onChangeHandler}
            />

            <textarea
              name="description"
              className="w-full text-sm text-gray-800 border border-gray-300 rounded-md px-3 py-2 resize-none"
              value={noteToEdit.description}
              onChange={descriptionOnChangeHandler}
            ></textarea>

            <div className="flex justify-end space-x-2">
              <button
                onClick={() => {
                  setIsModalOpen(false);
                }}
                className="px-4 py-2 rounded bg-gray-400 hover:bg-gray-500 text-sm"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  const date = new Date();
                  const formattedDate = date.toLocaleDateString("en-US", {
                    month: "short",
                    day: "numeric",
                    year: "numeric",
                  });
                  setNotesData((notes) =>
                    notes.map((note) =>
                      note.id === noteToEdit.id
                        ? {
                            ...noteToEdit,
                            dateOfEdit: `${formattedDate}`,
                          }
                        : note
                    )
                  );
                  setIsModalOpen(false);
                }}
                className="px-4 py-2 rounded bg-blue-500 hover:bg-blue-600 text-white text-sm"
              >
                Submit
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default memo(Modal);
