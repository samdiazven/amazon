import React,{useState} from 'react';
import '../styles/Login.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../firebase/firebase'
const Login = ()=>{
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const onRegister = e =>{
    e.preventDefault();
      history.push('/register')
 } 
  const onSignIn = e=>{
      e.preventDefault();

      auth.signInWithEmailAndPassword(email, password).
      then(auth=>{
	history.push('/');
      }).catch(error => alert(error.message));
  }

  return(
  <div className="login">
      <Link to='/'>
	<img 
	  className="login__logo"
	  src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
      />  	
    </Link>
      <div className="login__container">

	  <h1>Sign-in</h1>
	    <form onSubmit={onSignIn}>
	       <h5>Email</h5>
		  <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
	       <h5>Password</h5>
		  <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
		<button >Sign In</button>
      	  </form>
	<p>Al continuar, aceptas las Condiciones de uso y <br />el Aviso de privacidad de Amazon.</p>
      <button onClick={onRegister} className="login__buttonCreate"> Crear una Cuenta de Amazon</button>
    </div>
    </div>
  );
}

export default Login;
