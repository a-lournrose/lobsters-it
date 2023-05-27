import {useContext, useEffect} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import AppRouter from "./components/AppRouter";
import {useNavigate} from "react-router-dom";

function App() {
    const navigate = useNavigate();
    const {store} = useContext(Context);
    useEffect(() => {
        if(localStorage.getItem('token')) {
            store.checkAuth();
            navigate('/app');
        }
    }, [])
  return (
      <div className='app'>
          <AppRouter/>
      </div>
  );
}

export default observer(App);
