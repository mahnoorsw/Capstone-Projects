import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FirstPage from './firstpage';
import SecondPage from './secondpage';
import ThirdPage from './thirdpage';
import Tenzies from './Tenzies';
import BodyClassSetter from './components/BodyClassSetter';

function App() {
    return (
        <Router>
            <BodyClassSetter />  {/* This component dynamically sets the body class */}
            <Routes>
                <Route path="/firstpage" element={<FirstPage />} />
                <Route path="/secondpage" element={<SecondPage />} />
                <Route path="/thirdpage" element={<ThirdPage />} />
                <Route path="/tenzies" element={<Tenzies />} />
            </Routes>
        </Router>
    );
}

export default App;
