import Profile from "./Components/Profile";
function App() {
  /*  const firstName="salem "*/ /*  let lastName="bouaziz" */
  const ArrayOfStudents = [
    { studentName: "salem", isPresent: true },
    { studentName: "wafi", isPresent: false },
    { studentName: "narimen", isPresent: true },
  ];
  const prudoct={name:'qsfqef',price:'200dt'}
  const person = { firstName: "salem", lastName: "bouaziz" ,adress:'tunis'};
  const arrayOfHobbies = [
    "running",
    "playing football",
    "go to the restaurant",
  ];
  return (
    <div>
      <Profile
        person={person}
        arrayOfHobbies={arrayOfHobbies}
        ArrayOfStudents={ArrayOfStudents}
      />
    </div>
  );
}
export default App;
