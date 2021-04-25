<template>
  <q-page class="flex flex-center">
    <b-card style="margin-top:3vh;" title="Add New Car">
      <b-form @submit="saveCar_">
        <b-form-row>
          <b-form-group
            id="input-group-make"
            label="Make:"
            label-for="input-make"
          >
            <b-form-input
              id="input-make"
              placeholder="Tesla"
              required
              v-model="car.make"
            ></b-form-input>
          </b-form-group>
          <b-form-group
            class="ml-4"
            id="input-group-model"
            label="Model:"
            label-for="input-model"
          >
            <b-form-input
              id="input-model"
              placeholder="Model S"
              v-model="car.model"
              required
            ></b-form-input>
          </b-form-group>
        </b-form-row>
        <b-form-row>
          <b-form-group
            id="input-group-color"
            label="Color:"
            label-for="input-color"
          >
            <b-form-input
              id="input-color"
              placeholder="Red"
              v-model="car.colour"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            class="ml-4"
            id="input-group-year"
            label="Year:"
            label-for="input-year"
          >
            <b-form-input
              id="input-year"
              type="number"
              placeholder="2018"
              v-model="car.year"
              required
            ></b-form-input>
          </b-form-group>
        </b-form-row>
        <b-form-row>
          <b-form-group
            id="input-group-price"
            label="Price:"
            label-for="input-price"
          >
            <b-form-input
              id="input-price"
              type="number"
              v-model="car.price"
              placeholder="62888"
              required
            ></b-form-input>
          </b-form-group>
          <b-form-group
            id="input-group-car-type"
            label="Car Type:"
            class="ml-4"
            label-for="car-type"
          >
            <b-form-select
              id="car-type"
              v-model="car.type"
              :options="carTypes"
              required
            ></b-form-select>
          </b-form-group>
        </b-form-row>
        <b-form-row>
          <b-form-group
            content-cols-lg="10"
            id="input-group-transmission"
            label="Transmission:"
            label-for="transmission"
          >
            <b-form-select
              id="transmission"
              v-model="car.transmission"
              :options="transmissionTypes"
              required
            ></b-form-select>
          </b-form-group>
        </b-form-row>
        <b-form-row>
          <b-form-group
            id="input-group-description"
            label="Description:"
            label-for="input-description"
          >
            <b-form-textarea
              id="input-description"
              v-model="car.description"
              placeholder="Description..."
              cols="48"
              rows="2"
              max-rows="6"
            ></b-form-textarea>
          </b-form-group>
        </b-form-row>
        <b-form-row>
          <b-form-group
            id="input-group-photo"
            label="Photo:"
            label-for="input-photo"
          >
            <b-form-file
              id="input-photo"
              v-model="photo"
              :state="Boolean(car.photo)"
              placeholder="Choose a file or drop it here..."
              drop-placeholder="Drop file here..."
            ></b-form-file>
          </b-form-group>
        </b-form-row>
        <div
          v-if="message"
          class="alert"
          :class="successful ? 'alert-success' : 'alert-danger'"
        >
          {{ message }}
        </div>
        <b-button :disabled="loading" type="submit" variant="success"
          ><span
            v-show="loading"
            class="spinner-border spinner-border-sm"
          ></span>
          <span v-show="!loading">Save</span></b-button
        >
      </b-form>
    </b-card>
  </q-page>
</template>
<script>
import Car from "../models/cars";
import CarService from "../services/car.service";
import axios from "axios";

export default {
  data() {
    return {
      car: new Car("", ""),
      message: null,
      loading: false,
      photo: [],
      successful: null,
      carTypes: [
        { value: "Limousine", text: "Limousine" },
        { value: "Micro Car", text: "Micro Car" },
        { value: "Hatchback", text: "Hatchback" },
        { value: "Sports Utility Vehicle", text: "Sports Utility Vehicle" },
        { value: "Sedan", text: "Sedan" },
        { value: "Family Car", text: "Family Car" },
        { value: "Pickup", text: "Pickup" },
        { value: "SUV", text: "SUV" }
      ],
      transmissionTypes: [
        { value: "Automatic", text: "Automoatic" },
        { value: "Semi-Automatic", text: "Semi-Automatic" },
        { value: "Manual", text: "Manual" },
        { value: "Variable", text: "Variable" }
      ]
    };
  },
  methods: {
    saveCar_(e) {
      e.preventDefault();
      this.loading = true;
      const user_id = this.$store.state.auth.user.user.id;
      this.message = "";

      const upload_url =
        " https://api.cloudinary.com/v1_1/djhycr4me/image/upload";
      const fd = new FormData();

      fd.append("file", this.photo);
      fd.append("upload_preset", "webdev2");
      const vehicle = this.car;
      axios.post(upload_url, fd).then(res => {
        this.car.photo = res.data.url;
        console.log("this working");
        CarService.saveCar(vehicle, user_id).then(
          data => {
            this.message = "Car added Successfully";
            this.successful = true;
            this.loading = false;
          },
          error => {
            this.message =
              (error.response && error.response.data) ||
              error.message ||
              error.toString();
            this.successful = false;
            this.loading=false;
          }
        );
      });
    }
  }
};
</script>
<style></style>
