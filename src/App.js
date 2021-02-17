import './App.css';
import LinearChart from "./components/Chart";
import BarChart from "./components/BarChart";
import {Divider} from "@material-ui/core";

function App() {

    return (
        <div className="App">
            <header className="App-header">
                <LinearChart/>
                <Divider/>
                <BarChart/>
            </header>
        </div>
    );
}

export default App;
