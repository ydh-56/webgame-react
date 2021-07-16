import React, { Component } from 'react';

class Try extends Component {
    render() {
        return (
            <li key={v.fruit + v.taste}>
                <b>{this.props.v.fruit}</b> - {this.props.index}
                <div>콘텐츠</div>
                <div>콘텐츠1</div>
                <div>콘텐츠2</div>
                <div>콘텐츠3</div>
            </li>
        )
    }
}

export default Try;