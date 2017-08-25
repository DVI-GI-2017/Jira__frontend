import * as React from 'react';
import {browserHistory} from 'react-router';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

import {FormDescription} from './FormDescription/FormDescription';
import {FormHeader} from './FormHeader/FormHeader';
import {FormError} from './FormError/FormError';
import {FormInput} from './FormInput/FormInput';
import {FormLabel} from './FormLabel/FormLabel';
import {FormContent} from './FormContent/FormContent';
import FormButton from './FormButton/FormButton';
import validate from '../../service/Validators/index';
import {send, setError} from '../../actions/Form/Form.actions';
import {togglePreloader} from '../../actions/PreLoader/PreLoader.actions';
import {setCurrentUser} from '../../actions/User/User.actions';

import './Form.scss';
import set = Reflect.set;

const errors: any = {};

interface Props {
  fields?: Array<any>;
  control: string;
  error?: string;
  submit?: any;
  users?: any;
  project?: any;
  type?: string;
  send?: (url: string, data: any) => any;
  sendProject?: (url: string, data: any) => any;
  handleSubmit?: any;
  name?: string;
  setError?: (error: string) => void;
}

interface State {

}

class Form extends React.Component<Props, State> {
  _errors: any;
  _form: any;

  constructor() {
    super();

    this._errors = {};
    this._form = {};
  }

  componentWillMount() {
    this.props.setError('');
  }

  render() {
    const {handleSubmit, fields, errors, control}: any = this.props;

    const content: Array<any> = fields.map((item: any, index: number) => {
      if (item.type !== 'select') {
        return (
          <div key={index}>
            <Field
              name={item.name}
              names={item.name}
              type={item.type}
              component={this._renderField}
              label={item.title}
              description={item.description}
              placeholder={item.placeholder}
            />
          </div>
        )
      }
    });

    const selector: Array<any> = fields.map((item: any, index: number) => {
      if (item.type === 'select') {
        const options: Array<any> = item.options.map((option: any, index: number) => {
          return (
            <option key={index}>{option.title}</option>
          );
        });

        return (
          <div key={index}>
            <p>{item.title}</p>
            <select className="soflow-color">
              {options}
            </select>
          </div>
        );
      }
    });

    return (
      <div className='form__wrapper-elements'>
        <div className='wrapper__form-center'>
          <FormHeader/>
          <form
            className='form'
            name='form'
            ref={(form: any) => {
              this._form = form
            }}
            onSubmit={handleSubmit}>
            <FormError text={errors}/>
            <FormContent content={content}/>
            {selector}
            <FormButton text={control} click={this.submit.bind(this)}/>
          </form>
        </div>
      </div>
    );
  }

  submit() {
    if (this._isValid()) {
      const fields = this._getFields();

      if (window.location.pathname.indexOf('signin') !== -1) {
        this._sendForm('/signin', JSON.stringify(this._signInPack(fields)));
      } else if (window.location.pathname.indexOf('signup') !== -1) {
        this._sendForm('/signin', JSON.stringify(this._signUpPack(fields)));
      } else if (window.location.pathname.indexOf('new-project') !== -1) {
        this._sendProject('/new-project', JSON.stringify((this._newProjectPack(fields))));
      } else if (window.location.pathname.indexOf('add-user') !== -1) {
        console.log(this._getUserPack());
        this._sendProject('/add-user', JSON.stringify((this._getUserPack())));
      }
    }
  }

  private _sendForm(url: string, data: any): any {
    return this.props.send(url, data);
  }

  private _sendProject(url: string, data: any): any {
    return this.props.sendProject(url, data);
  }

  _isValid() {
    for (let error of Object.values(errors)) {
      if (error) {
        return false;
      }
    }

    return true;
  }

  _renderField({
                 input, label, type,
                 description, placeholder, names,
                 meta: {
                   touched,
                   error
                 }
               }: any) {
    errors[names] = !!error;
    return (
      <li className={(touched && error && 'error ') || (touched && !error && 'ok')}>
        <FormLabel title={label}/>
        <FormInput
          name={names}
          type={type}
          input={...input}
          placeholder={placeholder}
        />
        <FormDescription
          touched={touched}
          description={description}
          error={error}
        />
      </li>
    );
  }

  _getFields() {
    return this._form.querySelectorAll('input');
  }

  _signInPack(data: any): any {
    return {
      'email': data[0].value,
      'password': data[1].value
    };
  }

  _signUpPack(data: any): any {
    return {
      'name': data[0].value,
      'email': data[1].value,
      'password': data[2].value
    };
  }

  _newProjectPack(data: any): any {
    return {
      'title': data[0].value,
      'description': data[1].value,
      'user': JSON.parse(localStorage.getItem('user'))._id
    }
  }

  _getUserPack(): any {
    const sel: any = document.querySelectorAll('.soflow-color')[0];
    const users: any = this.props.users;

    console.log(users);
    console.log(this.props.project);
    let result: string = '';
    for (let i = 0; i < users.length; ++i) {
      if (users[i].email === sel.options[sel.selectedIndex].text) {
        result += users[i]._id
      }
    }

    return {
      'user': result,
      'project': this.props.project._id
    }
  }
}

const ReduxForm: any = reduxForm({
  form: 'form',
  validate,
  onSubmit: () => {
  }
})(Form);

const mapStateToProps = (state: any) => {
  return {
    errors: state.error,
    users: state.users.users,
    project: state.project.project
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    setError: (error: string) => {
      dispatch(setError(error));
    },

    send: async (url: string, data: any) => {
      dispatch(togglePreloader());

      const result = await send(url, data);

      if (+result.status === 200) {
        const user: any = (await result.json());
        localStorage.setItem('token', user.token);
        localStorage.setItem('user', JSON.stringify(user));

        dispatch(setCurrentUser({
          token: user.token,
          data: JSON.stringify(user)
        }));

        location.reload();
      } else {
        dispatch(setError(await result.json()));
      }

      dispatch(togglePreloader());
    },

    sendProject: async (url: string, data: any) => {
      dispatch(togglePreloader());

      const result = await send(url, data);

      if (+result.status === 200) {
        browserHistory.push('/projects');
      } else {
        dispatch(setError(await result.json()));
      }

      dispatch(togglePreloader());
    }
  }
};

export default connect<{}, {}, Props>(mapStateToProps, mapDispatchToProps)(ReduxForm);
