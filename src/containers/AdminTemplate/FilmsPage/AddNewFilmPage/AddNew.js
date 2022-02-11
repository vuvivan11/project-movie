import React, { useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';

const AddNew = () => {
  const [componentSize, setComponentSize] = useState('default');

  const [state, setState] = useState({
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: false,
      sapChieu: false,
      hot: false,
      danhGia: 0,
      hinhAnh: {}
  })

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const handleChange = (event) => {

  }

  return (
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
    >
        <h4 className='mt-2 text-center'>Thêm Phim Mới</h4>
      <Form.Item label="Form Size" name="size">
        <Radio.Group>
          <Radio.Button value="small">Small</Radio.Button>
          <Radio.Button value="default">Default</Radio.Button>
          <Radio.Button value="large">Large</Radio.Button>
        </Radio.Group>
      </Form.Item>
      <Form.Item label="Tên phim">
        <Input name='tenPhim' onChange={handleChange} />
      </Form.Item>
      <Form.Item label="Trailer">
        <Input name='trailer' />
      </Form.Item>
      <Form.Item label="Mô tả">
        <Input name='moTa' />
      </Form.Item>
      <Form.Item label="Ngày khởi chiếu">
        <DatePicker />
      </Form.Item>
      <Form.Item label="Đang chiếu">
        <Switch />
      </Form.Item>
      <Form.Item label="Sắp chiếu">
        <Switch />
      </Form.Item>
      <Form.Item label="Hot">
        <Switch />
      </Form.Item>
      <Form.Item label="Số sao">
        <InputNumber min={1} max={10}/>
      </Form.Item>
      <Form.Item label="Hình ảnh">
        <input type="file" />
      </Form.Item>
      <Form.Item label="Tác vụ">
        <button type='submit' className='btn btn-success'>Thêm</button>
      </Form.Item>
    </Form>
  );
};

export default AddNew