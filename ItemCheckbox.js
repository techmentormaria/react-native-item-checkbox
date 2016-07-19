'use strict';
/**
 * @providesModule ItemCheckbox
 */

import React, { Component, PropTypes } from 'react';

import {
    View,
    Text,
    TouchableWithoutFeedback,
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome';

export default class ItemCheckbox extends React.Component {
  static propTypes = {
    onCheck: React.PropTypes.func,
    onUncheck: React.PropTypes.func,
    icon: React.PropTypes.string,
    size: React.PropTypes.number,
    backgroundColor: React.PropTypes.string,
    color: React.PropTypes.string,
    iconSize: React.PropTypes.string,
    checked: React.PropTypes.bool,
    default: React.PropTypes.bool,
    label: React.PropTypes.string,
    labelStyle: React.PropTypes.number
  };

  static defaultProps = {
    onCheck: null,
    onUncheck: null,
    icon: "check",
    size: 40,
    backgroundColor: 'white',
    color: 'grey',
    iconSize: 'normal',
    checked: false,
    default: false,
    label: null,
    labelStyle: null
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      checked: false,
      bg_color: this.props.backgroundColor,
    }
  }

  _getCircleCheckStyle() {
    return {
      width: this.props.size,
      height: this.props.size,
      backgroundColor: this.state.bg_color,
      borderColor: this.props.color,
      borderWidth: 2,
      borderRadius: this.props.size/2,
      justifyContent: 'center',
      alignItems: 'center',
      padding: 2,
    };
  }

  _getIconSize() {
    if (this.props.iconSize == 'small') {
      return this.props.size * 0.5;
    } else if (this.props.iconSize == 'normal') {
      return this.props.size * 0.6;
    } else {
      return this.props.size * 0.7;
    }
  }

  _getCircleIconStyle() {
    return {
      color: this.props.backgroundColor,
      width: this._getIconSize(),
      height: this._getIconSize(),
    };
  }

  _completeProgress(defaultValue) {
    if (this.state.checked) {
      this.setState({
        checked: false,
        bg_color: this.props.backgroundColor,
      });
      if (this.props.onUncheck && !defaultValue) {
        this.props.onUncheck();
      }
    } else {
      this.setState({
        checked: true,
        bg_color: this.props.color,
      });
      if (this.props.onCheck && !defaultValue) {
        this.props.onCheck();
      }
    }
  }

  _initDefault() {
    this._completeProgress(true);
  }

  componentDidMount() {
    if (this.props.checked) {
      this._completeProgress(false);
    }

    if (this.props.default) {
      this._initDefault();
    }
  }

  render() {
    var labelStyle = this.props.labelStyle !== null ? this.props.labelStyle : {color: this.props.color, margin: 10};
    return (
      <View style={[this.props.style, {flexDirection: 'row'}]}>
        <TouchableWithoutFeedback
          onPress={this._completeProgress.bind(this, false)}
          >
          <View style={this._getCircleCheckStyle()}>
            <Icon
              name={this.props.icon}
              size={this._getIconSize()}
              color={this.props.backgroundColor}
              backgroundColor='transparent'
              style={this._getCircleIconStyle()}
            />
          </View>
        </TouchableWithoutFeedback>
            <Text style={[labelStyle, {flexDirection: 'row'}]}>{this.props.label}</Text>
      </View>
    );
  }
}

module.exports = ItemCheckbox;
