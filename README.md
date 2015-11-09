# react-native-item-checkbox
Create your own item checkbox with custom colors.

#### **Basic usage**

<ItemCheckbox onCheck={this._yourCallback} />
This basic line will generate a standard checkbox with a 'check' symbol for you. 

#### **Getting started**
npm ...
Include the FontAwesome pack to your XCode Project [(check here)](https://github.com/corymsmith/react-native-icons)
#### **Options**
Option  | default value | values
------------- | ------------- | -------------
onCheck (PropTypes.func) | function that alerts 'implement me'  | callback function
onUnCheck (PropTypes.func) | function that alerts 'implement me'  | callback function
icon (PropTypes.String) | 'check'  | any FontAwesome icon you find [here](https://fortawesome.github.io/Font-Awesome/icons/)  
size (PropTypes.number) | 18  | the size of your checkbox button
backgroundColor (PropTypes.String) | 'grey'  | colors
color (PropTypes.String) | 'white'  | colors
iconSize (PropTypes.String) | 'normal'  | {'small', 'normal', 'large'}
checked (PropTypes.bool) | false  | {true, false}
style (PropTypes.func) | null  | custom style

#### **Examples**

<ItemCheckbox /> // 

![Gif](http://i.imgur.com/34gKmoX.gif)

// ...
_onCheckCallback: function() {
alert('checked');
},
// ...
<ItemCheckbox //example with callbacks
onCheck={this._onCheckCallback}
/>

<ItemCheckbox //example with icon settings
color="#FF9999"
icon="tree"
iconSize="normal" //"small", "normal", "large"
size={100}
/>
![Gif](http://i.imgur.com/r1yVTtO.gif)



#### **iconSize**

![Gif](http://i.imgur.com/r9w1cmg.png)
iconSize={"small", "normal", "large"}
