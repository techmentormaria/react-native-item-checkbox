'use strict';
/**
 * @providesModule ItemCheckbox
 */

import React, { Component, PropTypes } from 'react';

import {
  View,
  StyleSheet,
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

  _setStatus(checked, doInvoke) {
    // Assume unchecked
    var bg_color = this.props.backgroundColor;
    var invokable = this.props.onUncheck;

    // If checked
    if (checked) {
      bg_color = this.props.color;
      invokable = this.props.onCheck;
    }

    this.setState({
      checked,
      bg_color
    });

    if(doInvoke) {
      invokable();
    }
  }

  _checkItem(checked) {
    this._setStatus(checked, false);
  }

  componentDidMount() {
    this._checkItem(this.props.checked);
  }

  componentWillReceiveProps(nextProps) {
    this._checkItem(nextProps.checked);
  }

  _onPress() {
    if(this.state.checked) {
      this.props.onUncheck();
    } else {
      this.props.onCheck();
    }
  }

  render() {
    var icon = this.props.icon;
    return (
      <View style={this.props.style}>
        <TouchableWithoutFeedback
          onPress={this._onPress.bind(this)}
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
      </View>
    );
  }
}

module.exports = ItemCheckbox;
