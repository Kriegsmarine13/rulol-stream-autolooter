callChecker = async function() {
    let interval = 60000;
    let checkLoot = setInterval(async function(){
        let giftButton = await $(document).find(".gift__button");
        if (giftButton.length > 0) {
            console.log("Found a button to click!");
             await giftButton.click();
            console.log("LOOT COLLECTED!");
        } else {
            console.log("No buttons found yet! Next check in " + interval + "ms!");
        }
        clearInterval(checkLoot);
        callChecker();
    }, interval);
}

$(document).ready(function(){
    console.log("looter connected!");
    callChecker();
})