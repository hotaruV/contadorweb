window.onload = () => {
    let links = document.querySelectorAll('.link')
    let inicio = document.querySelector('.inicio');
    inicio.addEventListener('click', () => {
        primero.classList.remove('link--active')
        segundo.classList.remove('link--active')
        tercero.classList.remove('link--active')
        cuarto.classList.remove('link--active')
        scrollSuave('#inicio', 1000, 84)
    })
    //console.log(links[6]);
    
    let primero = links[1]
    primero.addEventListener('click', () => {
        primero.classList.add('link--active')
        segundo.classList.remove('link--active')
        tercero.classList.remove('link--active')
        cuarto.classList.remove('link--active')
      scrollSuave('#sobre', 1000, 81)
    })
  
    let segundo = links[2]
    segundo.addEventListener('click', () => {
        primero.classList.remove('link--active')
        segundo.classList.add('link--active')
        tercero.classList.remove('link--active')
        cuarto.classList.remove('link--active')
      scrollSuave('#servicio', 1000, 78)
    })
  
    let tercero = links[3]
    tercero.addEventListener('click', () => {
        primero.classList.remove('link--active')
        segundo.classList.remove('link--active')
        tercero.classList.add('link--active')
        cuarto.classList.remove('link--active')
      scrollSuave('#valores', 1000, 75)
    })
    let cuarto = links[5]
    cuarto.addEventListener('click', () => {
        primero.classList.remove('link--active')
        segundo.classList.remove('link--active')
        tercero.classList.remove('link--active')
        cuarto.classList.add('link--active')
      scrollSuave('#contacto', 1000, 72)
    })
  }
  
  
  const scrollSuave = (objetivo, duracion, compensacion) => {
    let elemObj = document.querySelector(objetivo)
    let elemPos = elemObj.getBoundingClientRect().top - compensacion
    let posInicial = window.pageYOffset
    let tiempoInicial = null
  
    const animacion = tiempoAhora => {
      if (tiempoInicial === null) tiempoInicial = tiempoAhora
      tiempoPasado = tiempoAhora - tiempoInicial
      let auxAnimacion = easeInOutQuad(tiempoPasado, posInicial, elemPos, duracion)
      window.scrollTo(0, auxAnimacion)
      if (tiempoPasado < duracion) requestAnimationFrame(animacion)
    }
    requestAnimationFrame(animacion)
  }
  
  const easeInOutQuad = (t, b, c, d) => {
    t /= d / 2
    if (t < 1) return c / 2 * t * t + b
    t--
    return - c / 2 * (t * (t - 2) - 1) + b
  }