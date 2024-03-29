import './App.css';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import SideBar from './components/SideBar';
import Content from './components/Content';
import 'primeicons/primeicons.css';



function App() {
  return (
    <div className="container">
      <SideBar />
      <Content />
    </div>
  );
}

export default App;
