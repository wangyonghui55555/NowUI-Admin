import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Modal, Button, message, Upload, Icon, Spin, Pagination} from 'antd';
import ImageCompressor from 'image-compressor.js';

import NImageCrop from '../component/NImageCrop'
import constant from '../common/constant';
import storage from '../common/storage';
import notification from '../common/notification';
import http from '../common/http';
import ActiveType from "../emun/ActiveType";

class NFinalImageModel extends Component {
    constructor (props) {
        super(props);

        this.state = {
            isLoad: false,
            isShow: false,
            isPreview: false,
            image: '',
            pageIndex: 1,
            pageSize: 1,
            total: 0,
            list: [],
            activeList: []
        }
    }

    componentDidMount () {
        notification.on('notification_file_list_model_' + this.props.id + '_show', this, function () {
            var width = Math.floor((document.documentElement.clientWidth - 200 - 40) / (96 + 16));
            var height = Math.floor((document.documentElement.clientHeight - 200 - 32 - 21 - 49 - 20) / (96 + 16));

            this.setState({
                isShow: true,
                pageSize: width * height
            }, function () {
                this.handleLoad(1);
            });
        });
    }

    componentWillReceiveProps (nextProps) {

    }

    componentWillUnmount () {
        notification.remove('notification_file_list_model_' + this.props.id + '_show', this);
    }

    handleImageCrop () {
        notification.emit('notification_image_crop_model_' + this.props.id + '_show', {});
    }

    handleLoad (pageIndex) {
        this.setState({
            isLoad: true
        });

        http.request({
            url: constant.imageHost + '/file/admin/v1/list',
            data: {
                fileName: '',
                fileType: 'IMAGE',
                pageIndex: pageIndex,
                pageSize: this.state.pageSize
            },
            success: function (data) {
                var list = [];

                for (var i = 0; i < data.list.length; i++) {
                    list.push({
                        fileId: data.list[i].fileId,
                        filePath: data.list[i].filePath,
                        fileThumbnailPath: data.list[i].fileThumbnailPath,
                        status: false,
                        select: false
                    });
                }

                this.setState({
                    list: list,
                    pageIndex: pageIndex,
                    total: data.total
                });
            }.bind(this),
            complete: function () {
                this.setState({
                    isLoad: false
                });
            }.bind(this)
        });
    }

    handleCancel () {
        var list = [];

        for (var i = 0; i < this.state.list.length; i++) {
            var item = this.state.list[i];

            list.push({
                fileId: item.fileId,
                filePath: item.filePath,
                fileThumbnailPath: item.fileThumbnailPath,
                status: false,
                select: false
            });
        }

        this.setState({
            isShow: false,
            list: list
        });
    }

    handleCancelPreview () {
        this.setState({
            isPreview: false
        });
    }

    handlePreview (fileId) {
        var filePath = '';
        for (var i = 0; i < this.state.list.length; i++) {
            if (this.state.list[i].fileId === fileId) {
                filePath = this.state.list[i].filePath;
            }
        }

        this.setState({
            image: constant.imageHost + filePath,
            isPreview: true
        });
    }

    handleClick (fileId) {
        let index = -1;
        let activeList = this.state.activeList;
        for (let i = 0; i < activeList.length; i++) {
            if (activeList[i].fileId === fileId) {
                index = i;
            }
        }

        if (index > -1) {
            activeList.splice(index, 1);
        } else {
            let temp;
            for (let item of this.state.list) {
                if (item.fileId === fileId) {
                    temp = item;
                }
            }

            if (activeList.length < this.props.returnLimit || this.props.returnLimit === 0) {
                activeList.push(temp);
            } else {
                activeList.splice(0, 1);
                activeList.push(temp);
            }
        }

        let list = this.state.list;
        for (let item of list) {
            item.select = false;

            for (let active of activeList) {
                if (item.fileId === active.fileId) {
                    item.select = true;

                    break;
                }
            }
        }

        this.setState({
            list: list,
            activeList: activeList
        });
    }

    handleMouseOver (fileId) {
        var list = [];

        for (var i = 0; i < this.state.list.length; i++) {
            var item = this.state.list[i];

            list.push({
                fileId: item.fileId,
                filePath: item.filePath,
                fileThumbnailPath: item.fileThumbnailPath,
                status: item.fileId === fileId,
                select: item.select
            });
        }

        this.setState({
            list: list
        });
    }

    handleMouseOut (fileId) {
        var list = [];

        for (var i = 0; i < this.state.list.length; i++) {
            var item = this.state.list[i];

            list.push({
                fileId: item.fileId,
                filePath: item.filePath,
                fileThumbnailPath: item.fileThumbnailPath,
                status: false,
                select: item.select
            });
        }

        this.setState({
            list: list
        });
    }

