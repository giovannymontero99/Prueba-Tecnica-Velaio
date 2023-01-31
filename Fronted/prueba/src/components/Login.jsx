import './Login.css';
import { Link } from 'react-router-dom';
import React, {useEffect, useState} from 'react'




const Login = (props) => {

  const [ mail,setMail] = useState(null);
  const [ clave,setClave ] = useState(null);
  
  useEffect(()=>{
    //console.log(mail);
  },[mail])
    


  return (
    <div className='Login'>
      <form style={{ width: '25rem' }} className='form-login' action={ props.login ? 'http://192.168.1.150:3030/login' : 'http://192.168.1.150:3030/signup'} method={ !props.login ? 'post'  : 'get'} >
        {
          !props.login ?
            <div className='mb-3'>
              <label htmlFor='name' className='form-label'>Nombre completo</label>
              <input type='text' name='name' id='name' className='form-control' />
            </div> :
            null
        }
        {
          !props.login ?
            <div className='mb-3'>
              <label htmlFor='lastName' className='form-label'>Apellido completo</label>
              <input type='text' name='LastName' id='LastName' className='form-control' />
            </div> :
            null
        }
        <div className='mb-3'>
          <label htmlFor='email' className='form-label'>E-mail</label>
          <input type='email' name='email' id='email' className='form-control' onChange={e=> setMail(e.target.value)}/>
        </div>
        <div className='mb-3'>
          <label htmlFor='password' className='form-label'>Password</label>
          <input type='password' name='password' id='password' className='form-control' onChange={e=> setClave(e.target.value)}/>
        </div>
        <div className='mb-3'>
          <input type="submit" className='btn btn-primary' value={props.login ? "Iniciar Sesión" : "Registrarse"} />
        </div>
        <div className="login-signup">
          <label htmlFor="signup" className="form-label">
            {props.login ? <Link to={'/signup'}> <div >Registrarse</div> </Link> : <Link to={'/'}> <div >Volver pagina principal</div> </Link>}
          </label>
        </div>
      </form>
    </div>
  )
}
export default Login;