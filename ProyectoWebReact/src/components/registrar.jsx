import React, { useState } from 'react'; // Importa React correctamente
import { TextField, Button } from '@material-ui/core'; // Importa los componentes TextField y Button de Material-UI
import axios from 'axios';

const RegistroUsuario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('');
  const [estado, setEstado] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();

      try {

          const response = await axios.post('http://localhost:3000/registrarUsuario', {
              nombre,
              apellido,
              email,
              password,
              rol,
              estado
          });

          console.log(response.data);
          alert('Usuario registrado con exito')
      } catch (error) {
          console.alert('El usuario no se a podido registrar' + error)
      }
  };

  return (
    <div className="container">
    <form onSubmit={handleSubmit} className="form"> 
      <TextField
        label="Nombres"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)} 
        className="input" 
      />
      <TextField
        label="Apellidos"
        value={apellido}
        onChange={(e) => setApellido(e.target.value)} 
        className="input" 
      />
      <TextField
        label="Correo"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input" 
      /> <TextField
      label="Contraseña"
      value={password}
      onChange={(e) => setPassword(e.target.value)} 
      className="input" 
    />
     <TextField
        label="Rol"
        value={rol}
        onChange={(e) => setRol(e.target.value)} 
        className="input" 
      /> 
      <TextField
      label="Estado"
      value={estado}
      onChange={(e) => setEstado(e.target.value)} 
      className="input" 
    />
      <Button type="submit" variant="contained" color="primary" >
        Enviar
      </Button>
    </form>
  </div>
  );
};

export default RegistroUsuario;
