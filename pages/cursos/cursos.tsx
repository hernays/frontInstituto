import React, { useEffect, useState } from 'react'
import { getCours } from '@/services/cours.services';
import '../../styles/styles.css';
import { Table } from 'antd';
import Link from 'next/link';

export default function cursos() {

  const [cours, setCours] = useState([]);

  useEffect(() => {
    getCours().then(data => setCours(data));
  },[])

  return (
    <div className="content">
      <header>
        <img src="https://www.iacc.cl/wp-content/uploads/2021/07/iacc-2.svg" alt="iacc" />
      <h1 className='titleCours'>Cursos</h1>
      </header>
      <ul className='menuCours'>
        {cours && cours.map((element:any) => {
           return <li key={element.id}>
              <Link className="links" href={`${element.id}`}>
              {element.nombre}
              </Link>
           </li>
        })}
      </ul>

      <div>
        <img width="100%" src="https://www.iacc.cl/wp-content/uploads/2021/07/historia-iacc.jpg" alt="historia"/>
      </div>
    </div>
  )
}
