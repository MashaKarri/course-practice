import type {
  Instructor,
  Student,
  PlatformUser,
  Admin,
} from "../types/user.types";

type CourseId = string | number;

// Union Type + typeof
export const formCourseId = (id: CourseId): string => {
  if (typeof id === "string") {
    return `COURSE - ${id.toLocaleUpperCase()}`;
  }

  return `COURSE - ${id}`;
};

export const getUserInfo = (user: Student | Instructor): void => {
  console.log(`Fullname: ${user.fullName}`);

  if ("enrolledCoursesIds" in user) {
    console.log(`Courses: ${user.enrolledCoursesIds.join(", ")}`);
    console.log(`Completed lessons: ${user.completedLessons}`);
    console.log(`Study level: ${user.studyLevel}`);
  } else {
    console.log(`Specialization: ${user.specialization}`);
    console.log(`Published courses: ${user.publishedCourses}`);
  }
};

export const showUserRole = (user: PlatformUser): string => {
  if ("enrolledCoursesIds" in user) {
    return `Student: ${user.fullName}`;
  }

  if ("specialization" in user) {
    return `Instructor: ${user.fullName}`;
  }

  if ("permissions" in user) {
    return `Admin: ${user.fullName}`;
  }

  return "Unknown role";
};

export function createPlatformUser(fullName: string, role: "student"): Student;

export function createPlatformUser(
  fullName: string,
  role: "instructor",
): Instructor;

export function createPlatformUser(fullName: string, role: "admin"): Admin;

export function createPlatformUser(
  fullName: string,
  role: "student" | "instructor" | "admin",
): Student | Instructor | Admin {
  const base = {
    id: Date.now(),
    fullName,
    email: `${fullName.toLowerCase().trim().replace(/\s+/g, ".")}@edu.com`,
  };

  if (role === "student") {
    return {
      ...base,
      enrolledCoursesIds: [],
      completedLessons: 0,
      studyLevel: "beginner",
    };
  }

  if (role === "instructor") {
    return {
      ...base,
      specialization: "Web Development",
      publishedCourses: 0,
    };
  }

  return {
    ...base,
    permissions: ["manage-courses", "manage-users"],
    isSuperAdmin: false,
  };
}
