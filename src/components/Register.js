import React,{useState, useContext} from 'react';
import '../styles/Login.css';
import {Link, useHistory} from 'react-router-dom';
import {auth} from '../firebase/firebase'
import AuthContext from '../context/AuthState/authContext';
  const Register = ()=>{
  const context = useContext(AuthContext);
  const {createUser} = context;
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const onRegister = async e =>{

    if(email.trim()==='' || password.trim()==='') return;

    e.preventDefault();
    //Crear el usuario
      const nuevoUsuario = await auth.createUserWithEmailAndPassword(email, password);
      await nuevoUsuario.user.updateProfile({
	displayName: name
      })
      history.push('/');
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
	    <form onSubmit={onRegister}>
		<h5>Name</h5>
		  <input type="text" placeholder=" Your name here..." value={name} onChange={e => setName(e.target.value)} />

	       <h5>Email</h5>
		  <input type="text" value={email} placeholder=" Your Email here..." onChange={e => setEmail(e.target.value)} />
	       <h5>Password</h5>
		  <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
		<button onClick>Create a Amazon Count</button>
      	  </form>
	<p>Al continuar, aceptas las Condiciones de uso y <br />el Aviso de privacidad de Amazon.</p>
    </div>
    </div>
  );
}

export default Register;
