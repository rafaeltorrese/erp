import React, { Component } from 'react';
import TableComponent from "../common/TableComponent"
import CollectionsPage from "../common/FormComponent"
import { message } from 'antd'
import { getActivities} from '../../services/activities';

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: 'Código',
    className: 'column-money',
    dataIndex: 'code',
  },
  {
    title: 'Medida',
    dataIndex: 'measurement',
  },
  {
    title: 'Cantidad',
    dataIndex: 'quantity',
  },
  {
    title: 'P.U.',
    dataIndex: 'unitPrice',
  },
  {
    title: 'Descripción',
    dataIndex: 'description',
  },
];



const inputsForm = [
  {
    name: 'code',
    message: 'Introduce el Código de la Actividad!',
    required: true,
    label: 'Código',
    type: 'text'
  },
  {
    name: 'name',
    message: 'Introduce el nombre del Responsable de la Actividad',
    required: true,
    label: 'Nombre de la Actividad',
    type: 'text'

  },
  {
    name: 'measurement',
    message: 'Introduce la Unidad de Medida',
    required: true,
    label: 'Unidad de Medida',
    type: 'text'
  },
  {
    name: 'unitPrice',
    message: 'Introduce Precio Unitario!',
    required: true,
    label: 'Precio Unitario',
    type: 'text'
  },
  {
    name: 'quantity',
    message: 'Escribe la Cantidad!',
    required: false,
    label: 'Cantidad',
    type: 'text'
  },
  {
    name: 'description',
    message: 'Descripción de la actividad!',
    required: false,
    label: 'Descripción',
    type: 'text'
  },
  {
    name: 'total',
    message: 'Este es el Total!',
    required: false,
    label: 'Total',
    type: 'text'
  },
];





class ActivitiesContainer extends Component {

  state = {
    activities: [],
    inputs: {}
  }


  componentWillMount() {
    this.getAllActivities()
  }

  getAllActivities = () => {
    getActivities()
      .then(activities => this.setState({ activities }))
      .catch(err => console.log("error", err))
  }

  render() {
    let {activities} = this.state
    console.log(activities)
    return (
      <div className="Home">
        <TableComponent columns={columns} data={activities}/>
      </div>

    )

  }


}

export default ActivitiesContainer