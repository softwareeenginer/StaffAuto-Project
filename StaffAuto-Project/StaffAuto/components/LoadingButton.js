import React, { Component } from "react";
import {Button, Spinner, View} from "native-base";


export default class LoadingButton extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <Button style={{justifyContent:'center',alignItems:'center'}} disabled={this.props.loading} {...this.props}>
                {this.props.loading?
                    <Spinner style={{width:'100%'}}  color={this.props.color?this.props.color:"white"} />:
                    this.props.children?
                        this.props.children:<View/>
                }
            </Button>
        );
    }
}
