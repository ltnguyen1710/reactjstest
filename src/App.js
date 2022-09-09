import SignIn from './components/SignIn';
import './App.css';
import { signinSelector, } from './redux/selectors';
import { useSelector } from 'react-redux';
import Catalog from './components/Catalog'

function App() {
  const signinCheck = useSelector(signinSelector)
  
  return (
    <div>
      {signinCheck || <SignIn checkLog={signinCheck}></SignIn>}
      {signinCheck && <Catalog></Catalog>}
    </div>
  );
}

export default App;
