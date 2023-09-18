import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import store from './store';
import { Provider } from 'react-redux';

//MDB
import { 
  MDBContainer,
  MDBRow,
  MDBCol,
} from 'mdb-react-ui-kit';

//component
import List from './component/user/list';
import Registration from './component/user/registration';
import Navbar from './component/user/navbar';

function App() {
  return (
    <Provider store={store}>
      <>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="12">
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Navbar />}>
                    <Route index element={<List />} />
                    <Route path="register" element={<Registration />} />
                  </Route>
                </Routes>
              </BrowserRouter>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </>
    </Provider>
  );
}

export default App;
