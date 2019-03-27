import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ButtonType from "../emun/ButtonType";
import {Row, Col, Breadcrumb, Button,Upload} from 'antd';

class NFinalHeader extends Component {
    constructor (props) {
        super(props);

        this.state = {}
    }

    componentDidMount () {

    }

    componentWillReceiveProps (nextProps) {

    }

    componentWillUnmount () {

    }

    handleClick (item) {
        this.props.headerSecondaryButtonList[item.key].click();
    }

    render () {
        return (
            <div className="page-header shadow">
                <Breadcrumb>
                    {
                        this.props.headerBreadcrumbList.map(function (breadcrumb, index) {
                            return (
                                <Breadcrumb.Item key={index}>{breadcrumb.breadcrumbName}</Breadcrumb.Item>
                            )
                        })
                    }
                </Breadcrumb>
                <div className="page-header-body">
                    <Row>
                        <Col xs={{span: 12}} sm={{span: 12}} className="page-header-body-title">
                            {this.props.headerTitle}
                        </Col>
                        <Col xs={{span: 12}} sm={{span: 12}} className="page-header-body-button">
                            {
                                    this.props.headerSecondaryButtonList != null && this.props.headerSecondaryButtonList.length > 0 ?
                                        <Button.Group>
                                            {
                                                this.props.headerSecondaryButtonList.map(function (button, index) {
                                                    if(button.buttonType== ButtonType.UPLOAD)
                                                    {
                                                    return (
                                                        button.buttonIsVisible ?
                                                            <span style={{float: 'left',marginRight: '10px'}}>
                                                            <Upload {...button.props} >
                                                                <Button key={index}
                                                                        icon={button.buttonIcon}
                                                                        type={button.isPrimary ? "primary" : ""}
                                                                        loading={button.buttonIsLoad}
                                                                        onClick={button.buttonOnClick}
                                                                >
                                                                    {button.buttonTitle}
                                                                </Button>  </Upload></span>
                                                            :
                                                            null
                                                    )}else {
                                                        return (
                                                            button.buttonIsVisible ?

                                                                <Button key={index}
                                                                        icon={button.buttonIcon}
                                                                        type={button.isPrimary ? "primary" : ""}
                                                                        loading={button.buttonIsLoad}
                                                                        onClick={button.buttonOnClick}>
                                                                    {button.buttonTitle}
                                                                </Button>
                                                                :
                                                                null)
                                                    }
                                                })
                                            }
                                        </Button.Group>
                                        :
                                        ''
                            }
                            {
                                this.props.headerSecondaryButtonList != null && this.props.headerPrimaryButtonList.map(function (button, index) {
                                    return (
                                        <Button key={index}
                                                icon={button.buttonIcon}
                                                type={button.buttonIsPrimary ? "primary" : ""}
                                                className="margin-left-10"
                                                loading={button.buttonIsLoad}
                                                onClick={button.buttonOnClick}>
                                            {button.buttonTitle}
                                        </Button>
                                    )
                                })
                            }
                        </Col>
                    </Row>
                </div>
                <div className="page-header-description">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

NFinalHeader.propTypes = {
    headerTitle: PropTypes.string.isRequired,
    headerBreadcrumbList: PropTypes.array.isRequired,
    headerPrimaryButtonList: PropTypes.array.isRequired,
    headerSecondaryButtonList: PropTypes.array.isRequired,
};

NFinalHeader.defaultProps = {};

export default NFinalHeader