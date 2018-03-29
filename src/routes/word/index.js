import { h, Component } from 'preact';
import style from './style';

export default class Word extends Component {
	state = {
		count: undefined
	}

  componentDidMount() {
		// fetch(`/words/${this.props.word.toLowerCase()}.txt`)
    fetch(`/words/${this.props.word.toLowerCase()}.txt`)
		 .then(result => result.json())
		 .then(count => this.setState({count}))
		 .catch(() => this.setState({count: 0}))
	}

	correctRender = () => {
		if (this.state.count === undefined) {
			return (
				<p>Searching 🔍</p>
			)
		} else if (this.state.count === 0) {
			return (
				<div>
					<p>No, he hasn't said <b>{this.props.word}</b> 😔 (yet)</p>
				</div>
			)
		} else {
			return (
				<div>
					<p>Yup, Doug has already said <b>{this.props.word}</b>! 😀</p>
					<span>{this.state.count} {this.state.count === 1 ? 'time' : 'times'}</span>
				</div>
			)
		}
	}

	render({ word }) {
		return (
			<div class={style.home}>
				{this.correctRender()}
				<a href="/" class="button">Try again!</a>
			</div>
		);
	}
}
