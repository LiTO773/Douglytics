import { h, Component } from 'preact';
import style from './style';

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>
				<p>Type the word you want to find out!</p>
				<input class={style.input} placeholder="quirks" type="text"/>
				<button class={style.button}>Let's find out!</button>
			</div>
		);
	}
}
