window.onload=()=>{
    main()
}
const main=()=>{




const change_bgBtn = document.querySelector('.change_bgBtn')
/**
 * this function will change the display background color
 */
change_bgBtn.addEventListener('click',()=>{
    const color = rgbGenerator()
    update_dom(color)
    
})
/**
 * this function will upte the dom 
 * @param {string} color 
 * @returns {string}
 */

const update_dom=(color)=>{
    document.querySelector('.display_color').style = `background:${color}`
    document.querySelector('.color_box').style = `background:${color}`
    document.querySelector('.rgb_input').value = `${color}`

}






/**
 * this function will generate rgb color 
 * @param {string}
 * @returns {string}
 */
    const rgbGenerator=()=>{
        let red = Math.floor(Math.random() * 255)
        let green = Math.floor(Math.random() * 255)
        let blue = Math.floor(Math.random() * 255)
        return `rgb(${red},${green},${blue})`
    }
}