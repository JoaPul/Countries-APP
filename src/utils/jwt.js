// funciionalidad para ver si el usuario si inicio la sesion y mantener la seioin iniciada
// en terminal= npm i jwt-decode
import jwtDecode from 'jwt-decode'

// validar el token
const isValidToken = (token) => {
  if (!token) {
    // test
    // console.log('invalid token')
    return false
  }

  // se checa si el token esta expirado
  const { exp } = jwtDecode(token)
  // no entendi porque entre 100, pero eso se checa en la doc de jwt
  const currentTime = Date.now() / 100

  // se necesita tener una conversion en el 'exp' para que nos de el mismo dia, que el current(multiplicarlo por 1000)
  return (exp * 1000) > currentTime
}

// guardar la sesión
const setSession = (token) => {
  if (token) {
    window.localStorage.setItem('token', token)
  } else {
    window.localStorage.removeItem('token')
  }
}

export { isValidToken, setSession }