    handleChange (info) {
        if (info.file.status === 'done') {
            if (info.file.response.code === 200) {
                message.success('上传成功');
            } else {
                message.error(info.file.response.message);
            }

            this.setState({
                isLoad: false
            });
            this.handleLoad(1);

        } else if (info.file.status === 'uploading') {
            this.setState({
                isLoad: true
            });
        } else if (info.file.status === 'error') {
            message.error(info.file.name + ' file upload failed');
        }
    }

    handleSubmit () {
        var list = [];

        var index = 0;

        for (var i = 0; i < this.state.list.length; i++) {
            var item = this.state.list[i];

            if (item.select) {
                if (index < this.props.returnLimit || this.props.returnLimit === 0) {
                    index++;

                    list.push({
                        fileId: item.fileId,
                        filePath: item.filePath
                    });
                }
            }
        }

        notification.emit('notification_media_file_' + this.props.id + '_submit', list);

        this.handleCancel();
    }

    handlePaginationChange (page, pageSize) {
        this.handleLoad(page);
    }

    handleStart (file) {
        this.setState({
            isLoad: true
        })
    };

    handleError (error, response, file) {
        this.setState({
            isLoad: false
        });
        notification.notice({
            content: <div dangerouslySetInnerHTML={{__html: `图片上传失败！`}}></div>
        });
    };

    handleSuccess (result, file) {
        this.setState({
            isLoad: false
        });
        if (result.code === 200) {
            let fileList = this.state.value;
            for (let i = 0; i < result.data.length; i++) {
                fileList.push(result.data[i]);
            }
            this.setState({
                value: fileList
            });

            message.success('上传成功');
        } else {
            message.success(result.message);
        }
    };

    handleProgress (step, file) {

    };

    handleBeforeUpload (file, value) {
        if (this.props.returnLimit > 0 && this.props.returnLimit < value.length) {
            message.success('图片上传数量限制为' + this.props.returnLimit + '张');
            return false;
        }

        console.log(value.length);

        if (file) {
            // 过滤不是图片后缀的文件
            if (!/\.(jpeg|jpe|jpg|gif|png|webp)$/i.test(file.name)) {
                message.success('图片格式不对');
            }
        }

        if (file.size > 1024 * 1024 * 5) {
            message.success('图片大小不能超过5M');

            return false;
        }

        new ImageCompressor(file, {
            quality: 0.8,
            maxWidth: 1440,
            maxHeight: 1440,
            success: (result) => {
                const reader = new FileReader();
                let base64Data;

                reader.onload = (e) => {
                    base64Data = e.target.result;

                    this.setState({
                        isLoad: true
                    });

                    http.request({
                        url: constant.imageHost + '/file/admin/v1/image/base64/upload',
                        data: {
                            base64Data: base64Data
                        },
                        success: (data) => {
                            message.success('上传成功');

                            this.handleLoad(1);
                        },
                        complete: () => {
                            this.setState({
                                isLoad: false
                            });
                        }
                    });
                };

                reader.readAsDataURL(result)
            },
            error: (e) => {

            },
        });

        // // 创建 blob 字段 用于图片预览
        // newFile.blob = ''
        // let URL = window.URL || window.webkitURL
        // if (URL && URL.createObjectURL) {
        //     newFile.blob = URL.createObjectURL(newFile.file)
        // }

        return false;
    };

