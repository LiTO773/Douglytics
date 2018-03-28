import { h, Component } from 'preact';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<div class={style.home}>
				<h1 class={style.title}>Did Doug ever say?</h1>
			</div>
		);
	}
}
