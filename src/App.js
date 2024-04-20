import './App.css';
import data from './data/travel'
import Navbar from './component/Navbar';
import Card from './component/Card';

function App() {
  console.log(data);
  const cardComponet = data.map(items => {
    return <Card key={items.id} items={items} />
  })

  return (
    <div className="App">
      <Navbar />
      {cardComponet}
    </div>
  );
}

export default App;
