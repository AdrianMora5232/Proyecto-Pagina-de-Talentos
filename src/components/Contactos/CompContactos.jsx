import React from 'react'
import '../../styles/Contactos.css'
import Gmail from "gmail-js";
import { useState } from 'react';


function CompContactos() {



    return (
        <div>
            <h1>Contactanos</h1>
            <h4>Es importante para nosotros saber que con consideras
                de la pagina y si podes implemntar mas funciones a ella para faliciatr la visualizacion de tu perfil
            </h4>
            {/*Div para el formulario de comentarios*/}
            <div className='FormContactos'>

                <h2>Envianos un mensaje </h2>
                <h5>Nombre Completo</h5>
                <input type="text" value={Nombre} onChange={(evento) => setNombre(evento.target.value)}/>
                <h5>Correo elctronico</h5>
                <input type="email" value={Correo} onChange={(evento) => setCorreo(evento.target.value)}/>
                <h5>Numero de Telefono</h5>
                <input type="text" value={Telefono} onChange={(evento)=> setTelefono(evento.target.value)} />
                <br />
                <h4>Provincias</h4>
                <select onChange={(evento) => setProvincia(evento.target.value)}>
                    <option value="San José">San José</option>
                    <option value="Alajuela" >Alajuela</option>
                    <option value="Heredia">Heredia</option>
                    <option value="Limón">Limón</option>
                    <option value="Guanacaste">Guanacaste</option>
                    <option value="Puntarenas">Puntarenas</option>
                    <option value="Cartago" >Cartago</option>
                </select>
                <h5>Canton</h5>
                <input type="text" />
                <h5>Distrito</h5>
                <input type="text" />
                <h5>Asunto</h5>
                <select name="" id="">
                    <option value="">Soporte tecnico</option>
                    <option value="">Tengo un problema con mi perfil</option>
                    <option value="">Consultas generales</option>
                </select>
                <h5>Escribenos un Mensaje</h5>
                <input type="text"/>
                <br />
                <br />
                <button>Enviar mensaje</button>

            </div>



        </div>
    )
}

export default CompContactos
