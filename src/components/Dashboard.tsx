import { useSelector } from "react-redux";
import type { RootState } from "../app/store";
import Note from "./Note";
import { notesData as staticNotesData } from "../data";
import type { INote } from "../interfaces";
import { useState, type ChangeEvent } from "react";
import Modal from "./ui/Modal";

const Dashboard = () => {
  /* ---------------------------- States ---------------------------- */
  const [notesData, setNotesData] = useState<INote[]>(staticNotesData);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [noteToEdit, setNoteToEdit] = useState<INote>({
    id: "",
    title: "",
    description: "",
    dateOfEdit: "",
    collaborators: [],
  });

  /* ---------------------------- Redux States ---------------------------- */
  const userData = useSelector((state: RootState) => {
    return state.authLogin.user;
  });

  // /* ---------------------------- useQuery Notes Fetching ---------------------------- */

  // const { data } = useCustomQuery({
  //   queryKey: ["notesData"],
  //   url: "/notes",
  //   config: {
  //     headers: {
  //       token: `ABSai ${userData?.token}`,
  //     },
  //   },
  // });
  // console.log(data?.data?.notes)

  /* ---------------------------- Handlers ---------------------------- */
  const onDeleteHandler = (id: string) => {
    setNotesData((prev) => prev.filter((note) => note.id != id));
  };

  const onEditHandler = (note: INote) => {
    setIsModalOpen(true);
    setNoteToEdit(note);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNoteToEdit((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const descriptionOnChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNoteToEdit((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  /* ---------------------------- Renders ---------------------------- */
  const renderNotes = notesData.map((note) => {
    return (
      <Note
        key={note.id}
        id={note.id}
        title={note.title}
        description={note.description}
        dateOfEdit={note.dateOfEdit}
        collaborators={note.collaborators}
        onEditHandler={onEditHandler}
        onDeleteHandler={onDeleteHandler}
      />
    );
  });

  return (
    <div>
      <div>
        <Modal
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
          modalTitle="Edit Note"
          noteToEdit={noteToEdit}
          setNoteToEdit={onEditHandler}
          onChangeHandler={onChangeHandler}
          descriptionOnChangeHandler={descriptionOnChangeHandler}
          setNotesData={setNotesData}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <span className="font-semibold text-2xl text-gray-800">
          Welcome Back, {userData?.email}
        </span>
        <span className="text-gray-600">
          You have {notesData.length} notes in your workspace
        </span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
        {renderNotes}
      </div>
    </div>
  );
};

export default Dashboard;
