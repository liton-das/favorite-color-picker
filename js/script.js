
window.onload=()=>{
    main();
}
const main=()=>{
  // ---------- event all function start -------------------------//
  const change_bgBtn = document.querySelector(".change_bgBtn");
  const hex_copy = document.querySelector(".copy_hex");
  /**
   * this function will change the display background color
   */
  let hex = document.querySelector(".hex_input");
  let rgb_input = document.querySelector(".rgb_input");
  let check_icon = document.querySelector(".check_icon");
  let copy_hex = document.querySelector(".copy_hex");
  let copy_rgb = document.querySelector(".copy_rgb");
  let check_iconTwo = document.querySelector(".check_iconTwo");
  rgb_input.classList.add("rgb_input_design");
  change_bgBtn.addEventListener("click", () => {
    soundEffect('sound/button-click-289742.mp3')
    check_icon.style = `display:none`;
    copy_hex.style = `display : block`;
    check_iconTwo.style = `display:none`;
    copy_rgb.style = `display : block`;
    let color = twoColorGenerator();
    // let color = generateMultipleColor()
    update_dom(color);
  });
  //----- reset button 
  const resetBtn = document.querySelector('.reset')
  resetBtn.addEventListener('click',()=>{
    window.location.reload() 
    resetBtn.classList.add('reset_icon')
  })
  /**
   * this function work will copy hex color
   */
  hex_copy.addEventListener("click", () => {
    soundEffect('sound/button-click-289742.mp3')
    if(hex.value !== ''){
      window.navigator.clipboard.writeText(hex.value);
      check_icon.style = `display:block`;
      copy_hex.style = `display : none`;
      copy_rgb.style = "display: block";
      check_iconTwo.style = "display:none";

      successMessage(hex_input.value)
    }else{
      errorMessage()
    }
    
  });
  /**
   * this function will copy rgb color only
   */
  copy_rgb.addEventListener("click", () => {
    soundEffect('sound/button-click-289742.mp3')
    if(red_input.value !== ''){
      window.navigator.clipboard.writeText(rgb_input.value);
      copy_rgb.style = "display: none";
      check_iconTwo.style = "display:block";
      check_icon.style = `display:none`;
      copy_hex.style = `display : block`;
      successMessage(rgb_input.value)
    }else{
      errorMessage()
    }
  });
  let red_input = document.querySelector(".red_input");
  let blue_input = document.querySelector(".blue_input");
  let green_input = document.querySelector(".green_input");
  // this function create a intiger number only this will get input range value
  const getRangeValue = () => {
    let color = {
      red: parseInt(red.value),
      green: parseInt(green.value),
      blue: parseInt(blue.value),
    };
    return color;
  };
  /**
   * this envet will change input range value when user change range button
   */
  red_input.addEventListener("change", () => {
    soundEffect('sound/button-click-289742.mp3')
    let color = getRangeValue();
    update_dom(color);
  });
  blue_input.addEventListener("change", () => {
    soundEffect('sound/button-click-289742.mp3')
    let color = getRangeValue();
    update_dom(color);
  });
  green_input.addEventListener("change", () => {
    soundEffect('sound/button-click-289742.mp3')
    let color = getRangeValue();
    update_dom(color);
  });

  /**
   * get hex value from user and set dom
   */
  let hex_input = document.querySelector(".hex_input");
  hex_input.addEventListener("keyup", (e) => {
      rgb_input.value = ''
      check_icon.style = `display:none`;
      copy_hex.style = `display : block`;
    soundEffect('sound/button-click-289742.mp3')
    let color = e.target.value;
    if (color && isValid(color)) {
      let rgb = hexToRgb(color);
      rgb_input.value = `rgb${rgb}`;
      document.querySelector(".display_color").style = `background:${rgb}`;
      document.querySelector(".color_box").style = `background:${rgb}`;
      
    }
  });
  /**
   * hex to rgb converter function 
   * @param {object} color 
   * @returns {object}
   */
  const hexToRgb = (color) => {
    color = color.replace("#", "");
    if (color.length !== 6) return null;
    let r = parseInt(color.slice(0, 2), 16);
    let g = parseInt(color.slice(2, 4), 16);
    let b = parseInt(color.slice(4, 6), 16);
    return `rgb(${r},${g},${b})`;
  };
  /**
   * multiple colors arry for preset colors
   */
  let colors = [
    "#5c2011",
    "#3d1702",
    "#0b5e55",
    "#00face",
    "#c0ffee",
    "#691094",
    "#4a7864",
    "#fb8b1e",
    "#cfbc5a",
    "#d6184f",
    "#78196c",
    "#fbe4d5",
    "#a55736",
    "#691094",
    "#a55736",
    "#fbe4d5",
    "#fbe4d5",
    "#d6184f",
    "#fb8b1e",
    "#cfbc5a",
    "#326618",
    "#d110e1",
    "#85419b",
    "#69dc61",
    "#b4622e",
    "#009540",
    "#2b0c1b",
    "#fff200",
    "#e5d2e9",
    "#404e79",
  ];

  /**
   * this function will generate a div with style background-color
   * @param {object} color
   * @returns {object}
   */
  const generateDiv = (color) => {
    let div = document.createElement("div");
    div.classList.add("srcl_box");
    div.style = `background:${color}`;
    div.setAttribute("data-set", color);
    return div;
  };
  /**
   * this function will generate multiple color boxes
   * @param {perant} perant
   * @param {color} color
   */
  const generatePresetBox = (perant, color) => {
    color.forEach((color) => {
      perant.appendChild(generateDiv(color));
    });
  };
  /**
   * here call this function with pass the two argument first argument for a parent div and second argument for the color
   */
  const preset_perant = document.querySelector('.preset_color')
  generatePresetBox(preset_perant, colors);
/**
 * ------------------- this function will work for copy preset color -------------------------//
 */
preset_perant.addEventListener('click',(e)=>{
  const value = e.target
  if(value.classList=='srcl_box'){
      soundEffect('sound/button-click-289742.mp3')
        const color = value.getAttribute('data-set')
        window.navigator.clipboard.writeText(color)
        document.querySelector(".display_color").style = `background:${color}`;
    document.querySelector(".color_box").style = `background:${color}`;
        successMessage(color)
        return 
    }
    
})
  // ---------- event all function end -------------------------//
  /**
   * this function will upte the dom
   * @param {string} color
   * @returns {string}
   */
  const update_dom = (color) => {
    let rgb = rgbGenerator(color);
    const hex = hexGenerator(color);
    document.querySelector(".display_color").style = `background:${rgb}`;
    document.querySelector(".color_box").style = `background:${rgb}`;
    document.querySelector(".rgb_input").value = `${rgb}`;
    document.querySelector(".hex_input").value = `#${hex}`;
    document.querySelector(".red_label").innerHTML = `Red : ${color.red}`;
    document.querySelector(".green_label").innerHTML = `Green : ${color.green}`;
    document.querySelector(".blue_label").innerHTML = `Blue : ${color.blue}`;
    document.querySelector(".red_input").value = color.red;
    document.querySelector(".green_input").value = color.green;
    document.querySelector(".blue_input").value = color.blue;
  };
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
      blue,
    };
  };
  const hexGenerator = ({ red, green, blue }) => {
    const rgbTohexConvert = (value) => {
      const hex = value.toString(16).replace(/\s+/g, "");
      return hex.length === 1 ? `0${hex}` : hex;
    };
    return `${rgbTohexConvert(red)}${rgbTohexConvert(green)}${rgbTohexConvert(blue)}`;
  };
  /**
   * this function will generate rgb color
   * @param {string}
   * @returns {string}
   */
  const rgbGenerator = ({ red, green, blue }) => {
    return `rgb(${red},${green},${blue})`;
  };
  //---------- check validation
  const isValid = (color) => {
    if (color.length !== 7) return false;
    if (color[0] !== "#") return false;
    color = color.substring(1);
    return /^[0-9A-Fa-f]{6}$/i.test(color);
  };
/**
 * 
 */
const soundEffect = (audio) =>{
    let sound = new Audio(audio)
    sound.volume = 0.3
    sound.play()
    // return audio
}
/**
 * toast message 
 */
const successMessage = (msg) => {
  new Notify({
    status: "success",
    title: `copied : ${msg}`,
    effect: "fade",
    speed: 300,
  });
};
const errorMessage = () => {
  new Notify({
    status: "error",
    title: "input field is empty",
    effect: "fade",
    speed: 300,
  });
};
  /** default color start */
  let defautl_color = {
    red: 255,
    green: 255,
    blue: 255,
  };
  update_dom(defautl_color);
  /** default color end */
}