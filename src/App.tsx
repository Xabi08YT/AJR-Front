import {Route, Routes} from "react-router";
import Home from "./routes/Home.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route index component={Home} />
            </Routes>
        </>
    )
}

export default App;