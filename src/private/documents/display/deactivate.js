import React from 'react';

const Deactivate = ({ id, name }) => {
  return (
    <div id="deactivate-doc" className="modal green lighten-2 bottom-sheet">
      <div className="modal-content">
        <h4 className='white-text'>Esta seguro que desea desactivar el documento <strong>{name}</strong></h4>
        <h6 className='white-text'>Esta acción es irreversible</h6>
      </div>
      <div className="modal-footer">
        <div className='row'>
          <div className='col s4'>
            <a href="#!" className="modal-close waves-effect red white-text btn-flat">Desactivar</a>
          </div>
          <div className='col s4'>
            <a href="#!" className="modal-close waves-light green white-text lighten-1 btn-flat">Cancelar</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Deactivate;
