const parent = document.getElementById('parent')
const grid = document.getElementById('grid')

let minTemp, maxTemp
let array = []
for (let index = 0; index < 50; index++) {
    array[index] = []
    for (let j = 0; j < 50; j++) {
        let temp = Math.ceil(Math.random() + (index * Math.random()))
        if (minTemp > temp || (index === 0 && j === 0))
            minTemp = temp

        if (maxTemp < temp || (index === 0 && j === 0))
            maxTemp = temp
        
        array[index].push(
            {index: index * 10 + j,
            temp}
        )

        let div = document.createElement('div')
        div.setAttribute('style', `background-color: ${detecAlpha(temp)}`)

        grid.appendChild(div)
    }    
}

grid.style.gridTemplateRows = `repeat(${array.length}, 1fr)`
grid.style.gridTemplateColumns = `repeat(${array.length}, 1fr)`

function detecAlpha(temp){
    const threshold = (minTemp + maxTemp) / 2

    if (temp > threshold)
        return `rgba(255,0,0,${(temp - threshold) / (maxTemp - threshold)})`
    else
        return `rgba(0,0,255,${1 - (temp - minTemp) / (threshold - minTemp)})`
}