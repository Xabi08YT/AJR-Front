import {Route, Routes} from "react-router";
import Home from "./routes/Home.tsx";
import NavigationComponent from "./components/navigation/NavigationComponent.tsx";

function App() {
    return (
        <>
            <NavigationComponent />
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
        </>
    )
}

export default App;