document.addEventListener('mousemove', function(event) {
  const mouseX = event.pageX
  const mouseY = event.pageY

  let images = document.querySelectorAll('img')

  Array.from(images).map(img => {
    let imgX = window.scrollX + img.getBoundingClientRect().left + 70
    let imgY = window.scrollY + img.getBoundingClientRect().top + 70

    let diffX = mouseX - imgX
    let diffY = mouseY - imgY

    let radians = Math.atan2(diffY, diffX)

    let angle = (radians * 180) / Math.PI

    return (img.style.transform = 'rotate(' + angle + 'deg)')
  })
})
