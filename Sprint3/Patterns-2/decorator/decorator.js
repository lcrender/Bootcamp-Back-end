const data = require('./currency_conversions.json');
let currency;
class EuroPrice {
	inEuros;
	constructor(product, inEuros) {
		this.product = product;
		this.product.inEuros = inEuros;
	}
	convert() {
		if (this.product.currency === 'usd') {
			currency = data.USD_EUR;
		} else if (this.product.currency === 'gbp') {
			currency = data.GBP_EUR;
		} else if (this.product.currency === 'chf') {
			currency = data.CHF_EUR;
		} else if (this.product.currency === 'jpy') {
			currency = data.JPY_EUR;
		} else if (this.product.currency === 'cad') {
			currency = data.CAD_EUR;
		} else if (this.product.currency === 'cny') {
			currency = data.CNY_EUR;
		}
		this.product.inEuros = this.product.price * currency;
		return this.product.inEuros;
	}
}
module.exports = EuroPrice;
