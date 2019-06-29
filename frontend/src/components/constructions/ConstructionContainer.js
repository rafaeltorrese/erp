import React, { Component } from 'react';
import TableComponent from "../common/TableComponent"
import EditableTable from '../common/Table2'
import CollectionsPage from "../common/FormComponent"
import { getOutcomes } from '../../services/outcomes';
import { getConstructions, postConstructions } from '../../services/constructions';
import { message } from 'antd'

const columns = [
  {
    title: 'Nombre',
    dataIndex: 'name',
  },
  {
    title: 'Código',
    className: 'column-money',
    dataIndex: 'code',
  },
  {
    title: 'Ubicación',
    dataIndex: 'address',
    render: text => <a href="javascript:;">{text}</a>,
  },
  {
    title: 'Fecha Inicio',
    dataIndex: 'initialDate',
  },
  {
    title: 'Responsable',
    dataIndex: 'responsible'
  },
  {
    title: 'Teléfono',
    dataIndex: 'phoneResponsible'
  },
  {
    title: 'Fotos',
    dataIndex: 'images',
    render: images => <img src={images} alt='Imagen de construcción' width='50px' height="50px" />
  },

];




const inputsForm = [
  {
    name: 'code',
    message: 'Introduce el Código de la Contrucción!',
    required: true,
    label: 'Código',
    type: 'text'
  },
  {
    name: 'responsible',
    message: 'Introduce el nombre del Responsable de la Obra',
    required: true,
    label: 'Responsable de la obra',
    type: 'text'

  },
  {
    name: 'phoneResponsible',
    message: 'Introduce el Teléfono de Responsable!',
    required: true,
    label: 'Teléfono de Responsable',
    type: 'text'
  },
  {
    name: 'name',
    message: 'Introduce el Nombre de la Contrucción!',
    required: true,
    label: 'Nombre de Construcción',
    type: 'text'
  },
  {
    name: 'quantity',
    message: 'Please input the Quantity!',
    required: false,
    label: 'Cantidad',
    type: 'text'
  },
  {
    name: 'images',
    message: 'Please select an image!',
    required: false,
    label: 'Fotos',
    type: 'field'
  },
  {
    name: 'address',
    message: 'Escribir la dirección',
    required: true,
    label: 'DIrección',
    type: 'text'
  },
];




class ConstructionContainer extends Component {

  state = {
    outcomes: [],
    constructions: [],
    inputs: {}
  }


  componentWillMount() {
    this.getAllOutomes()
    this.getAllConstructions()
  }

  //aquivan las funciones con los wqs 
  getAllOutomes = () => {

    getOutcomes()
      .then(outcomes => this.setState({ outcomes }))
      .catch(err => console.log("error", err))
  }


  getAllConstructions = () => {
    getConstructions()
      .then(constructions => this.setState({ constructions }))
      .catch(err => console.log("error", err))
  }

  onSubmit = (values) => {
    let { constructions } = this.state
    console.log('Ressss',values)
    postConstructions(values)
      .then(construction => {
        constructions.push(construction.construction)
        message.info('Construcción Agregada');
        this.setState({ constructions })

      })
      .catch(err => console.log("error", err))
  }

  handleText = (e) => {
    let { inputs } = this.state;
    let field = e.target.name;
    inputs[field] = e.target.value;
    this.setState({ inputs });
    console.log("This is Data", inputs)
  };



  onDelete = id => {
    let { constructions } = this.state
    // deleteConstruction(id).then(construction => {
    //   constructions = constructions.filter(construction => construction._id !== id)
    //   this.setState({ constructions })
    // })
  }


  render() {
    let { outcomes, constructions, data } = this.state
    console.log(data)
    return (
      <div className="Home">
        <CollectionsPage 
        inputsForm={inputsForm} 
        handleText={this.handleText} 
        onSubmit={this.onSubmit} />
        <TableComponent columns={columns} data={constructions} />
      </div>
    )

  }


}

export default ConstructionContainer