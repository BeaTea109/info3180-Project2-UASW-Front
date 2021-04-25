<template>
  <q-page class="flex flex-center">
    <div style="width:70%">
      <h3 style="margin-bottom:1rem; margin-top: 12vw;">
        <strong>Explore</strong>
      </h3>
      <q-card class="search">
        <b-row class="row items-center justify-center">
          <b-col xl="4" md="6" sm="6">
            <b-form-input
              id="input-1"
              type="text"
              placeholder="Make"
              required
            ></b-form-input>
          </b-col>
          <b-col xl="4" md="6" sm="6">
            <b-form-input
              id="input-1"
              type="text"
              placeholder="Model"
              required
            ></b-form-input>
          </b-col>
          <b-col xl="3" md="12" sm="12">
            <b-button block variant="success">Search</b-button>
          </b-col>
        </b-row>
      </q-card>
      <b-row
        style="margin-top:1.2rem; padding: 0px 1vw 0px 1vw"
        class="row items-center justify-around"
      >
        <b-card-group deck>
          <b-card
            :img-src="car.photo"
            img-alt="Image"
            img-top
            tag="article"
            class="car-card"
            v-for="(car,index) in cars"
            :key="index + '-car'"
          >
            <b-row class="items-start justify-around">
              <b-col xl="6" lg="12" md="12" sm="12" col="6">
                <b-card-title>
                  {{car.year}} {{car.make}}
                </b-card-title>
                <b-card-sub-title sub-title-text-variant="muted">
                  {{car.model}}
                </b-card-sub-title>
              </b-col>
              <b-col xl="6" lg="12" md="12" sm="12">
                <h4>
                  <b-badge pill variant="success"><BIconTag />{{currencyFormat(car.price)}}</b-badge>
                </h4>
              </b-col>
            </b-row>
            <b-button :to="`/cars/${car.id}`" block href="#" style="margin-top:1rem;" variant="primary"
              >View More Details</b-button
            >
          </b-card>
        </b-card-group>
      </b-row>
    </div>
  </q-page>
</template>

<script>
import { BIconTag } from "bootstrap-vue";
import CarService from "../services/car.service";

export default {
  components: {
    BIconTag
  },
  data(){
    return {
      cars: []
    }
  },
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn;
    },
  },
  methods:{
      currencyFormat(value){
         const formatter = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});
         return formatter.format(value)
      }
  },
  created() {
    if (!this.loggedIn) {
      this.$router.push("/");
    }

    CarService.getCars().then((res, err) => {
      if (err !== null){
        this.cars = res.data?.cars || []

        console.log(this.cars)
      }
    })
  }
};
</script>

<style lang="scss">
.search {
  min-height: 15vh;
  display: grid;
  padding: 1vw 1vw 1vw 1vw;
}

.car-card {
}
</style>
