import React, {Component} from "react"
import { Button, Modal, Form, Input, Radio,Select } from 'antd';

const { Option } = Select;

const CollectionCreateForm = Form.create({ name: 'form_in_modal' })(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const { visible, onCancel, onCreate, form,inputsForm } = this.props;
      const { getFieldDecorator } = form;
      return (
        <Modal
          visible={visible}
          title="Agregar Construcción"
          okText="Create"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            
            {inputsForm.map((data,i)=>
            <Form.Item key={i} label={data.label}>
              {getFieldDecorator(data.name, {
                rules: [{ required: data.required, message: data.message}],
              })(<Input />)}
            </Form.Item>)}
            <Form.Item label="Rubros"  >
                <Select defaultValue="1">
                    <Option value="1">Option 1</Option>
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

      console.log('Received values of form: ', values);
      form.resetFields();
      this.setState({ visible: false });
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };

  render() {
      let{inputsForm}=this.props
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
        />
      </div>
    );
  }
}






export default CollectionsPage;