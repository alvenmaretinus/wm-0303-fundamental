// switch case menerima keyword (case) untuk dibandingkan (number/string)

const job = 'Dokter'

switch (job) {
  case 'Programmer':
    console.log('You make great applications out of code')
    break
  case 'Doctor':
  case 'Dokter':
    console.log('You heal the sick ones')
    break
  case 'Chef':
    console.log('You cook delicious and irresistable food')
    break
  default:
    console.log('What do you do?')
}
