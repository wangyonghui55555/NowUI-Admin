import {Table, Input, Popconfirm} from 'antd';
import React from 'react';
import PropTypes from 'prop-types';

class EditableCell extends React.Component {
    state = {
        value: this.props.value,
    }
    handleChange = (e) => {
        const value = e.target.value;
        this.props.onChange(value);
        this.setState({value});
    }

    render () {
        const {value} = this.state;
        return (
            <div className="editable-cell">
                {
                    <div className="editable-cell-input-wrapper">
                        <Input
                            value={value}
                            onChange={this.handleChange}
                        />
                    </div>
                }
            </div>
        );
    }
}

class NTable extends React.Component {
    constructor (props) {
        const columns = [];
        for (let i = 0; i < props.columns.length; i++) {
            let obj = props.columns[i];
            columns.push({
                title: obj.title,
                dataIndex: obj.dataIndex,
                render: (text, record,) => (
                    record.isSaveed ?
                        <div className="editable-cell-text-wrapper">{text} </div> :
                        <EditableCell
                            value={text}
                            onChange={value => this.onCellChange(value, record.key, obj.key)}/>
                ),
            })
        }
        columns.push({
            title: '操作',
            dataIndex: 'operation',
            render: (text, record) => {
                return (
                    record.isSaveed ?
                        (
                            <Popconfirm title="确定删除吗?" onConfirm={() => this.onDelete(record.key)}>
                                <a>删除</a>
                            </Popconfirm>
                        ) :
                        (
                            <Popconfirm title="确定保存吗?" onConfirm={() => this.onSave(record.key)}>
                                <a>保存</a>
                            </Popconfirm>
                        )
                );
            },
        })

        super(props);
        this.columns = columns;
        const dataSource = this.props.dataSource;
        for (let i = 0; i < dataSource.length; i++) {
            let obj = dataSource[i];
            obj.key = i;
            obj.isSaveed = true;
        }

        this.state = {
            dataSource: dataSource,
            count: this.props.dataSource.length,
        };
    }

    onCellChange = (value, key, dataIndex) => {
        const dataSource = [...this.state.dataSource];
        const target = dataSource.find(item => item.key === key);
        if (target) {
            target[dataIndex] = value;
            this.setState({dataSource: dataSource});
        }
    }
    onDelete = (key) => {
        const dataSource = [...this.state.dataSource];
        this.setState({dataSource: dataSource.filter(item => item.key !== key)});
    }
    onSave = (key) => {
        const dataSource = [...this.state.dataSource];
        const target = dataSource.find(item => item.key === key);
        if (target) {
            target.isSaveed = true;
            this.setState({dataSource: dataSource});
        }
    }
    handleAdd = () => {
        const {count, dataSource} = this.state;
        const newData =
            {
                key: dataSource.length + 1,
                isSaveed: false
            };
        this.setState({
            dataSource: [...dataSource, newData],
            count: count + 1,
        });
    }

    render () {
        const {dataSource} = this.state;
        const columns = this.columns;
        return (
            <div>
                {/*<Button className="editable-add-btn" onClick={this.handleAdd}>添加联系人</Button>*/}
                <Table dataSource={dataSource} columns={columns}/>
            </div>
        );
    }
}

NTable.propTypes = {
    getFieldDecorator: PropTypes.func.isRequired,
    columns: PropTypes.array,
    dataSource: PropTypes.array,
    id: PropTypes.string.isRequired,
    label: PropTypes.string,
    required: PropTypes.bool,
    disabled: PropTypes.bool,
};

NTable.defaultProps = {
    label: '',
    required: false,
    disabled: false
};


export default NTable