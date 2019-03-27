import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Card, Button} from 'antd';

import NSuperForm from './NSuperForm';
import FormType from "../emun/FormType";

class NSuperCardForm extends Component {
    constructor (props) {
        super(props);

        this.ref = null;

        this.state = {
            form: {}
        }
    }

    componentDidMount () {
        this.props.self.handleAddContent({
            ref: this.ref,
            cardType: this.props.cardType,
            formType: this.props.formType,
            formItemList: this.props.formItemList
        });
    }

    componentWillReceiveProps (nextProps) {

    }

    componentWillUnmount () {
        this.ref = null;
    }

    render () {
        return (
            <Card
                className={this.props.className + ' card-form'}
                title={this.props.cardTitle}
                extra={
                    <div>
                        {
                            this.props.cardSecondaryButtonList ?
                                <Button.Group>
                                    {
                                        this.props.cardSecondaryButtonList.map(function (button, buttonIndex) {
                                            return (
                                                <Button key={buttonIndex}
                                                        icon={button.buttonIcon}
                                                        type={button.isPrimary ? "primary" : ""}
                                                        loading={button.buttonIsLoad}
                                                        onClick={() => button.buttonOnClick(this)}>
                                                    {button.buttonTitle}
                                                </Button>
                                            )
                                        }.bind(this))
                                    }
                                </Button.Group>
                                :
                                ''
                        }
                        {
                            this.props.cardPrimaryButtonList ?
                                this.props.cardPrimaryButtonList.map(function (button, buttonIndex) {
                                    return (
                                        <Button key={buttonIndex}
                                                icon={button.buttonIcon}
                                                type={button.buttonIsPrimary ? "primary" : ""}
                                                className="page-button-left"
                                                loading={button.buttonIsLoad}
                                                onClick={() => button.buttonOnClick(this)}>
                                            {button.buttonTitle}
                                        </Button>
                                    );
                                })
                                :
                                ''
                        }
                    </div>
                }>
                <NSuperForm formIsMultiCol={this.props.formIsMultiCol}
                            formItemList={this.props.formItemList}
                            cardFormItemOnPressEnter={this.props.formType === FormType.SEARCH ? this.props.self.handleSearch.bind(this.props.self) : this.props.self.handleSubmit.bind(this.props.self)}
                            wrappedComponentRef={function (instance) {
                           this.ref = instance;
                       }.bind(this)}/>
            </Card>
        );
    }
}

NSuperCardForm.propTypes = {
    self: PropTypes.object.isRequired,
    cardType: PropTypes.string.isRequired,
    cardTitle: PropTypes.string.isRequired,
    cardPrimaryButtonList: PropTypes.array.isRequired,
    cardSecondaryButtonList: PropTypes.array.isRequired,
    formType: PropTypes.string.isRequired,
    formIsMultiCol: PropTypes.bool.isRequired,
    formItemList: PropTypes.array.isRequired,
};

NSuperCardForm.defaultProps = {};

export default NSuperCardForm