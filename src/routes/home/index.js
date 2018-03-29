import { h, Component } from 'preact';
import { route } from 'preact-router';
import style from './style';

export default class Home extends Component {
	state = {
		word: ""
	};

	handleWordInput = e => {
		this.setState({word: e.target.value});
	}

	goTo = () => {
		route('/' + this.state.word)
	}

	render() {
		return (
			<div class={style.home}>
				<p>Type the word you want to find out!</p>
				<input onChange={this.goTo} onInput={this.handleWordInput} class={style.input} placeholder="quirks" type="text"/>
				<button onClick={this.goTo} className="button">Let's find out!</button>
			</div>
		);
	}
}
