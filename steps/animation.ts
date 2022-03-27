import { When } from "@wdio/cucumber-framework";
import AnimationEvents from "../pages/Animation";


const AE = new AnimationEvents();

When(/^Login$/, async()=>{

   await AE.clickMe();

})
