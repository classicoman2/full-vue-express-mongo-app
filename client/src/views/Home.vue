<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Name</th>
        <th scope="col">Birth Date</th>
        <th scope="col">Height</th>
        <th scope="col">weight</th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody id="afegirAqui">
      <tr v-for="cyclist in cyclists" :key="cyclist.id">
        <td>{{ cyclist._id.substr(0, 5) }}</td>
        <td>{{ cyclist.name }}</td>
        <td>{{ formataData(String(cyclist.birth_date).substr(0, 10)) }}</td>
        <td>{{ formataHeight(String(cyclist.height)) }} m.</td>
        <td>{{ cyclist.weight }} Kg.</td>
        <td>
          <button @click="removeCyclist(cyclist._id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>

  <div class="container">
    <InsertCyclistModalForm :cyclists_url="`${this.api_url}/cyclists`" @refrescaLlistatCiclistes="getCyclistsAll" />
  </div>
</template>

<script>
import InsertCyclistModalForm from "../components/InsertCyclistModalForm.vue"

export default {
  name: 'Home',
  components: {
    InsertCyclistModalForm
  },
  data() {
    return {
      api_url: "",
      cyclists: []
    }
  },
  methods: {
    async getCyclistsAll() {

      let url = `${this.api_url}/cyclists`

      try {
        const res = await fetch(url)
        const data = await res.json()
        // Store all data to display it in the template.
        this.cyclists = data
      } catch (error) {
        console.error('Error en getCyclists:', error)
      }
    },
    /* 
      Remove a cyclist
    */
    removeCyclist(id) {
      // Delete in Collection
      if (!window.confirm("Estàs segur que vols eliminar aquest ciclista?"))
        return

      fetch(`${this.api_url}/cyclists/delete/${id}`, {
        method: 'DELETE'
      })
        .then(response => {
          if (response.status == "200")
            console.log('Ciclista Eliminat')
          else
            throw new Error(response.status)
          response.text()
        })
        .then(text => console.log(text))


      //Delete in the cyclists array
      let index = this.cyclists.findIndex((cyclist) => {
        return id == cyclist._id
      })
      this.cyclists.splice(index, 1)
    },

    formataData(data_in) {
      const mesos = ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Des"]
      let dia = data_in.substring(8, 10)
      let mes = mesos[data_in.substring(5, 7) - 1]
      let any = data_in.substring(0, 4)

      return `${dia}-${mes}-${any}`
    },

    formataHeight(centimetres) { return `${centimetres[0]}.${centimetres.substring(1, 3)}` }

  },




  // On mounted
  mounted() {
    //Set api_url
    if (String(window.location).split("//")[1].substring(0, 9) == "localhost")
      this.api_url = `http://localhost:5000/api`
    else
      this.api_url = `${window.location}api`

    this.getCyclistsAll()
  }
}
</script>
