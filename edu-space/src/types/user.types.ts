export type UserBase = {
  id: number;
  fullName: string;
  email: string;
};

export type InstructorProfile = {
  specialization: string;
  publishedCourses: number;
};

export type Instructor = UserBase & InstructorProfile;

// const instructor: Instructor = {
//   id: 1,
//   fullName: "Kateryna Super",
//   email: "kateryna@gmail.com",
//   specialization: "Frontend",
//   publishedCourses: 5,
// };

export type StudentProfile = {
  enrolledCoursesIds: number[];
  completedLessons: number;
  studyLevel: "beginner" | "intermediate" | "advanced";
};

export type Student = UserBase & StudentProfile;

// const student: Student = {
//   id: 2,
//   fullName: "Mariya",
//   email: "maria777@gmail.com",
//   enrolledCoursesIds: [1, 2, 3],
//   completedLessons: 15,
//   studyLevel: "advanced",
// };

// intersection створення з кількох типів один складений

export type AdminProfile = {
  isSuperAdmin: boolean;
  permissions: string[];
};

export type Admin = UserBase & AdminProfile;

export type PlatformUser = Student | Instructor | Admin;

export type UserProfile = {
  bio?: string;
  avatar?: {
    url: string;
    alt: string;
  };
};

export type User = {
  id: number;
  fullName: string;
  profile?: UserProfile;
};
