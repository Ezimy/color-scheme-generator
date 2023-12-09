const currentColor = document.getElementById("colorpicker")
const colorScheme = document.getElementById("color-select")
getColor()
document.addEventListener('click', function(e){
        if(e.target.id === "color-btn"){
            document.getElementById("color-btn").addEventListener("click", function(){
                getColor()
            })
        }
        if(e.target.classList.contains("label")){
        copyTextToClipboard(e.target.innerText)
        }
    })
    function copyTextToClipboard(text) {
        navigator.clipboard.writeText(text)
            .then(() => {
                console.log('Text copied to clipboard:', text);
            })
            .catch(err => {
                console.error('Unable to copy text to clipboard', err);
            });
    }
function getColor(){
    let color = currentColor.value.slice(1)
	let colorMode = colorScheme.value
    fetch(`https://www.thecolorapi.com/scheme?hex=${color}&mode=${colorMode}&count=5`)
        .then(res => res.json())
        .then(data => {
            let hexValues = data.colors.map((hex)=> {
                return hex.hex.value
            })
            hexValues.forEach((element, index) => {
                let colorElement = document.getElementById(`color-${index}`)
                let colorElementLabel = document.getElementById(`color-label-${index}`)
                console.log(colorElement)
                colorElement.style.backgroundColor = element
                colorElementLabel.innerText = element
            });
        })
}
