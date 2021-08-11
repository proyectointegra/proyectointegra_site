import React from 'react';
import './style.css';

const ArticleCard = ({ title, author, img, link }) => {
  return (
    <div className="pi-card grey lighten-3">
      <a href={link}>
        <img src={img} />
        <p href={link}><strong>{title}</strong></p>
        <p>Autor: {author}</p>
      </a>

    </div>
  );
};

export default ArticleCard;

/*
    <div className="card blog-card">
      <div className="card-image">
        <img src={img} />
      </div>
      <div className="card-content">
        <span className="card-title"><a href={link}><strong>{title}</strong></a></span>
        <p>{author}</p>
      </div>
    </div>
*/


/*
<div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img src={img} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">{title}</span>
        <p><a href="#">Leer</a></p>
      </div>
    </div>



<div>
      <h5>{title}</h5>
      <div className='row'>
        <div className='col s12'>
          <img className='responsive-img' src={img}></img>
        </div>
        <div className='col s4'>
          <p>
            Autor: {author}
          </p>
        </div>
      </div>
    </div>

*/