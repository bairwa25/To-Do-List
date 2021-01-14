import Header from './Components/Header';
import Footer from './Components/Footer';
import List from './Components/List';
import {Container} from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <Container>
        <List />
      </Container>
      <Footer />  
    </div>
  );
}

export default App;
