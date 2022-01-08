<template>
  <div class="container">
    <h1>Calculo do IMC</h1>
    <h3>Digite seu peso</h3>
    <!--declarando o componente importado-->
    <div class="div-imc">
      <!--peso-->
      <span class="p-float-label">
        <InputText
          id="input-weight"
          type="number"
          v-model="weight"
          :disabled="imc"
          placeholder="00"
        />
        <label for="input-weight">Peso</label>
      </span>
    </div>
    <div class="div-imc">
      <!--altura-->
      <span class="p-float-label">
        <InputText
          id="input-height"
          type="number"
          v-model="height"
          :disabled="imc"
          placeholder="0,00"
        />
        <label for="input-height">Altura</label>
      </span>
    </div>
    <div v-show="!imc" class="div-imc div-btn">
      <Button @click="calculate" label="Calcular" />
      <Button @click="clear" label="Limpar" />
    </div>

    <div v-if="imc">
      <p class="label-result">
        seu imc é: <strong> {{ imc }} </strong>
      </p>
      <p class="label-result">a classificação é: {{ classification }}</p>
      <Button @click="clear" label="Calcular novamente" />
    </div>
    <div v-if="isNull">
      <p class="label-result">
        Os campos não podem estar <strong>vazios</strong>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      height: null,
      weight: null,
      imc: null,
      classification: "",
      isNull: false,
    };
  },
  methods: {
    calculate: function () {
      if (this.weight == null || this.height == null) {
        this.isNull = true;
      } else {
        this.isNull = false;
        this.imc = (this.weight / (this.height * this.height)).toFixed(2);
        if (this.imc < 18.5) {
          this.classification = "Magreza";
        } else if (this.imc >= 18.5 && this.imc < 25) {
          this.classification = "Normal";
        } else if (this.imc >= 25 && this.imc < 30) {
          this.classification = "Sobrepeso";
        } else if (this.imc >= 30 && this.imc < 40) {
          this.classification = "Obesidade";
        } else {
          this.classification = "Obesidade grave";
        }
      }
    },
    clear: function () {
      this.height = null;
      this.weight = null;
      this.imc = null;
      this.classification = "";
      this.isNull = false;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.div-imc {
  margin-top: 2rem;
}
.div-btn {
  display: flex;
  margin: auto;
  margin-top: 2rem;
  width: 200px;
  justify-content: space-between;
}
.label-result {
  font-size: 1.2em;
}
.container {
  text-align: center;
  background-color: rgb(226, 235, 243);
  width: 360px;
  height: 500px;
  margin: auto;
  border-radius: 0.7rem;
  padding: 1.7rem;
}
</style>
