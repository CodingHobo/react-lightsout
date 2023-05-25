"use strict"

function chanceLightStartsOn() {
    // need an array ['t', 'f']
    const onOff = [true, false]
    // randomly select t or f from array
    const index = Math.floor(Math.random() * onOff.length);

    return onOff[index];
    // return the random result
}

export default chanceLightStartsOn;