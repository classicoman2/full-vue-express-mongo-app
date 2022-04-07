<template>
  <table class="table">
    <thead>
      <tr>
        <th scope="col">id</th>
        <th scope="col">Name</th>
        <th scope="col">Birth Date</th>
        <th scope="col">Height</th>
        <th scope="col">weight</th>
        <th scope="col">Delete?</th>
      </tr>
    </thead>
    <tbody id="afegirAqui">
      <tr v-for="cyclist in cyclists" :key="cyclist.id">
        <td>{{ cyclist._id.substr(0, 5) }}</td>
        <td>{{ cyclist.name }}</td>
        <td>{{ String(cyclist.birth_date).substr(0, 9) }}</td>
        <td>{{ cyclist.height }}</td>
        <td>{{ cyclist.weight }}</td>
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
    }
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
