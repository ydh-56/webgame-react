const React = require('react');
const { Component } = React;

class WordRelay extends React.Component {
    state = {
        word:'양다현',
        value:'',
        result:''
    };

    onSubminForm = (e) => {
        e.preventDefault();
        if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
            this.setState({
                result: '정답',
                word: this.state.value,
                value: ''
            });
            this.input.focus();
        } else {
            this.setState({
                result: '땡',
                value:'',
            });
            this.input.focus();
        }
    };

    onChange = (e) => {
        this.setState({ value:e.target.value });
    };
    input;

    onRefInput = (c) => {
        this.input = c;
    }


    render() {
        return (
        <>
            <div>{this.state.word}</div>
            <form onSubmit={this.onSubminForm}>
                <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
                <button>입력</button>
            </form>
            <div>{this.state.result}</div>
        </>
        );
    }
}

module.exports = WordRelay;