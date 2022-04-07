<template>
  <div class="modal-dialog-backdrop" style="display:none"></div>
  <!-- Button trigger modal -->
  <button @click="showModal" type="button">New User</button>
  <!-- Modal -->
  <div class="modal-dialog" style="display:none">
    <div class="container">
      <!-- TIP: the submit event will no longer reload the page -->
      <form @submit.prevent="onSubmit">
        <h1>Subscription Form</h1>
        <div class="box">
          <label for="name">Name:</label>
          <input v-model="dataForm.name" type="text" id="name" />
        </div>

        <div>
          <button @click="guardarCiclista" id="sendModal">Guardar</button>
          <button @click="closeModal" id="closeModal">Tancar</button>
        </div>
      </form>
    </div>
  </div>
</template>


<script>
export default {
  name: 'InsertCyclistModalForm',
  props: {
    cyclists_url: String
  },
  emits: ['refrescaLlistatCiclistes'],
  data() {
    return {
      // prettier-ignore
      dataForm: {
        name: ''
      }
    }
  },
  methods: {
    showModal() {
      document.querySelector(".modal-dialog").style.display = 'block'
      document.querySelector(".modal-dialog-backdrop").style.display = 'block'
    },
    closeModal() {
      document.querySelector(".modal-dialog").style.display = 'none'
      document.querySelector(".modal-dialog-backdrop").style.display = 'none'
      //TODO: add a CSS Transition!
    },

    guardarCiclista() {

      //Validate data
      if (this.validateInput(this.dataForm)) {

        // Guardar dades del ciclista.
        this.insertCyclist(this.dataForm)

        //Clear the form
        for (const property in this.dataForm)
          this.dataForm[property] = ''

        //Close the modal
        this.closeModal()
      }
      else {
        // Do nothing
      }
    },

    validateInput() {
      //TODO: pendent validació de form i mostrar missatges (com a classe!)
      return true
    },

    async insertCyclist(cyclist) {
      const response = await fetch(this.cyclists_url, {
        method: 'POST',
        body: JSON.stringify(cyclist),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      const result = await response.json()
      //TODO crea un modal enlloc d'aquest console.log
      console.log(result)

      //Actualitza llistat de clients al parent component
      //TIP-emit empra Emit per actualitzar llistat del parent component.
      this.$emit('refrescaLlistatCiclistes')
    }
  }
}
</script>


<style scoped>
.modal-dialog-backdrop {
  width: 100%;
  height: 100%;
  background-color: lightgrey;
  position: fixed;
  top: 0;
  z-index: 1;
  opacity: 0.8;
}

.modal-dialog {
  position: fixed;
  z-index: 1;
  width: 100%;
  top: 100px;
}

* {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

form {
  background-color: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.box {
  display: flex;
  justify-content: center;
  margin: 5px 0px;
  width: 100%;
}

label {
  width: 90px;
  text-align: right;
  margin-right: 6px;
  line-height: 31px;
}

input {
  border: 1px solid #ccc !important;
  padding: 5px;
  min-width: 67%;
}

button {
  color: #fff !important;
  background-color: #2196f3 !important;
  border-radius: 5px;
  border: 0px;
  padding: 4px 11px;
  margin: 0px 3px;
  font-size: 1.2rem;
  cursor: pointer;
}

button:hover {
  background-color: #4eadfa !important;
}

button:active {
  background-color: #0080e9 !important;
}
</style>