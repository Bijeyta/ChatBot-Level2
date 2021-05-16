const restify = require('restify');

const { ActivityHandler, CardFactory } = require('botbuilder');

class BotActivityHandler extends ActivityHandler {
    constructor(conversationState){
        super();
        this.conversationState = conversationState;
        this.onMessage(async(context,next) => {
            await context.sendActivity('Hello Users!, from Bot side through onMessage function');
            await next();
        })
    }
    async run(context) {
        await super.run(context);
        await this.conversationState.saveChanges(context);
    }
}

module.exports.BotActivityHandler = BotActivityHandler;