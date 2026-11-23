import type { Admin, Instructor, Student } from "./types/user.types";

import {
  createPlatformUser,
  formCourseId,
  showUserRole,
} from "./utils/userHelpers";

import { courses } from "./data/courses";

import {
  getInstructorName,
  getCertificateUrl,
  getCourseRating,
} from "./utils/courseHelpers";

function App() {
  const student: Student = createPlatformUser("Mariya", "student");
  const instructor: Instructor = createPlatformUser("Kateryna", "instructor");
  const admin: Admin = createPlatformUser("Admin", "admin");

  return (
    <main className="page">
      <section className="hero">
        <p className="eyebrow">EduSpace Platform</p>
        <h1>Learn. Create. Grow.</h1>
        <p>
          Welcome to EduSpace - your platform for learning new skills and
          developing your knowledge
        </p>
      </section>

      <section className="section">
        <h2>Platform Users</h2>

        <div className="grid">
          <article className="panel">
            <p className="eyebrow">Student</p>
            <h3>{student.fullName}</h3>
            <p>{showUserRole(student)}</p>
            <p>Email: {student.email}</p>
            <p>Completed lessons: {student.completedLessons}</p>
            <p>Study level: {student.studyLevel}</p>
            <p>Enrolled courses: {student.enrolledCoursesIds.length}</p>
          </article>

          <article className="panel">
            <p className="eyebrow">Instructor</p>
            <h3>{instructor.fullName}</h3>
            <p>{showUserRole(instructor)}</p>
            <p>Email: {instructor.email}</p>
            <p>Specialization: {instructor.specialization}</p>
            <p>Published courses: {instructor.publishedCourses}</p>
          </article>

          <article className="panel">
            <p className="eyebrow">Administrator</p>
            <h3>{admin.fullName}</h3>
            <p>{showUserRole(admin)}</p>
            <p>Email: {admin.email}</p>
            <p>Super admin: {admin.isSuperAdmin ? "Yes" : "No"}</p>
            <p>Permissions: {admin.permissions.join(", ")}</p>
          </article>
        </div>
      </section>

      <section className="section">
        <h2>Available Courses</h2>

        <div className="grid">
          {courses.map((course) => (
            <article className="panel" key={course.id}>
              <p className="course-category">{course.category}</p>

              <h3>{course.title}</h3>

              <p>{course.description}</p>

              <div className="details">
                <p>
                  <strong>Course ID:</strong> {formCourseId(course.id)}
                </p>

                <p>
                  <strong>Duration:</strong> {course.duration} hours
                </p>

                <p>
                  <strong>Instructor:</strong> {getInstructorName(course)}
                </p>

                <p>
                  <strong>Rating:</strong> {getCourseRating(course)}
                </p>

                <p>
                  <strong>Certificate:</strong> {getCertificateUrl(course)}
                </p>

                <p>
                  <strong>Language:</strong>{" "}
                  {course.metadata?.language ?? "Not specified"}
                </p>

                <p>
                  <strong>Level:</strong>{" "}
                  {course.metadata?.level ?? "Not specified"}
                </p>

                <p>
                  <strong>Practical works:</strong>{" "}
                  {course.metadata?.practicalWorks ?? 0}
                </p>

                <p>
                  <strong>Has certificate:</strong>{" "}
                  {course.metadata?.hasCertificate ? "Yes" : "No"}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
