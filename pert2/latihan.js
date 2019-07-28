const mass = prompt('massa(kg)?')
const height = prompt('tinggi(meter)?')
const imt = mass / Math.pow(height, 2)

if (imt < 18.5) {
  alert('berat badan kurang')
}
else if (imt >= 18.5 && imt <= 24.9) {
  alert('berat badan ideal')
}
else if (imt >= 25 && imt <= 29.9) {
  alert('berat badan ideal')
}
else if (imt >= 30 && imt <= 39.9) {
  alert('berat badan ideal')
}
else {
  alert('obesitas')
}
