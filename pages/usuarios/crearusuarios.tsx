import { crearDataUsuarios } from '@/services/cours.services';
import React, { useEffect } from 'react';

export const dataUsuarios = [
    {
      nombre: 'jose',
      apellido: 'gonzalez',
      email: 'jose@gmail.com',
      edad: '20',
      direccion: 'santiago',
      courId: '2',
    },
    {
      nombre: 'fernando',
      apellido: 'lopez',
      email: 'fernando@gmail.com',
      edad: '22',
      direccion: 'santiago',
      courId: '3',
    },
    {
      nombre: 'maria',
      apellido: 'sanchez',
      email: 'maria@gmail.com',
      edad: '29',
      direccion: 'santiago',
      courId: '2',
    },
    {
      nombre: 'carlos',
      apellido: 'gonzalez',
      email: 'carlos@gmail.com',
      edad: '26',
      direccion: 'santiago',
      courId: '1',
    },
    {
      nombre: 'gustavo',
      apellido: 'mejia',
      email: 'gustavo@gmail.com',
      edad: '23',
      direccion: 'santiago',
      courId: '1',
    }
  ];

export default function crearusuarios() {
    useEffect(() => {
    dataUsuarios.forEach((user) => {
        crearDataUsuarios(user).then((data) => {
          console.log('Data creada', data);
        })
      })
    },[])
  return (
    <div>crearusuarios</div>
  )
}
