const currentColor = document.getElementById("colorpicker").value.slice(1)
const colorScheme = document.getElementById("color-select").value
document.getElementById("color-btn").addEventListener("click", function(){
    console.log(currentColor)
    console.log(colorScheme)
    render()
})
function getColorHTML(){
    let colorHTML = ''
        fetch(`https://www.thecolorapi.com/scheme?hex=${currentColor}&mode=${colorScheme}&count=5`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.colors.forEach(element => {
                console.log(element.hex.value)
                colorHTML += `
                <div class="color-container">
                    <div id="${element.hex.clean}"></div>
                    <h1>${element.hex.value}</h1>
                </div>`
                document.getElementById(`${element.hex.clean}`).style.background = `${element.hex.value}`
            })
        })
    return colorHTML
}
function render(){
    document.getElementById("color-grid").innerHTML = getColorHTML()
}