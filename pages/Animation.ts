export default class AnimationEvents {

    get Animation (){
        return $('~Animation');    
    }

    get Events (){
        return $('~Events');    
    }

    async clickMe() {

        (await this.Animation).click();
        await this.Events.click();
        
    }
}


