import React from 'react'
import './UserForm.css'
import { useForm } from 'react-hook-form'
import { useClients } from '../../context/ClientsContext';
import { useNavigate } from 'react-router-dom';


export const FormularioCrearUsuario = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const { createClient} = useClients();
  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    createClient(data);
    navigate('/');
  })

  return (
    <div className='crear-usuario'>
      <div className='campo-formulario'>
        <form className='register-client' onSubmit={onSubmit}>
          <input type="text" placeholder="Nombre"
            {...register("name", { required: true })}
          />
          <input type="text" placeholder="Email" 
            {...register("email", { required: true })}
          />
          <input type="number" placeholder="Telefono" 
            {...register("phone", { required: true })}
          />
          <button type="submit">Registrar</button>
        </form>
      </div>
    </div>
  )
}
