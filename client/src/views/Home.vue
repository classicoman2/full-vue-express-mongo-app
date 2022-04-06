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
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" placeholder="Enter name" />
    </div>
    <button id="submit" class="btn btn-secondary">Submit</button>
  </div>
</template>

<script>

export default {
  name: 'Home',
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
        let index = this.cyclists.findIndex( (cyclist) => {
          return id==cyclist._id
        })
        this.cyclists.splice(index, 1)
    }
  },


  // On mounted
  mounted() {
    //Set api_url
    let port = (String(window.location).split("//")[1].substring(0,9)=="localhost") ? 5000 : 80

    this.api_url = `http://localhost:${port}/api`


    this.getCyclistsAll()
  }
}
</script>
