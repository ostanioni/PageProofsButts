
let fw_props = [ 100, 200, 300, 400, 500, 600, 700, 800, 900 ]
let fw = document.getElementById('fw')
console.log(fw)
let fw_str = 'FONTWEIGHT'
let fw_final = ''
for(let i=1; i<10; i++){
  fw_final = `<span style="font-weight:${fw_props[i]}">${fw_str[i]}<span>`
}
//fw.innerHTML = fw_final

let fs = document.getElementById('fs')
console.log(fs)
