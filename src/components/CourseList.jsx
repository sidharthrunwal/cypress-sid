import Course from './Course';

const CourseList = ({courses, selected, toggleSelected, disabled, isAdmin}) => (
  <div className="course-list">
    { courses.map(([id, course]) => <Course key={id} id={id} course={course} selected={selected} toggleSelected={toggleSelected} disabled={disabled} isAdmin={isAdmin}/>) }
  </div>
);

export default CourseList;