// EventEmitter -> Events -> Event loop --> Event Handler
// Client --> Stats events --> server.js --> StatsHandler
var events = require('events');
var eventEmitter=  new  events.EventEmitter();

var statsHandler = function(){
	console.log('Received event...')
	eventEmitter.emit('process_event')	
}

var processStatsHandler = function(){
	console.log('Processing event...')
}

//Any async function accepts, callback as a secind argument and callback has err object as a first arg
//Bind the stats_event with a StatsHandler
eventEmitter.on('stats_event', statsHandler)
eventEmitter.on('process_event', processStatsHandler)	

//Emit stats_event
eventEmitter.emit('stats_event')
console.log('Program ended!')