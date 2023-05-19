import {useContext, useEffect} from "react";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import AppRouter from "./components/AppRouter";

function App() {
    const {store} = useContext(Context);
    useEffect(() => {
        if(localStorage.getItem('token')) {
            store.checkAuth();
        }
    }, [])
  return (
      <div className='app'>
          <AppRouter/>
      </div>
  );
}

export default observer(App);
