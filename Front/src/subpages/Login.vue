<script>
import axios from "axios";

export default {
  data() {
    name: "Login";
    return {
      email: "",
      password: "",
      error: "",
    };
  },
  methods: {
    async SiginIn() {
      var data = JSON.stringify({
        email: this.email,
        password: this.password,
      });
      var config = {
        method: "post",
        url: "http://localhost:3000/login",
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };

      await axios(config)
        .then((res) => {
          console.log(res);
          window.location.href = "/";
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
      <div class="flex md:mt-20 gap-3">
        <div class="mockup-phone border-primary my-5">
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
                @submit.prevent="SiginIn()"
                class="sm:p-10 p-5 pt-14 flex flex-wrap gap-5 sm:justify-center -mt-5"
              >
                <label for="email" class="w-full ml-2 font-semibold text-black"
                  >Email</label
                >
                <input
                  type="text"
                  placeholder="email"
                  v-model="email"
                  class="-mt-4 p-1 rounded-md w-full pl-3 focus:outline-none focus:border focus:border-violet-900"
                />

                <label
                  for="password"
                  class="w-full ml-2 font-semibold text-black"
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
                  class="p-1 rounded-md w-36 h-10 pl-3 bg-gradient-to-r from-violet-600 to-fuchsia-500 hover:scale-110 active:scale-100 duration-200 text-white font-semibold mt-5 flex-start"
                >
                  Sign In
                </button>
              </form>
              <div class="text-center font-semibold">
                <h4 class="text-violet-900">Don't have an account?</h4>
                <a
                  class="text-fuchsia-500 hover:cursor-pointer"
                  href="#/register"
                  >Sign Up first</a
                >
              </div>
            </div>
          </div>
        </div>
        <div class="hidden md:flex mt-28 max-w-md">
          <div class="flex justify-center flex-wrap">
            <h1 class="text-4xl text-center font-medium">
              If <label class="font-bold text-fuchsia-500">YOU</label> want to
              lose weight,<br />
              <label class="font-bold text-violet-600">WE</label> will make it
              easier
            </h1>
            <img
              src="../../yoga2.png"
              alt="yoga position"
              class="h-96 w-96 brightness-200"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
