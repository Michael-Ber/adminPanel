import React, {Component} from 'react';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            passw: ''
        };
    }

    onPasswordChange(e) {
        this.setState({
            passw: e.target.value
        })

    }

    render() {
        const {passw} = this.state;
        const {login, lengthErr, logErr} = this.props;

        let renderLogError, renderLengthError;

        logErr ? renderLogError = <span className="login-error">Введен неправильный пароль!</span>: null;
        lengthErr ? renderLengthError = <span className="login-error">Пароль должен быть длиннее 5 символов</span>: null;

        return (
            <div className="login-container">
                <div className="login">
                    <h2 className="uk-modal-title uk-text-center">Авторизация</h2>
                    <div className="uk-margin-top uk-text-lead">Пароль:</div>
                    <input 
                        type="password" 
                        name="" 
                        id="" 
                        className="uk-input uk-margin-top" 
                        placeholder="Пароль" 
                        value={passw}
                        onChange={(e) => this.onPasswordChange(e)}/>
                    {renderLogError}
                    {renderLengthError}
                    <button 
                        className="uk-button uk-button-primary uk-margin-top" 
                        type="button"
                        onClick={() => login(passw)}>Вход</button>
                </div>
            </div>
        )
    }
}