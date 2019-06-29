import React, { Component } from "react"
import { Button, Modal, Form, Input, message, Select,Upload,Icon } from 'antd';
import UploadButton from './UploadButton'
const { Option } = Select;

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form, inputsForm, handleText,onSubmit,onChange} = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Agregar Construcción"
          okText="Enviar"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form onSubmit={onSubmit} layout="vertical" >
          
            {inputsForm.map((data, i) =>
              <Form.Item key={i} label={data.label}>
                {getFieldDecorator(data.name, {
                  rules: [{ required: data.required, message: data.message }],
                })(
                data.type === 'text' ?<Input
                  name={data.name}
                  onChange={handleText}
                  size="large"
                />:
                
                <Upload  onChange={onChange} name={data.name}>
                <Button>
                  <Icon type="upload" /> Subir Archivo
                </Button>
              </Upload>
                )}
              </Form.Item>)}
            <Form.Item label="Rubros"  >
              <Select defaultValue="1">
                <Option value="1">Option 1</Option>
                <Option value="2">Option 2</Option>
              </Select>
            </Form.Item>

          </Form>
        </Modal>
      );
    }
  },
);

class CollectionsPage extends React.Component {
  state = {
    visible: false,
  };

  showModal = () => {
    this.setState({ visible: true });
  };

  handleCancel = () => {
    this.setState({ visible: false });
  };

  handleCreate = () => {
    const { form } = this.formRef.props;
    form.validateFields((err, values) => {
      if (err) {
        return;
      }
      this.props.onSubmit(values)
      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
      
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };
  onChange=(info)=> {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  }
  
  render() {
    let { inputsForm } = this.props
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          AGREGAR
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          inputsForm={inputsForm}
          onChange={this.onChange}
        />
      </div>
    );
  }
}






export default CollectionsPage;