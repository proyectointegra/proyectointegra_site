import React from 'react';

class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      link: '',
      selectedUniversities: {}
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const id = target.id;

    const { state } = this;
    this.setState({
      ...state,
      [id]: value
    });
  }

  renderUniverties = () => {
    // call to api
    const universities = [
      {
        name: 'Universidad Latina',
        id: 1
      },
      {
        name: 'Universidad San Marcos',
        id: 2
      },
      {
        name: 'Universidad Hispanoamericana',
        id: 3
      },
      {
        name: 'Universidad De la Salle',
        id: 4
      },
      {
        name: 'Universidad Americana',
        id: 5
      },
    ];

    return universities.map((university, index) => {
      return (
        <p key={`university-${index}`}>
          <label>
            <input
            id={university.name}
            onChange={this.handleChange}
            type="checkbox"
            checked={this.state[university.name]} />
            <span>{university.name}</span>
          </label>
        </p>
      );
    });
  }

  render() {
    const { name, link } = this.state;
    const universities = this.renderUniverties();

    return (
      <div id="create-document" class="modal modal-fixed-footer">
        <div class="modal-content">
          <h4>Crear documento</h4>
          <form>
            <div className="row">
              <div className="input-field col s10">
                <input
                  value={name}
                  id="name"
                  type="text"
                  className="validate invalid"
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="name">Nombre del document</label>
                <span className="helper-text" data-error="Ingrese el nombre" data-success=""></span>
              </div>
              <div className="input-field col s12">
                <input
                  value={link}
                  id="link"
                  type="text"
                  className="validate invalid"
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="canton">Link del documento</label>
                <span className="helper-text" data-error="Ingrese el link" data-success=""></span>
              </div>
              <div className='input-field col s12'>
                <p>Seleccione las universidades a las que aplica:</p>
                {universities}
              </div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <a href="#!" class="modal-close waves-effect waves-green btn-flat">Crear</a>
        </div>
      </div>
    );
  }
};

export default Create;