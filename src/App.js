import Header from "./components/Header";
import './App.scss';
import store from "./redux/store";
import {Provider} from 'react-redux';
import Sidebar from "./components/Sidebar";
import Mainbar from "./components/Mainbar";


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header/>
        <div className="mainArea">
          <Sidebar/>
          <Mainbar/>
        </div>
      </div>
    </Provider>
  );
}

export default App;
