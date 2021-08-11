import React, { useState } from 'react';
import Title from './comps/Title';
//import UploadForm from './comps/UploadForm';
import ImageGrid from './comps/ImageGrid';
import Modal from './comps/Modal';
import Layout from '../../components/layout';
import Settings from '../../components/_settings';
import image from '../about/bg-main.png';
import transparent from '../about/transparent1.png';

function Galeria() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <Layout
    title='Proyecto Integra'
        slogan='Educar para integrar'
        destination='Ver Proyectos'
        redirect={Settings.GALLERY}
        image={image}
    >
    <div className="Galeria">
      <Title />
       {/* <UploadForm />  */}
      <ImageGrid setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
    </Layout>
  );
}

export default Galeria;
















// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA