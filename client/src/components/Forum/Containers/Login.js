import React, { Component } from 'react';
import PostCard from '../Components/PostCard';
import SimpleBox from '../Components/SimpleBox';
import InputField from '../Components/InputField';
import FooterFormButton from '../Components/FooterFormButton';
import { login, getUser } from '../Actions/UserActions';
import { connect } from 'react-redux';
import ErrorAlert from '../Components/ErrorAlert';
import { errStyle } from '../Helpers/ReduxFormValidation';
import {Helmet} from 'react-helmet';


class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: ''
    };
  }

  componentWillMount() {
    if (this.props.user !== null) {
      this.props.history.push('/Forum');
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.user.email !== undefined) {
      this.props.history.push('/Forum');
    }
  }

  submitLogin(event) {
    event.preventDefault();
    this.props.login(this.state.email, this.state.password).catch(err => {
      this.setState({
        error: err
      });
    });
  }

  renderBody() {

    return (
        <div>
            <Helmet> 
            <style>{'body { background-color: #474647; }'}</style>
            </Helmet>
            <form onSubmit={event => { this.submitLogin(event);}}>
                <div>
                <InputField id="email" type="email" label="Email"
                            inputAction={(event) => this.setState({ email: event.target.value })}
                            style={this.state.error ? errStyle : null}
                />
                <InputField id="password" type="password" label="Password"
                            inputAction={(event) => this.setState({ password: event.target.value })}
                            style={this.state.error ? errStyle : null}
                />
                {this.state.error && <ErrorAlert>Your username/password is incorrect</ErrorAlert>}
                <FooterFormButton submitLabel="Sign in" otherLabel="Create Account"
                                    goToLink="/Forum/CreateAccount" {...this.props}
                />
                </div>
            </form>
        </div>
    );
  }

  render() {
    return (
      <div>
        <SimpleBox title="Sign in" body={this.renderBody()}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user };
}

export default connect(mapStateToProps, { login, getUser })(Login);
