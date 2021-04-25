<template>
  <q-page padding class="flex flex-center" style="flexDirection:column">
    <b-card
      v-show="loaded"
      no-body
      class="overflow-hidden"
      style="width: 60%; margin-top:6rem;"
    >
      <b-row no-gutters>
        <b-col md="6">
          <b-card-img
            :src="user.photo"
            alt="Image"
            class="rounded-0 profile-img"
          ></b-card-img>
        </b-col>
        <b-col md="6">
          <b-card-body
            :sub-title="`@${user.username}`"
            title-tag="h2"
            sub-title-tag="h4"
            :title="`${user.first_name} ${user.last_name}`"
          >
            <b-card-text style="color:#798188">
              {{ user.biography }}
            </b-card-text>

            <b-row>
              <b-col cols="3" style="color:#798188">
                Email
              </b-col>
              <b-col cols="8">
                {{ user.email }}
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="3" style="color:#798188">
                Location
              </b-col>
              <b-col cols="8">
                {{ user.location }}
              </b-col>
            </b-row>
            <b-row>
              <b-col cols="3" style="color:#798188">
                Joined
              </b-col>
              <b-col cols="8">
                {{ dateFormat(user.date_joined) }}
              </b-col>
            </b-row>
          </b-card-body>
        </b-col>
      </b-row>
    </b-card>

    <h2 style="font-weight:600; margin-top:1.2rem">Cars Favourited</h2>
    <div style="width:80%">
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
          v-for="(car, index) in cars"
          :key="index + '-car'"
        >
          <b-row class="items-start justify-around">
            <b-col xl="6" lg="12" md="12" sm="12" col="6">
              <b-card-title> {{ car.year }} {{ car.make }} </b-card-title>
              <b-card-sub-title sub-title-text-variant="muted">
                {{ car.model }}
              </b-card-sub-title>
            </b-col>
            <b-col xl="6" lg="12" md="12" sm="12">
              <h4>
                <b-badge pill variant="success"
                  ><BIconTag />{{ currencyFormat(car.price) }}</b-badge
                >
              </h4>
            </b-col>
          </b-row>
          <b-button
            :to="`/cars/${car.id}`"
            block
            href="#"
            style="margin-top:1rem;"
            variant="primary"
            >View More Details</b-button
          >
        </b-card>
      </b-card-group>
    </b-row>
    </div>
  </q-page>
</template>

<script>
import UserService from "../services/user.service";
import CarService from "../services/car.service";
export default {
  data() {
    return {
      loaded: false,
      user: null,
      cars: []
    };
  },
  created() {
    UserService.getUserBoard(this.$route.params.id).then((res, err) => {
      if (!err) {
        this.user = res.data;
        CarService.getUserFavouriteCars(this.$route.params.id).then(
          (res, err) => {
            if (!err) {
              this.cars = res.data.cars;
              console.log(this.cars);
              this.loaded = true;
            }
          }
        );
      }
    });
  },
  methods: {
    dateFormat(date) {
      const formatter = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
      return formatter.format(new Date(date));
    },
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

<style lang="scss" scoped>
.profile-img {
  height: 100%;
  object-fit: fill;
  object-position: center;
}
</style>
