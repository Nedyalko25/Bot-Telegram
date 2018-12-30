const TelegrafWit = require('telegraf-wit');
const Promise = require('bluebird');

const wit = new TelegrafWit('DWXALNWLMZW7XMC7JT7GLREAZ2ULQ2B2')

module.exports = (message) => {
	return new Promise((resolve,reject) => {
		wit.meaning(message.text).then(result => {
			message.nlu = result;
			resolve(message)
		})
	})
	
}