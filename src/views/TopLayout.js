import { View } from "dhx-optimus";

export class TopLayout extends View {
	init() {
		return `<h1>Hello ${this.app.state.name}!</h1>`;
	}
}
