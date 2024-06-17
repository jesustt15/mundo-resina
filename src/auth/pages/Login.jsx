
import CardComponent from "../../components/CardComponent";
import { useForm } from "../../hooks";
import './login.scss';


const loginFormFields = {
    loginEmail: '',
    loginPassword: '',

}

const registerFormFields = {
    registerName: '',
    registerLastname: '',
    registerEmail: '',
    registerPassword: '',
    registerConfirmedPassword: '',

}


export const Login = () => {
  
    const { loginEmail,loginPassword,onInputChange:onLoginChange } = useForm(loginFormFields);
    const {registerName, registerLastname,registerEmail, registerPassword, registerConfirmedPassword, onInputChange:onRegisterChange} = useForm(registerFormFields);
   
  const onLoginSubmit = (event) =>{
    event.preventDefault();
    //llegar al backedn
    console.log( loginEmail, loginPassword);
  };

  


  const onRegisterSubmit = (event) =>{
    event.preventDefault();
    //llegar al backedn
//    const isEqual = registerPassword === registerConfirmedPassword; hacer SwalFire
    console.log( registerName, registerLastname, registerEmail);
  };

  const onRegisterClick = () =>{
    container.classList.add("active");
  }
  const onLoginClick = () =>{
    container.classList.remove("active");
  }
  
    return (
            <>
                            {/* <div className='container' id="container">

                                <div className="form-container sing-in">
                                        <form onSubmit={onLoginSubmit}>
                                            <div className="welcome-container">
                                                <span>Bienvenidos a </span>
                                                <img src="./assets" alt="logo" />
                                            </div>
                                            <div className="buttons-container">
                                                <button className="btn-sign" onClick={onLoginClick}>Inicio de Sesión</button>
                                                <button className="btn-sign" onClick={onRegisterClick}>Registro</button>
                                            </div>
                                            <input type="text" 
                                                placeholder="Email"
                                                value= {loginEmail}
                                                name="loginEmail"
                                                onChange={onLoginChange}
                                            />
                                                <input type="text" 
                                                placeholder="Password"
                                                value= {loginPassword}
                                                name="loginPassword"
                                                onChange={onLoginChange}
                                            />
                                            <input
                                            type="submit"
                                            value="Iniciar sesion"
                                            />
                                        </form>
                                    </div>
                                </div>
                        
                                <div className='login'>
                                <h3>Register</h3>
                                    <div className="container-form">
                                        <form onSubmit={onRegisterSubmit}>
                                            <input type="text" 
                                                placeholder="Name"
                                                value= {registerName}
                                                name="registerName"
                                                onChange={onRegisterChange}
                                            />
                                            <input type="text" 
                                                placeholder="Lastname"
                                                value= {registerLastname}
                                                name="registerLastname"
                                                onChange={onRegisterChange}
                                            />
                                            <input type="text" 
                                                placeholder="Email"
                                                value= {registerEmail}
                                                name="registerEmail"
                                                onChange={onRegisterChange}
                                            />
                                            <input type="text" 
                                                placeholder="Password"
                                                value= {registerPassword}
                                                name="registerPassword"
                                                onChange={onRegisterChange}
                                            />
                                            <input type="text" 
                                                placeholder="Confirmed Password"
                                                value= {registerConfirmedPassword}
                                                name="registerConfirmedPassword"
                                                onChange={onRegisterChange}
                                            />
                                            <input
                                                type="submit"
                                                value="Crear Account"
                                            />
                                        </form>
                                    </div>
                                </div> */}

                               <CardComponent />

                            {/* <div className="container" id="container">
                                    <div className="form-container sign-up">
                                        <form>
                                            <h1>Create Account</h1>
                                            <span>or use your email for registeration</span>
                                            <label > Correo Electrónico</label>
                                            <input type="text" placeholder="Name"/>
                                            <input type="email" placeholder="Email"/>
                                            <input type="password" placeholder="Password"/>
                                            <button>Sign Up</button>
                                        </form>
                                    </div>
                                    <div className="form-container sign-in">
                                        <form>
                                            <h1>Sign In</h1>
                                            <div className="social-icons">
                                                <a href="#" className="icon"><i className="fa-brands fa-google-plus-g"></i></a>
                                                <a href="#" className="icon"><i className="fa-brands fa-facebook-f"></i></a>
                                                <a href="#" className="icon"><i className="fa-brands fa-github"></i></a>
                                                <a href="#" className="icon"><i className="fa-brands fa-linkedin-in"></i></a>
                                            </div>
                                            <span>or use your email password</span>
                                            <input type="email" placeholder="Email"/>
                                            <input type="password" placeholder="Password"/>
                                            <a href="#">Forget Your Password?</a>
                                            <button >Sign In</button>
                                        </form>
                                    </div>
                                    <div className="toggle-container">
                                        <div className="toggle">
                                            <div className="toggle-panel toggle-left">
                                                <h1>Welcome Back!</h1>
                                                <p>Enter your personal details to use all of site features</p>
                                                <button className="hidden" id="login" onClick={onLoginClick}>Sign In</button>
                                            </div>
                                            <div className="toggle-panel toggle-right">
                                                <h1>Hello, Friend!</h1>
                                                <p>Register with your personal details to use all of site features</p>
                                                <button className="hidden" id="register" onClick={onRegisterClick}>Sign Up</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
            </>
    
  )
}
