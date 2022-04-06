// només en PRODUCCIO HEROKU
//  import regeneratorRuntime from 'regenerator-runtime'

//const mode = 'produccio'
const mode = "development";

let url = mode == 'produccio' ? window.location.href : 'http://localhost:5000/'
url += 'api/cyclists'

class cyclistModel {
  /**
   * Get all cyclists
   */
  static async getCyclists() {
    try {
      console.log('url' + url)

      const res = await fetch(url)
      const data = await res.json()
      mostraResultats(data)
    } catch (error) {
      console.error('Error en getCyclists:', error)
    }
  }

  /**
   * Add a cyclist
   *
   * @param {object} cyclist
   */
  static async addCyclist(cyclist) {
    try {
      fetch(url + '/add', {
        method: 'POST',
        body: JSON.stringify({
          name: cyclist.name,
          birth_date: cyclist.birth_date,
          weight: cyclist.weight,
          height: cyclist.height,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((json) => {
          //refresca
          this.getCyclists()
        })
    } catch (error) {
      console.error('Error en addCyclist:', error)
    }
  }

  static async deleteCyclist(id) {
    try {
      fetch(url + '/delete/' + id, {
        method: 'DELETE',
      }).then((json) => {
        //refresca
        this.getCyclists()
      })
    } catch (error) {
      console.error('Error en deleteCyclist:', error)
    }
  }
}

/**
 *  Mostra els ciclistes
 *
 * @param {*} data
 */
function mostraResultats(data) {
  let afegirAqui = document.getElementById('afegirAqui')

  //buida
  afegirAqui.innerHTML = ''

  console.log(data)

  data.forEach((c) => {
    let tr = document.createElement('tr')
    afegirAqui.appendChild(tr)

    //xtoni - afegir només el nom
    let th = document.createElement('th')
    th.innerHTML = `${c.name}`
    tr.appendChild(th)

    th = document.createElement('th')
    tr.appendChild(th)

    // Botó Delete
    let boto = document.createElement('button')
    boto.innerHTML = 'X'
    boto.setAttribute('onclick', `cyclistModel.deleteCyclist('${c._id}')`)
    th.appendChild(boto)
  })
}

window.onload = function () {
  document.getElementById('submit').addEventListener('click', () => {
    // test: afegir un ciclista
    cyclistModel.addCyclist({
      name: document.getElementById('name').value.trim(),
      birth_date: '01-01-2020',
      weight: 100,
      height: 100,
    })

    //refresca
    cyclistModel.getCyclists()
  })

  console.log('Iniciant...')
  var cyclists = cyclistModel.getCyclists()
  console.log(cyclists)
  console.log('Final')
}
