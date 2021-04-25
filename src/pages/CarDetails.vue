<template>
  <q-page class="flex flex-center">
    <b-card
      v-show="loaded"
      no-body
      class="overflow-hidden"
      style="min-width: 1000px; max-width:1000px;"
    >
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="car.photo"
            class="rounded-0"
            style="height: 100%"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body
            :sub-title="car.model"
            :title="`${car.year} ${car.make}`"
          >
            <b-card-text>
              {{ car.description }}
            </b-card-text>
            <b-row  cols="2">
              <b-col> Color {{ car.colour }} </b-col>
              <b-col> Body Type {{ car.car_type }} </b-col>
              <b-col> Price {{ currencyFormat(car.price) }} </b-col>
              <b-col>
                Transmission {{car.transmission}}
              </b-col>
            </b-row>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>
  </q-page>
</template>
<script>
import CarService from "../services/car.service";
export default {
  data() {
    return {
      loaded: false,
      car: null
    };
  },
  created() {
    console.log(this.$route.params.id);
    CarService.getCarByID(this.$route.params.id).then((res, err) => {
      if (!err) {

        this.car = res.data;
        console.log(this.car)
        this.loaded = true;
      }
    });
  },
  methods: {
    currencyFormat(value) {
      const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      });
      return formatter.format(value);
    }
  }
};
</script>
<style scoped></style>
