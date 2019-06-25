import React,{Component} from 'react';
import TableComponent from "../common/TableComponent"
import CollectionsPage from "../common/FormComponent"
import { getOutcomes } from '../../services/outcomes';

const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      render: text => <a href="javascript:;">{text}</a>,
    },
    {
      title: 'Cash Assets',
      className: 'column-money',
      dataIndex: 'money',
    },
    {
      title: 'Address',
      dataIndex: 'address',
    },
  ];
  
  const data = [
    {
      key: '1',
      name: 'John Brown',
      money: '￥300,000.00',
      address: 'New York No. 1 Lake Park',
    },
    {
      key: '2',
      name: 'Jim Green',
      money: '￥1,256,000.00',
      address: 'London No. 1 Lake Park',
    },
    {
      key: '3',
      name: 'Joe Black',
      money: '￥120,000.00',
      address: 'Sidney No. 1 Lake Park',
    },
  ];

  const inputsForm = [
    {
      name: 'code',
      message : 'Please input the title of code!',
      required : true,
      label:'Código',

    
    },
    {
      name: 'responsible',
      message : 'Please input the responsible of construction',
      required : true,
      label:'Responsable de la obra',

    
    },
    {
      name: 'phoneResponsible',
      message : 'Please input the Responsible Cell Phone!',
      required : true,
      label:'Teléfono de Responsable',

    
    },
    {
      name: 'name',
      message : 'Please input the title of construction!',
      required : true,
      label:'Nombre de Construcción',

    
    },
    {
        name: 'quantity',
        message : 'Please input the Quantity!',
        required : false,
        label:'Cantidad',
  
      
      },
      {
        name: 'images',
        message : 'Please select an image!',
        required : false,
        label:'Fotos',
  
      
      },
  ];

class ConstructionContainer extends Component {

componentWillMount(){
    this.getAllOutomes()
}

   //aquivan las funciones con los wqs 
getAllOutomes=()=>{
    getOutcomes().then(res =>
        console.log("outcomes",res)).catch(err=>console.log("error",err))
}
   newConstruction=()=>{

   }
    render(){
        return(
            <div className="Home">
                <CollectionsPage  inputsForm={inputsForm} />
                <TableComponent columns={columns} data={data} />
            </div>
            
        )
        
    }
    

}

export default ConstructionContainer