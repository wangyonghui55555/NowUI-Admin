import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Row, Col, Breadcrumb, Button} from 'antd';
import ButtonType from "../emun/ButtonType";

class NHeader extends Component {
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
                                this.props.headerSecondaryButtonList.length > 0 ?
                                    <Button.Group>
                                        {
                                            this.props.headerSecondaryButtonList.map(function (button, index) {
                                                return (
                                                    button.buttonIsVisible ?
                                                        <Button key={index}
                                                                icon={button.buttonIcon}
                                                                type={button.isPrimary ? "primary" : ""}
                                                                loading={button.buttonIsLoading ? this.props.self.state.isLoad : false}
                                                                onClick={button.buttonOnClick}>
                                                            {button.buttonTitle}
                                                        </Button>
                                                        :
                                                        null
                                                )
                                            }.bind(this))
                                        }
                                    </Button.Group>
                                    :
                                    ''
                            }
                            {
                                this.props.headerPrimaryButtonList.map(function (button, index) {
                                    return (
                                        this.props.isAdd && button.buttonType === ButtonType.DELETE ?
                                            null
                                            :
                                            <Button key={index}
                                                    icon={button.buttonIcon}
                                                    type={button.buttonIsPrimary ? "primary" : ""}
                                                    className="margin-left-10"
                                                    loading={button.buttonIsLoading ? this.props.self.state.isLoad : false}
                                                    onClick={button.buttonOnClick}>
                                                {button.buttonTitle}
                                            </Button>
                                    )
                                }.bind(this))
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

NHeader.propTypes = {
    self: PropTypes.object.isRequired,
    headerTitle: PropTypes.string.isRequired,
    headerBreadcrumbList: PropTypes.array.isRequired,
    headerPrimaryButtonList: PropTypes.array.isRequired,
    headerSecondaryButtonList: PropTypes.array.isRequired,
};

NHeader.defaultProps = {};

export default NHeader