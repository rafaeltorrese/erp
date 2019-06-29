import React from "react"
import { Upload, message, Button, Icon } from 'antd';

const props = {
  name: 'images',
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  headers: {
    authorization: 'authorization-text',
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const UploadButton = ({name,onChange}) => (
  <Upload {...props} onChange={onChange}>
    <Button>
      <Icon type="upload" /> Subir Archivo
    </Button>
  </Upload>
);

export default UploadButton