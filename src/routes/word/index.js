import { h, Component } from 'preact';
import style from './style';

export default class Word extends Component {
	state = {
		count: undefined
	}

  componentDidMount() {
    fetch(`/words/${this.props.word.toLowerCase()}.txt`)
 		.then(result=>console.log(result.json()))
    // .then(items=>this.setState({items}))
	}

	componentWillUpdate() {
		//TODO: Shows loading/Shows how many times the word was said/No word found
		// First let me setup GitHub Pages
	}

	render({ word }) {
		return (
			<div class={style.home}>
				<p>Yup, Doug has said {word}!</p>
				<span>345 times</span>
				<a href="/" class="button">Try again!</a>
			</div>
		);
	}
}
