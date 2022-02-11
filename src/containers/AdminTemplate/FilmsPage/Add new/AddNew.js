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
import moment from 'moment';

const AddNew = () => {
    const [componentSize, setComponentSize] = useState('default');
    const [srcImg, setSrcImg] = useState("")

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
        const { name, value } = event.target;
        setState({
            ...state,
            [name]: value
        })
    }

    const handleChangeDatePicker = (value) => {
        // moment(value).format("DD/MM/YYYY"): lấy chuỗi date khớp với api
        let ngayKhoiChieu = moment(value).format("DD/MM/YYYY");
        setState({
            ...state,
            ngayKhoiChieu
        })
    }

    // closure function
    const handleChangeSwich = (name) => {
        return (value) => {
            setState({
                ...state,
                [name]: value
            })
        }
    }

    const handleChangeInputNumber = (name) => {
        return value => {
            setState({
                ...state,
                [name]: value
            })
        }
    }

    const handleChangeFile = (event) => {
        // lấy file từ event
        let file = event.target.files[0];

        // tạo đối tượng để đọc file
        let reader = new FileReader();
        reader.readAsDataURL(file)
        reader.onload = (event) => {
            setSrcImg(event.target.result)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(state);
    }

    return (
        <Form
            onSubmitCapture={handleSubmit}
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
                <Input name='trailer' onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Mô tả">
                <Input name='moTa' onChange={handleChange} />
            </Form.Item>
            <Form.Item label="Ngày khởi chiếu">
                <DatePicker format={"DD/MM/YYYY"} onChange={handleChangeDatePicker} />
            </Form.Item>
            <Form.Item label="Đang chiếu">
                <Switch onChange={handleChangeSwich("dangChieu")} />
            </Form.Item>
            <Form.Item label="Sắp chiếu">
                <Switch onChange={handleChangeSwich("sapChieu")} />
            </Form.Item>
            <Form.Item label="Hot">
                <Switch onChange={handleChangeSwich("hot")} />
            </Form.Item>
            <Form.Item label="Số sao">
                <InputNumber min={1} max={10} onChange={handleChangeInputNumber("danhGia")}/>
            </Form.Item>
            <Form.Item label="Hình ảnh">
                <input type="file" onChange={handleChangeFile} />
                <br />
                <img style={{width:150, height: 150}} src={srcImg} alt="..." />
            </Form.Item>
            <Form.Item label="Tác vụ">
                <button type='submit' className='btn btn-success'>Thêm</button>
            </Form.Item>
        </Form>
    );
};

export default AddNew