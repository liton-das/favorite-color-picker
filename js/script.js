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
     let hex = document.querySelector('.hex_input')
     let rgb_input =document.querySelector('.rgb_input')
     let check_icon = document.querySelector('.check_icon')
     let copy_hex = document.querySelector('.copy_hex')
     let copy_rgb = document.querySelector('.copy_rgb')
     let check_iconTwo = document.querySelector('.check_iconTwo')
change_bgBtn.addEventListener('click',()=>{
    check_icon.style = `display:none`
    copy_hex.style = `display : block`
    check_iconTwo.style = `display:none`
    copy_rgb.style = `display : block`
    let color = twoColorGenerator()
    update_dom(color)
})
     /**
      * this function work will copy hex color 
      */
hex_copy.addEventListener('click',()=>{
    window.navigator.clipboard.writeText(hex.value)
    check_icon.style = `display:block`
    copy_hex.style = `display : none`
    copy_rgb.style = 'display: block'
    check_iconTwo.style = 'display:none'
})
/**
 * this function will copy rgb color only
 */
copy_rgb.addEventListener('click',()=>{
    window.navigator.clipboard.writeText(rgb_input.value)
    copy_rgb.style = 'display: none'
    check_iconTwo.style = 'display:block'
    check_icon.style = `display:none`
    copy_hex.style = `display : block`
})
let red_input = document.querySelector('.red_input')
let blue_input = document.querySelector('.blue_input')
let green_input = document.querySelector('.green_input')
/**
 * this function will generate multiple color
 */
const generateMultipleColor=()=>{
   let color={
        red:parseInt(red_input.value),
        blue:parseInt(blue_input.value),
        green:parseInt(green_input.value)
    }
    return color
}
/**
 * this envet will change input range value when user change range button start
 */
red_input.addEventListener('change',()=>{
    let color=generateMultipleColor()
    update_dom(color)
})
blue_input.addEventListener('change',()=>{
    let color=generateMultipleColor()
    update_dom(color)
})
green_input.addEventListener('change',()=>{
    let color=generateMultipleColor()
    update_dom(color)
})
/**
 * this envet will change input range value when user change range button start
 */
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