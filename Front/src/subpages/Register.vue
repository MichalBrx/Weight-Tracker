<script>
import axios from "axios";
// przebudowac <script> tag tak zeby mozna było wyswietlic zlapane errory (sprobuj uzyc try{} catch{})

export default {
  name: "Login",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async createUser() {
      var data = JSON.stringify({
        name: this.name,
        email: this.email,
        password: this.password,
      });

      var config = {
        method: "post",
        url: "http://localhost:3000/register",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      await axios(config)
        .then((res) => {
          console.log(JSON.stringify(res.data));
        })
        .catch((e) => {
          if (e.response.status === 406) {
            this.error = e.response.data.message;
          } else if (e.response.status === 422) {
            this.error = e.response.data.message;
          }
        });
    },
  },
};
</script>

<template>
  <div class="bg-base-100 sm:bg-white">
    <div class="m-2 mx-3 sm:flex sm:justify-center">
      <div class="mockup-phone border-primary my-5 md:mt-20">
        <div class="camera"></div>
        <div class="display">
          <div class="artboard artboard-demo phone-1 bg-violet-300">
            <div
              class="w-full h-16 bg-violet-900 flex justify-center items-center text-white font-semibold text-2xl font-mono px-3 relative"
            >
              <h1
                class="w-full text-center m-1 max-w-min flex-wrap sm:max-w-none"
              >
                Weight Tracker
              </h1>
            </div>
            <div
              v-if="error"
              class="text-red-700 font-semibold px-8 sm:px-16 m-2 p-2 border border-red-700 bg-rose-400 rounded"
            >
              <p>
                {{ error }}
              </p>
            </div>
            <form
              id="form"
              @submit.prevent="createUser()"
              class="sm:p-10 p-5 pt-14 flex flex-wrap gap-5 sm:justify-center -mt-5"
            >
              <label for="name" class="w-full ml-2 font-semibold text-black"
                >Name</label
              >
              <input
                type="text"
                placeholder="name"
                v-model="name"
                class="-mt-4 p-1 rounded-md w-full pl-3 focus:outline-none focus:border focus:border-violet-900"
              />

              <label for="email" class="w-full ml-2 font-semibold text-black"
                >Email</label
              >
              <input
                type="text"
                placeholder="email"
                v-model="email"
                class="-mt-4 p-1 rounded-md w-full pl-3 focus:outline-none focus:border focus:border-violet-900"
              />

              <label for="password" class="w-full ml-2 font-semibold text-black"
                >Password</label
              >
              <input
                type="text"
                placeholder="password"
                v-model="password"
                class="-mt-4 p-1 rounded-md w-full pl-3 focus:outline-none focus:border focus:border-violet-900"
              />

              <button
                type="submit"
                class="p-1 rounded-md w-36 h-10 pl-3 bg-gradient-to-r from-violet-500 to-fuchsia-400 text-white font-semibold mt-5 flex-start"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
