import { crearDataCursos } from '@/services/cours.services';
import React, { useEffect } from 'react'

export const dataCursos = [
    {
      nombre: 'sistemas',
      codigo: '1001',
      year: '2023',
      semestre: '6',
      sede: 'ingenieria',
    },
    {
      nombre: 'informatica',
      codigo: '1002',
      year: '2023',
      semestre: '6',
      sede: 'ingenieria',
    },
    {
      nombre: 'odontologia',
      codigo: '2001',
      year: '2023',
      semestre: '6',
      sede: 'medicina',
    },
    {
      nombre: 'mecanica',
      codigo: '1003',
      year: '2023',
      semestre: '6',
      sede: 'ingenieria',
    },
    {
      nombre: 'enfermeria',
      codigo: '2002',
      year: '2023',
      semestre: '6',
      sede: 'medicina',
    },
    {
      nombre: 'sistemas',
      codigo: '5001',
      year: '2023',
      semestre: '6',
      sede: 'ingenieria',
    },
  ];
  
export default function crearcursos() {
    useEffect(() => {
        dataCursos.forEach((cour) => {
          crearDataCursos(cour).then((data) => {
            console.log('Data creada', data);
          })
        })
      },[])
  return (
    <div>crearcursos</div>
  )
}
