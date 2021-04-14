import React, {useState} from 'react';

function Tour({id, image, info, price, name, removeTour}) {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p className="text-adjustment">{ readMore ? info :`${info.substring(0, 200)}...` }
          <button className="read-btn" onClick={()=> setReadMore(!readMore)}>
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button className="delete-btn" onClick={()=> removeTour(id)}>Not Interested</button>
      </footer>
    </article>
  );
}

export default Tour;
