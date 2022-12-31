import Greetings from "./Greetings";
const MyButton=()=>{
    const personName="prerna";
    const technology="react-js";
    const information="subject";
    return (
        <div>
        <button>sumbit</button>
        <Greetings name={personName} />
        <Greetings data={technology} />
        <Greetings datavalue={information} />

        </div>
        

    );
};
export default MyButton;