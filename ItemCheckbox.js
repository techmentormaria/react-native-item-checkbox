'use strict';

var React = require('react-native');
var { Icon, } = require('react-native-icons');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} = React;

var ItemCheckbox = React.createClass({
  propTypes: {
    onCheck: React.PropTypes.func,
    onUncheck: React.PropTypes.func,
    icon: React.PropTypes.String,
    size: React.PropTypes.number,
    backgroundColor: React.PropTypes.String,
    color: React.PropTypes.String,
    iconSize: React.PropTypes.String,
    checked: React.PropTypes.bool,
  },

  getDefaultProps: function() {
    return {
      onCheck: {
        function() {alert("implement me!")}
      },
      onUncheck: {
        function() {alert("implement me!")}
      },
      icon: "check",
      size: 18,
      backgroundColor: 'grey',
      color: 'white',
      iconSize: 'normal,',
      checked: false,
    };
  },

  getInitialState: function () {
    return {
      checked: false,
      bg_color: this.props.backgroundColor,
    };
  },

  _getCircleCheckStyle: function() {
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
  },

  _getIconSize: function() {
    if (this.props.iconSize == 'small') {
      return this.props.size * 0.5;
    } else if (this.props.iconSize == 'normal') {
      return this.props.size * 0.65;
    } else {
      return this.props.size * 0.8;
    }
  },

  _getCircleIconStyle: function() {
    return {
      color: this.props.backgroundColor,
      flex: 1,
      width: this._getIconSize(),
      height: this._getIconSize(),
    };
  },

  _completeProgress: function() {
    if (this.state.checked) {
      this.setState({
        checked: false,
        bg_color: this.props.backgroundColor,
      });
      return this.props.onUncheck;
    } else {
      this.setState({
        checked: true,
        bg_color: this.props.color,
      });
      return this.props.onCheck;
    }
  },

  componentDidMount: function() {
    if (this.props.checked) {
      this._completeProgress();
    }
  },

  render: function() {
    var icon = 'fontawesome|' + this.props.icon;
    return(
      <View style={styles.list_item}>
        <TouchableHighlight
          onPress={this._completeProgress}
          >
          <View style={this._getCircleCheckStyle()}>
            <Icon
              name={'fontawesome|' + this.props.icon}
              size={this._getIconSize()}
              color={this.props.backgroundColor}
              backgroundColor='transparent'
              style={this._getCircleIconStyle()}
            />
          </View>
        </TouchableHighlight>
      </View>
    );
  },
});

var styles = StyleSheet.create({
  circle_text: {
    color: 'white',
    textAlign: 'center',
    fontFamily: 'Proxima Nova Alt',
    flex: 1,
    width: 18,
    borderRadius: 3,
    height: 18,
  }
});

module.exports = ItemCheckbox;
