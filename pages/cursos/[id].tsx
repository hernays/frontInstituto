import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { getCourId } from '@/services/cours.services';
import { Table, Descriptions, Button } from 'antd';
import Link from 'next/link';
import '../../styles/styles.css';

export default function pages() {

    const [data, setData] = useState();
    const [cour, setCours] = useState([]);
    const router = useRouter();
    const {id} = router.query;

    useEffect(() => {
        setTimeout(() => {
                if(id){
                    getCourId(id).then(data => {
                        console.log('data',data)
                        setCours([data]);
                       const dataformat =  data.users.map((elements:any) => {
                            return {
                                ...elements,
                                key: elements.id
                            }
                        })
                        setData(dataformat);
                    }).catch(error => {console.log(error)})
                }
        },600)
    },[id])

      const columns = [
        {
          title: 'Nombre',
          dataIndex: 'nombre',
          key: 'nombre',
        },
        {
            title: 'Apellido',
            dataIndex: 'apellido',
            key: 'apellido',
          },
          {
            title: 'Correo',
            dataIndex: 'email',
            key: 'email',
          },
          {
            title: 'Edad',
            dataIndex: 'edad',
            key: 'edad',
          },
          {
            title: 'direccion',
            dataIndex: 'direccion',
            key: 'direccion',
          },
      ];
  return (
    <div>

{cour && cour.map((element:any) => {
 return <Descriptions key={element.id} title="Detalle Del Curso" bordered>
    <Descriptions.Item label="Curso" span={3}>{element.nombre}</Descriptions.Item>
    <Descriptions.Item label="Sede" span={3}>{element.sede}</Descriptions.Item>
    <Descriptions.Item label="Semestres" span={3}>{element.semestre}</Descriptions.Item>
    <Descriptions.Item label="año" span={3}>{element.year}</Descriptions.Item>
  </Descriptions>

})}
<h2 className='titleAlumnos'>Alumnos Inscritos</h2>
    <Table className="tabla" dataSource={data} columns={columns} />;

<div className="contentBtn">
        <Button className="btnVolver" type="primary" size='large'>
        { <Link href="cursos">
        Volver
        </Link>}
        </Button>
</div>
    </div>
  )
}
