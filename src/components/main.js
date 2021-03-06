import * as React from 'react';
import { StyleSheet, View } from 'react-native';
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
import { LoginComponent } from './login';
export default class ReactNativeU2F extends React.Component {
    render() {
        return (React.createElement(View, {style: styles.container}, React.createElement(LoginComponent, null)));
    }
}
//# sourceMappingURL=main.js.map