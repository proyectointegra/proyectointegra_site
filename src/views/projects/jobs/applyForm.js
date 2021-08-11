import React from 'react'
import M from 'materialize-css';
import MailService from '../../../services/mail';

class ApplyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        name: '',
        canton: '',
        email: '',
        phone: '',
        uni: 'default',
        uni_other: '',
        career: '',
        schedule: '',
        hasExp: false,
        comment: '',
      }
    };
  }

  componentDidMount() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, {});
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, {});
  }

  handleChange = (event) => {
    const { form } = this.state;
    const { id, value } = event.target;

    this.setState({
      form: {
        ...form,
        [id]: value,
      }
    });
  }

  handleSend = (event) => {
    event.preventDefault();

    const { name, canton, email, phone, uni, uni_other, career, schedule, hasExp, comment } = this.state.form;

    if (name == '') return;
    if (email == '') return;
    if (phone == '') return;

    const university = uni != 'other' ? uni : uni_other;

    MailService.volunteerEmail({ name, canton, email, phone, university, career, schedule, hasExp, comment });

    const elem = document.querySelector('.modal');
    const instance = M.Modal.getInstance(elem);
    instance.close();
  }

  render() {
    const { name, canton, email, phone, uni, uni_other, career, schedule, hasExp, comment } = this.state.form;

    return (
      <div id="modal-proyecto" className="modal modal-fixed-footer">
        <div className="modal-content">
          <h4>Quiero ser voluntario(a)</h4>
          <h6 className="grey-text text-darken-1">Ocupo un titulo aca</h6>
          <p className="grey-text">Escribí tus datos para ponernos en contacto y que empecés a trabajar con nosotros.</p>
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
                <label htmlFor="name">Nombre</label>
                <span className="helper-text" data-error="Ingrese el nombre" data-success=""></span>
              </div>
              <div className="input-field col s7">
                <input
                  value={canton}
                  id="canton"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="canton">Cantón de residencia</label>
              </div>
              <div className="input-field col s7">
                <input
                  value={email}
                  id="email"
                  type="email"
                  className="validate invalid"
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="email">Correo electrónico</label>
                <span className="helper-text" data-error="Ingrese el correo electronico" data-success=""></span>
              </div>
              <div className="input-field col s3">
                <input
                  value={phone}
                  id="phone"
                  type="tel"
                  className="validate invalid"
                  onChange={this.handleChange}
                  required
                />
                <label htmlFor="cel">Teléfono</label>
                <span className="helper-text" data-error="Ingrese un numero de contacto" data-success=""></span>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s5">
                <select id="uni" onChange={this.handleChange} value={uni}>
                  <option value="default" disabled>Seleccioná una</option>
                  <option value="Universidad Latina">Universidad Latina</option>
                  <option value="Universidad Americana">Universidad Americana</option>
                  <option value="Universidad San Marcos">Universidad San Marcos</option>
                  <option value="Universidad La Salle">Universidad La Salle</option>
                  <option value="Universidad Hispanoamericana">Universidad Hispanoamericana</option>
                  <option value="other">Otra</option>
                </select>
                <label htmlFor="uni">Universidad</label>
              </div>
              {
                uni == 'other' &&
                <div className="input-field col s5">
                  <input id="uni_other" value={uni_other} onChange={this.handleChange} type="text" className="validate" />
                  <label htmlFor="uni_other">¿Cuál?</label>
                </div>
              }
              <div className="input-field col s10">
                <input id="career" type="text" onChange={this.handleChange} value={career} className="validate" />
                <label htmlFor="career">Carrera que cursás</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s10">
                <input
                  value={schedule}
                  id="schedule"
                  type="text"
                  className="validate"
                  onChange={this.handleChange}
                />
                <label htmlFor="schedule">Indicanos tu horario</label>
              </div>
              <div className="col s10">
                <p>¿Tenés experiencia brindando tutorías, cursos o talleres?</p>
                <p>
                  <label>
                    <input id='hasExp' onChange={this.handleChange} className="with-gap" name="exp" type="radio" value='true' selected />
                    <span>Sí</span>
                  </label>
                  <label>
                    <input id='hasExp' onChange={this.handleChange} className="with-gap" name="exp" type="radio" value='false' />
                    <span>No</span>
                  </label>
                </p>
              </div>
              <div className="input-field col s12">
                <textarea
                  id="comment"
                  className="materialize-textarea"
                  onChange={this.handleChange}
                  value={comment}
                ></textarea>
                <label htmlFor="comment">Comentarios</label>
              </div>
            </div>
          </form>
        </div>
        <div className="modal-footer">
          <button
            href="#!"
            className="waves-effect waves-green btn-flat"
            type='Submit'
            onClick={this.handleSend}
          >
            Enviar
            </button>
        </div>
      </div>
    );
  }
};

export default ApplyForm;
