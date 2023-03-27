import React from "react";

export default class Image extends React.Component {
    render() {
        const { source, alternativeText } = this.props;
        return <img src={ source } alt={ alternativeText } />;
    }
}