    render () {
        let data = {
            'appId': constant.appId,
            'token': storage.getToken(),
            'platform': constant.platform,
            'version': constant.version
        };

        if (constant.active === ActiveType.TEST) {
            data.systemRequestUserId = '14463951d1d94d39a9216dbd818fc984';
        }

        const props = {
            name: 'file',
            multiple: false,
            showUploadList: false,
            action: constant.imageHost + '/file/admin/v1/image/upload',
            accept: 'image/jpg,image/jpeg,image/png',
            data: data,
            onStart: this.handleStart.bind(this),
            onError: this.handleError.bind(this),
            onSuccess: this.handleSuccess.bind(this),
            onProgress: this.handleProgress.bind(this),
            beforeUpload: this.handleBeforeUpload.bind(this)
            // onChange: this.handleChange.bind(this)
        };

        const props2 = {
            name: 'file',
            multiple: false,
            showUploadList: false,
            action: constant.imageHost + '/file/admin/v1/image/upload',
            accept: 'image/jpg,image/jpeg,image/png',
            data: data,
            onChange: this.handleChange.bind(this)
        };

        return (
            <Modal title="我的上传"
                   maskClosable={false}
                   width={document.documentElement.clientWidth - 200}
                   className="modal"
                   visible={this.state.isShow}
                   onCancel={this.handleCancel.bind(this)}
                   footer={[
                       <div key="upload">
                           {
                               this.props.supportUploadTypes.length > 0 ?
                                   this.props.supportUploadTypes.map((uploadType, index) => {
                                       if (uploadType === 'image') {
                                           return (
                                               <div key={index}>
                                                   <div style={{float: 'left', marginLeft: 10}}>
                                                       <Upload {...props}>
                                                           <Button type="ghost"
                                                                   loading={this.state.isLoad}>
                                                               <Icon type="cloud-upload"/>上传图片
                                                           </Button>
                                                       </Upload>
                                                   </div>
                                                   <div style={{float: 'left', marginLeft: 10}}>
                                                       <Upload {...props2}>
                                                           <Button type="ghost" loading={this.state.isLoad}>
                                                               <Icon type="cloud-upload"/>上传原图
                                                           </Button>
                                                       </Upload>
                                                   </div>
                                               </div>
                                           )
                                       } else if (uploadType === 'cropImage') {
                                           return (
                                               <div key={index}
                                                    style={{float: 'left', marginLeft: 10}}>
                                                   <Button type="ghost" loading={this.state.isLoad}
                                                           onClick={this.handleImageCrop.bind(this)}>
                                                       <Icon type="cloud-upload"/>裁剪上传图片
                                                   </Button>
                                               </div>
                                           )
                                       } else if (uploadType === 'video') {
                                           return (
                                               <div key={index}
                                                    style={{float: 'left', marginLeft: 10}}>
                                                   <Upload {...props}>
                                                       <Button type="ghost"
                                                               loading={this.state.isLoad}>
                                                           <Icon type="cloud-upload"/>上传视频
                                                       </Button>
                                                   </Upload>
                                               </div>
                                           )
                                       } else if (uploadType === 'document') {
                                           return (
                                               <div key={index}
                                                    style={{float: 'left', marginLeft: 10}}>
                                                   <Upload {...props}>
                                                       <Button type="ghost"
                                                               loading={this.state.isLoad}>
                                                           <Icon type="cloud-upload"/>上传文档
                                                       </Button>
                                                   </Upload>
                                               </div>
                                           )
                                       } else {
                                           return null
                                       }
                                   })
                                   :
                                   null
                           }
                       </div>
                       ,
                       <Button key="back"
                               type="ghost"
                               size="default"
                               icon="cross-circle"
                               onClick={this.handleCancel.bind(this)}>关闭</Button>,
                       <Button key="submit"
                               type="primary"
                               size="default"
                               icon="check-circle"
                               loading={this.state.isLoad}
                               onClick={this.handleSubmit.bind(this)}>确定</Button>
                   ]}
            >
                <Spin spinning={this.state.isLoad}>
                    <div style={{height: document.documentElement.clientHeight - 55 - 53 - 290 + 'px'}}>
                        {
                            this.state.list.map(function (item) {
                                const mask = item.status || item.select ? "item-mask item-mask-active" : "item-mask";
                                return (
                                    <div key={item.fileId}
                                         className="item">
                                        <div className="item-image"
                                             style={{backgroundImage: 'url(' + constant.imageHost + item.fileThumbnailPath + ')'}}></div>
                                        <div onMouseOver={this.handleMouseOver.bind(this, item.fileId)}
                                             onMouseOut={this.handleMouseOut.bind(this, item.fileId)}>
                                            <div className={mask}
                                                 onClick={this.handleClick.bind(this, item.fileId)}></div>
                                            <i className="anticon anticon-eye-o item-preview-icon"
                                               style={{display: item.status && !item.select ? 'inline' : 'none'}}
                                               onClick={this.handlePreview.bind(this, item.fileId)}/>
                                            <i className="anticon anticon-delete item-remove-icon"
                                               style={{display: item.status && !item.select ? 'inline' : 'none'}}/>
                                            <i className="anticon anticon-check-circle-o item-check-icon"
                                               style={{display: item.select ? 'inline' : 'none'}}
                                               onClick={this.handlePreview.bind(this)}/>
                                        </div>
                                    </div>
                                )
                            }.bind(this))
                        }
                        {
                            this.state.list.length > 0 ?
                                <div style={{float: 'left', width: '100%', textAlign: 'right'}}>
                                    <Pagination current={this.state.pageIndex}
                                                pageSize={this.state.pageSize}
                                                total={this.state.total}
                                                onChange={this.handlePaginationChange.bind(this)}/>
                                </div>
                                :
                                null
                        }
                    </div>
                </Spin>
                <Modal visible={this.state.isPreview}
                       width={document.documentElement.clientWidth - 200}
                       footer={null}
                       onCancel={this.handleCancelPreview.bind(this)}>
                    <div className="item-image"
                         style={{
                             height: document.documentElement.clientHeight - 55 - 53 - 290 + 'px',
                             backgroundImage: 'url(' + this.state.image + ')'
                         }}></div>
                </Modal>
                <NImageCrop id={this.props.id}
                            aspect={this.props.aspect}/>
            </Modal>
        );
    }
}

NFinalImageModel.propTypes = {
    id: PropTypes.string.isRequired,
    returnLimit: PropTypes.number.isRequired,
    aspect: PropTypes.number,
    supportUploadTypes: PropTypes.arrayOf(PropTypes.oneOf(['image', 'cropImage', 'video', 'document']))
};

NFinalImageModel.defaultProps = {};

export default NFinalImageModel