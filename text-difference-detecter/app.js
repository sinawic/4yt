const form = document.getElementById('form'),
  result = document.getElementById('result'),
  origtext = document.getElementById('original-text'),
  reset = document.getElementById('reset'),
  percentage = document.getElementById('percentage')

let text = ''

const settext = (el, t = text) => {
  el.innerHTML = t
}

const detectDifferences = () => {
  const ot = origtext.value.split(' '),
    arr = text.split(' ')

  let correct = 0
  const t = arr.map((word, i) => {
    if (word === ot[i]) correct++
    return `<strong class="text-${word === ot[i] ? 'success' : 'danger'}">${word}</strong>`
  }).join(' ')
  settext(percentage, Math.round((correct / arr.length) * 100) + '%')
  settext(result, t)
}

origtext.onkeyup = () => {
  text && detectDifferences()
}

form.onsubmit = (e) => {
  e.preventDefault()
  text = origtext.value
  origtext.value = ''
  settext(result)
}

reset.onclick = () => {
  origtext.value = ''
  settext(percentage, '0%')
  text = ''
  settext(result)
}