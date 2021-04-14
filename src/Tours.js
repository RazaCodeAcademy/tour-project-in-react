import React, {useState} from 'react';
import Tour from './Tour';
function Tours({tours, removeTour}) {
//   const [people, setPeople] = useState(Data);
  return (
    <section>
      <div class="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
        <div>
          {
            tours.map((tour)=>{
              return (
                <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>
              )
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Tours;
