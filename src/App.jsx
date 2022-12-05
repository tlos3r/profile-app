import './App.css';
import UI from './component/UI';
import { members } from './component/data.js';

function App() {
    return (
        <div className='App'>
            <div className='my-profile'>
                {members.map((member) => {
                    return <UI src={member.src} name={member.name} job={member.job} company={member.company} />;
                })}
            </div>
        </div>
    );
}

export default App;
