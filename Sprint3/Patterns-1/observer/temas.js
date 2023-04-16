var EventEmitter = require('events');
const emitter = new EventEmitter();

class Tema {
	constructor(name, suscribers = []) {
		this.name = name;
		this.suscribers = suscribers;
		console.log(`New theme: ${name}.`);
	}

	suscribe(username) {
		this.suscribers.push(username);
		console.log(`${username} was subscribed to ${this.name}`);
		emitter.on(this.name, (username, msg) => {
			console.log(`\nTheme: ${this.name}\nSuscribers: ${this.suscribers.length}\n${username}: ${msg}\n`);
		});
	}

	unsuscribe(username) {
		//No logro remover los eventos!!!!!!!
		emitter.removeListener(`${this.name}`, (username) => {
			console.log(`\n${username}: UNSUSCRIBED\n`);
		});
		console.log(`${username} was unsubscribed to ${this.name}`);
		for (let i = 0; i < this.suscribers.length; i++) {
			if (username === this.suscribers[i]) {
				this.suscribers = this.suscribers.filter((algo) => algo !== this.suscribers[i]);
				//console.log(this.suscribers)
			}
		}
	}
	msg(n, message) {
		for (let i = 0; i < this.suscribers.length; i++) {
			if (n === this.suscribers[i]) {
				emitter.emit(this.name, n, message);
				return;
			}
		}
		console.log(`\nMessage Error. The user ${n} is not suscribed to ${this.name}`);
	}
}

module.exports = Tema;
