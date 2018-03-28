import { h, Component } from 'preact';
import style from './style';

export default class Footer extends Component {
	render() {
		return (
			<div class={style.footer}>
				<h3>Made by LiTO • 
          <a target="blank" href="https://github.com/LiTO773/Douglytics"> Check it out on Github!</a>
        </h3>
			</div>
		);
	}
}
