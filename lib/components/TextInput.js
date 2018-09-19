import React from 'react';
import { Platform, TextInput } from 'react-native';


export default class CustomTextInput extends React.Component {

    shouldComponentUpdate (nextProps){
        return Platform.OS !== 'ios'
            || (this.props.value === nextProps.value && (nextProps.defaultValue == undefined || nextProps.defaultValue == '' ))
            || (this.props.defaultValue === nextProps.defaultValue && (nextProps.value == undefined || nextProps.value == '' ));
    }

    focus() {
        this.textInput.focus();
    }

    clear() {
        this.textInput.clear();
    }

    isFocused() {
        return this.textInput.isFocused();
    }

    render() {
        return <TextInput ref={ref => this.textInput = ref} {...this.props} />;
    }
};

CustomTextInput.propTypes = TextInput.propTypes;