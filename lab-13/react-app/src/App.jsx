
function StudentCard({ name, course, age }) {
  return (
    <div>
      <h2>Student Name: {name}</h2>
      <p>Course: {course}</p>
      <p>Age: {age}</p>
      <hr />
    </div>
  );
}

function App() {
  return (
    <div>
      <h1>Lab 13: React Props</h1>

      <StudentCard name="Ashwini" course="BCA" age={20} />
      <StudentCard name="Rahul" course="BCA" age={21} />
      <StudentCard name="Priya" course="BCA" age={19} />
    </div>
  );
}

export default App;
