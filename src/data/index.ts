import { v4 as uuidv4 } from "uuid";

import type {
  ILoginForm,
  INote,
  IRegisterForm,
  IResetPasswordForm,
} from "../interfaces";

export const loginFormInputData: ILoginForm[] = [
  {
    label: "Email address",
    placeholder: "you@example.com",
    type: "string",
    name: "email",
  },
  {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    name: "password",
  },
];

export const registerFormInputData: IRegisterForm[] = [
  {
    label: "Email address",
    placeholder: "you@example.com",
    type: "string",
    name: "email",
  },
  {
    label: "Password",
    placeholder: "Enter your password",
    type: "password",
    name: "password",
  },
  {
    label: "Confirm Password",
    placeholder: "Re-enter your password",
    type: "password",
    name: "confirmPassword",
  },
];

export const resetPasswordFormInputData: IResetPasswordForm[] = [
  {
    label: "Email address",
    placeholder: "you@example.com",
    type: "string",
    name: "email",
  },
];

export const notesData: INote[] = [
  {
    id: uuidv4(),
    title: "Project Roadmap 2025",
    description:
      "Strategic planning for Q3-Q4 product releases. Need to finalize feature priorities and resource allocation.",
    dateOfEdit: "Apr 12, 2025",
    collaborators: [
      { firstName: "Ramy", lastName: "Jason", color: "blue" },
      { firstName: "Ali", lastName: "Khan", color: "green" },
      { firstName: "Mounir", lastName: "Nour", color: "purple" },
    ],
  },
  {
    id: uuidv4(),
    title: "Team Meeting Summary",
    description:
      "Notes from the April sync meeting. Discussed upcoming deadlines, performance reviews, and onboarding.",
    dateOfEdit: "Apr 15, 2025",
    collaborators: [
      { firstName: "Laila", lastName: "Hassan", color: "yellow" },
      { firstName: "Ziad", lastName: "Farouk", color: "red" },
    ],
  },
  {
    id: uuidv4(),
    title: "Client Feedback Review",
    description:
      "Compiled feedback from Q2 client interviews. Several concerns about mobile performance and UX flow.",
    dateOfEdit: "May 1, 2025",
    collaborators: [
      { firstName: "Sara", lastName: "Maged", color: "pink" },
      { firstName: "Omar", lastName: "ElSharkawy", color: "green" },
    ],
  },
  {
    id: uuidv4(),
    title: "Marketing Campaign Ideas",
    description:
      "Brainstorming notes for the summer 2025 campaign. Focus on social media influencers and SEO blog content.",
    dateOfEdit: "May 5, 2025",
    collaborators: [{ firstName: "Nour", lastName: "Kamal", color: "cyan" }],
  },
  {
    id: uuidv4(),
    title: "Design Sprint Notes",
    description:
      "Results from design sprint with UX team. Proposed new onboarding experience and dark mode toggle.",
    dateOfEdit: "May 8, 2025",
    collaborators: [
      { firstName: "Kareem", lastName: "Fathy", color: "orange" },
      { firstName: "Rana", lastName: "Saad", color: "teal" },
    ],
  },
  {
    id: uuidv4(),
    title: "Budget Estimates Q3",
    description:
      "Initial budget forecasts for Q3 2025. Awaiting final numbers from finance before submission.",
    dateOfEdit: "May 10, 2025",
    collaborators: [{ firstName: "Mira", lastName: "Adel", color: "lime" }],
  },
];
