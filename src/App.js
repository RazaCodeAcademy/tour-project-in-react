import React, {useState, useEffect} from 'react';
import Loading from  './Loading';
import Tours from './Tours';
import Data from './Data';

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id) => {
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () =>{
    setLoading(false)
    setTours(Data)
    // console.log(Data)
  }

  useEffect(()=>{
    fetchTours();
  }, [])

  if (loading) {
    return(
      <main>
        <Loading />
      </main>
    )
  }
  if (tours.length == 0) {
    return(
      <main>
        <center>
          <div className="mt-5">no tours left</div>
          <button className="refresh-btn" onClick={fetchTours}>Refresh</button>
        </center>
      </main>
    )
  }
  return (
    <main>
      <center>
        <Tours tours = {tours} removeTour = {removeTour}/>
      </center>
    </main>
  );
}

export default App;
