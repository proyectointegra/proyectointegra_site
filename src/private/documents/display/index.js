import React from 'react';
import Layout from '../../layout';
import Deactivate from './deactivate';
import Create from './create';
import M from 'materialize-css';
import './style.css';

class DocumentsDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      documents: [
        {
          id: 1,
          name: 'Doc 1',
          link: 'https://docs.google.com/document/d/1Ua4VGUleJSiCzvKIin_jgE9nbV3lPd0hSA0SYQQswlI/edit?usp=sharing',
          created: '12-07-2019',
          status: true,
          universities: ['Latina', 'UAM']
        },
        {
          id: 2,
          name: 'Doc 1',
          link: 'https://docs.google.com/document/d/1Ua4VGUleJSiCzvKIin_jgE9nbV3lPd0hSA0SYQQswlI/edit?usp=sharing',
          created: '12-07-2019',
          status: false,
          universities: ['Latina']
        },
        {
          id: 3,
          name: 'Doc 1',
          link: 'https://docs.google.com/document/d/1Ua4VGUleJSiCzvKIin_jgE9nbV3lPd0hSA0SYQQswlI/edit?usp=sharing',
          created: '12-07-2019',
          status: true,
          universities: []
        }
      ],
      toDelete: {
        name: '',
        id: 0
      },
      displayValue: true
    }
  }

  componentDidMount() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  }

  handleDeactivate = (id, name) => {
    var elem = document.querySelector('#deactivate-doc');
    var instance = M.Modal.getInstance(elem);

    if (!instance) return;
    this.setState({
      toDelete: {
        name,
        id
      }
    });
    
    console.log(instance);

    instance.open();
  }

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({
      displayValue: JSON.parse(value)
    });
  }

  renderDocuments = (documents) => {
    return documents.map(({ id, name, link, created, status, universities }, index) => {
      const renderUniversities = universities.length == 0 ? 'No definido' : universities.map((univerty, uIndex) => {
        return (
          <li className="collection-item" key={`${index}-${uIndex}`}>{univerty}</li>
        );
      });

      return (
        <tr key={`document-${index}`}>
          <td>{name}</td>
          <td>
            {
              <ul>
                {renderUniversities}
              </ul>
            }
          </td>
          <td>{link}</td>
          <td>{created}</td>
          <td>{status ? 'Activo' : 'Inactivo'}</td>
          {
            status &&
            <td>
              <a className="btn red lighten-1" onClick={() => this.handleDeactivate(id, name)}>Desactivar</a>
            </td>
          }
        </tr>
      );
    });
  }

  render() {
    const { documents, toDelete, displayValue } = this.state;

    let filterDocuments = documents.filter((document, index) => {
      return document.status == displayValue;
    });

    const displayDocuments = this.renderDocuments(filterDocuments);
    return (
      <Layout>
        <Create></Create>
        <Deactivate
          id={toDelete.id}
          name={toDelete.name}
        ></Deactivate>
        <h4>Administración de documentos</h4>
        <div className='row'>
          <div className="input-field col s8">
            <select id="display_filter" onChange={this.handleChange} value={displayValue}>
              <option value="true">Activos</option>
              <option value="false">Inactivos</option>
            </select>
            <label>Desplegar los documentos</label>
          </div>
          <div className='col s4'>
            <a class="green light-1 btn modal-trigger" href="#create-document">Nuevo</a>
          </div>
        </div>
        <table className='striped' id='documents-table'>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Universidades</th>
              <th>Referencia</th>
              <th>Creado</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {displayDocuments}
          </tbody>
        </table>
      </Layout>
    );
  }
};

export default DocumentsDisplay;
