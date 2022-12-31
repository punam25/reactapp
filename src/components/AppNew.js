import MyButton from "./MyButton";
import "./app-new.css";

function AppNew(){
    const name = 'Josh Perez';
    const element = <h1>hello {name}</h1>;

    function greet(name){
        return <h3>welcome {name}</h3>;
    }

    return(
        <div class="app-new">
            <h1>testing</h1>
            {element}
            {greet("world")}
            <MyButton />

        </div>
    );
    
}
export default AppNew;