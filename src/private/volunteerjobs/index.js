import React from 'react';
import Layout from '../layout';
import Deactivate from './deactivate';
import Create from './create';
import M from 'materialize-css';

class VolunteerJobs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: [
        {
          id: 1,
          name: 'Doc 1',
          description: 'es cool',
          created: '12-07-2019',
          status: true,
        },
        {
          id: 1,
          name: 'Doc 1',
          description: 'es cool',
          created: '12-07-2019',
          status: true,
        },
        {
          id: 1,
          name: 'Doc 1',
          description: 'es cool',
          created: '12-07-2019',
          status: false,
        }
      ],
      updateJob: {
        name: '',
        id: 0
      },
      displayValue: true
    }
  }

  componentDidMount() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
  }

  handleDeactivate = (id, name) => {
    var elem = document.querySelector('#deactivate');
    var instance = M.Modal.getInstance(elem);

    console.log(elem);
    console.log(instance);
    if (!instance) return;
    this.setState({
      toDelete: {
        name,
        id
      }
    });

    instance.open();
  }

  handleActivate = (id, name) => {
    var elem = document.querySelector('#activate');
    var instance = M.Modal.getInstance(elem);

    if (!instance) return;
    this.setState({
      updateJob: {
        name,
        id
      }
    });

    instance.open();
  }

  handleChange = (event) => {
    const { value } = event.target;

    this.setState({
      displayValue: JSON.parse(value)
    });
  }

  renderJobs = (jobs) => {
    return jobs.map(({ id, name, description, created, status }, index) => {
      return (
        <tr key={`document-${index}`}>
          <td>{name}</td>
          <td>{description}</td>
          <td>{created}</td>  
          <td>{status ? 'Activo' : 'Inactivo'}</td>
          {
            status ?
            <td>
              <a className="btn red" onClick={() => this.handleDeactivate(id, name)}>Desactivar</a>
            </td> :
            <td>
              <a className="btn green" onClick={() => this.handleDeactivate(id, name)}>Activar</a>
            </td>
          }
        </tr>
      );
    });
  }

  render() {
    const { jobs, updateJob, displayValue } = this.state;

    let filterJobs = jobs.filter((job, index) => {
      return job.status == displayValue;
    });

    const displayJobs = this.renderJobs(filterJobs);
    return (
      <Layout>
        <Create></Create>
        <Deactivate
          id=''
          name=''
        ></Deactivate>
        <h4>Administración de trabajos voluntariados</h4>
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
              <th>Descripcion</th>
              <th>Creado</th>
              <th>Estado</th>
            </tr>
          </thead>
          <tbody>
            {displayJobs}
          </tbody>
        </table>
      </Layout>
    );
  }
};

export default VolunteerJobs;
