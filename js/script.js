window.onload=()=>{
    main()
}
const main=()=>{



// event all function start ----------
const change_bgBtn = document.querySelector('.change_bgBtn')
const hex_copy = document.querySelector('.copy_hex')
/**
 * this function will change the display background color
 */
change_bgBtn.addEventListener('click',()=>{
    document.querySelector('.check_icon').style = `display:none`
    document.querySelector('.copy_hex').style = `display : block`
    let color = twoColorGenerator()
    update_dom(color)
})
hex_copy.addEventListener('click',()=>{
     let hex = document.querySelector('.hex_input')
     let check_icon = document.querySelector('.check_icon')
    window.navigator.clipboard.writeText(hex.value)
    check_icon.style = `display:block`
    document.querySelector('.copy_hex').style = `display : none`
})



// event all function end ----------
/**
 * this function will upte the dom 
 * @param {string} color 
 * @returns {string}
 */

const update_dom=(color)=>{
    let rgb = rgbGenerator(color)
    const hex = hexGenerator(color)
    
    document.querySelector('.display_color').style = `background:${rgb}`
    document.querySelector('.color_box').style = `background:${rgb}`
    document.querySelector('.rgb_input').value = `${rgb}`
    document.querySelector('.hex_input').value = `${hex}`

}
/**
 * this function will return color object 
 * @returns {object}
 */
const twoColorGenerator = () => {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  return {
    red,
    green,
    blue
  }
};
const hexGenerator=({red,green,blue})=>{
    const rgbTohexConvert=(value)=>{
        const hex = value.toString(16).replace(/|s+/g,'')
        return hex.length===1?`0${hex}`:hex
    }
    return `#${rgbTohexConvert(red)}${rgbTohexConvert(green)}${rgbTohexConvert(blue)}`
}



/**
 * this function will generate rgb color 
 * @param {string}
 * @returns {string}
 */
    const rgbGenerator=({red,green,blue})=>{
        return `rgb(${red},${green},${blue})`
    }
}