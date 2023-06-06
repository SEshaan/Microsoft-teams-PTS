/*UNOFFICIAL TEAMS PUSH TO TALK 
    BROWSER ONLY

    PASTE THIS CODE IN CONSOLE
    TO USE PUSH TO TALK

    the key is space

*/
var mute
mute = true
document.addEventListener('keydown',(k) => {
    if (mute == true && k.code == "Space"){
        document.querySelector("#microphone-button").click()
        mute = false 
    }
})
document.addEventListener('keyup',(k) => {
    if (mute == false && k.code == 'Space'){
        document.querySelector("#microphone-button").click()
        mute = true   
    }
})
