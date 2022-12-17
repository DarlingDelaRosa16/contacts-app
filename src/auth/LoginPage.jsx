import './LoginPage.css';
import {useForm} from '../contacts/hooks/useForm';
import { useAuthStore } from '../hooks/useAuthStore';
import { useModalStore } from '../hooks/useModalStore';
import { AlertModal } from '../contacts/components/AlertModal';

const loginCredencials = {
  loginEmail: '',
  loginPass : '', 
}

const registerCredencials = {
  registerName  : '',
  registerEmail : '',
  registerPass  : '',
  registerPass2 : '', 
}
export const LoginPage = () => {

  const { loginEmail, loginPass, onInputChange:onLoginInputChange, onResetForm: onLoginResetForm } = useForm(loginCredencials)
  const {registerName, registerEmail, registerPass, registerPass2, onInputChange:onRegisterInputChange, onResetForm: onRegisterResetForm} = useForm(registerCredencials)
  
  const {startLogin, startRegister} = useAuthStore()
  const {openAlertModal} = useModalStore()

  const loginSubmit = (e)=>{
    e.preventDefault()
    if(loginEmail.length <= 5 || loginPass.length <= 5) return;
    startLogin({email: loginEmail, password:loginPass})
    onLoginResetForm()
  }
  
  const registerSubmit = (e)=>{
    e.preventDefault()

    if(registerEmail.length <=1 || registerName.length <=1 ) return;
    if(registerPass !== registerPass2 ){
      openAlertModal('Passwords are not the same')
      return;
    }
    startRegister({name: registerName, email: registerEmail, password: registerPass})

    onRegisterResetForm()
  }

  return (
    <>
    <div className="container-md login-container">
      <div className="row">
        
        
        <div className="col-md-6 login-form-1">

          <h3>Sign In</h3>

          <form  onSubmit={loginSubmit} autoComplete='off'> 
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Email"
                name="loginEmail"
                value={loginEmail}
                onChange={onLoginInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="loginPass"
                value={loginPass}
                onChange={onLoginInputChange}
              />
            </div>
            
            <div className="d-grid gap-2">
              
              <input
                type="submit"
                className="btnSubmit "
                value="Login"
              />
              
            </div>
            

          </form>
        </div>

        <div className="col-md-6 login-form-2">
          <h3>Registro</h3>
          <form onSubmit={registerSubmit} autoComplete='off'>
            <div className="form-group mb-2">
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="registerName"
                value={registerName}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="registerEmail"
                value={registerEmail}
                onChange={onRegisterInputChange}
              />
            </div>
            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="registerPass"
                value={registerPass}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="form-group mb-2">
              <input
                type="password"
                className="form-control"
                placeholder="Repet the password"
                name="registerPass2"
                value={registerPass2}
                onChange={onRegisterInputChange}
              />
            </div>

            <div className="d-grid gap-2">
              <input
                type="submit"
                className="btnSubmit"
                value="Crear cuenta" />
            </div>
          </form>
        </div>
      </div>
    </div>
    <AlertModal/>
    </>

  )
}