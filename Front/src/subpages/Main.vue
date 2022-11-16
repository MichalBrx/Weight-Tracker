<script>
import Forms from "../components/Forms.vue";
import { useRouter } from "vue-router";
import axios from "axios";
const router = useRouter();

export default {
  name: "Main",
  data() {
    return {
      info: {},
    };
  },
  components: {
    Forms,
  },
  methods: {
    openNav() {
      document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
      document.getElementById("mySidenav").style.width = "0";
    },
  },
  async mounted() {
    // async getUser() {
    //   var config = {
    //     method: "get",
    //     url: "http://localhost:3000/user",
    //   };
    //   await axios(config)
    //     .then((res) => {
    //       this.info = res;
    //     })
    //     .catch((e) => {
    //       console.log(e);
    //     });
    // },
    await axios
      .get("http://localhost:3000/user")
      .then((res) => {
        this.info = res;
      })
      .catch((e) => {
        console.log(e);
      });
  },
};
</script>

<template>
  <div id="container">
    <div
      id="NavBar"
      class="w-full h-16 bg-violet-900 flex justify-center items-center text-white font-semibold text-2xl font-mono px-3 md:px-60"
    >
      <h1 class="w-full flex justify-center">Weight Tracker</h1>
      <label class="drawer-button btn btn-primary md:hidden w-10 h-10">
        <button class="material-icons" @click="openNav()">menu</button>
      </label>
    </div>

    <!-- MOBILE -->
    <div
      id="mySidenav"
      class="fixed w-0 top-0 right-0 overflow-x-hidden pt-16 duration-150 z-50 bg-violet-200 shadow-md h-full md:hidden"
    >
      <div class="flex w-full justify-start ml-5">
        <a
          class="p-2 block duration-75 h-10 w-10 text-4xl z-20"
          @click="closeNav()"
          >&times;</a
        >
      </div>
      <div class="flex justify-end w-full">
        <ul class="menu pt-4 w-2/3 text-violet-900 font-semibold text-xl">
          <li>
            <a
              class="p-2 pr-6 duration-75 w-full rounded-l-lg flex justify-end"
              href="#/login"
              >Login</a
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="md:hidden">
      <div id="content" class="w-full">
        <h1 class="w-full text-center text-3xl mt-5">Hello {user}</h1>
        <div id="Forms">
          <div id="CaloriesForm">
            <h3 class="w-full text-center text-lg font-semibold mt-6">
              Add Calories
            </h3>
            <p class="text-center">
              Write down what you eat to keep track of your calories
            </p>
            <div class="w-full justify-center flex flex-wrap gap-2 mt-3">
              <input
                type="text"
                required
                placeholder="Name of food"
                class="border w-48 p-1 px-3"
              />
              <input
                type="time"
                required
                id="currentTime"
                v-model="time"
                class="border w-48 p-1 px-3"
              />
              <input
                type="text"
                required
                placeholder="Calories per 100 g/ml"
                class="border w-48 p-1 px-3"
              />
              <input
                type="text"
                required
                placeholder="Amount per grams"
                class="border w-48 p-1 px-3"
              />
              <button
                class="mb-4 p-2 bg-violet-900 text-violet-200 px-10 font-semibold rounded-md max-h-10 duration-150 active:scale-110 active:bg-violet-200 active:text-violet-900"
              >
                ADD
              </button>
            </div>
          </div>
          <div id="CurrentWeight">
            <h3 class="w-full text-center text-lg font-semibold mt-3">
              Add current weight
            </h3>
            <p class="text-center">Add your weight to get relevant Facts</p>
            <div class="w-full justify-center flex flex-wrap gap-2 mt-3">
              <input type="date" v-model="date" class="border w-48 p-1 px-3" />
              <input
                type="text"
                placeholder="Current weight"
                class="border w-48 p-1 px-3"
              />
              <button
                class="mb-4 p-2 bg-violet-900 text-violet-200 px-10 font-semibold rounded-md max-h-10 duration-150 active:scale-110 active:bg-violet-200 active:text-violet-900"
              >
                ADD
              </button>
            </div>
          </div>
        </div>
        <div
          id="Facts"
          class="flex flex-wrap max-w-5xl w-full p-6 gap-3 justify-center"
        >
          <h1 class="w-full text-center text-3xl">Facts</h1>
          <div id="tile1" class="border w-44 p-3 py-4">
            <h1 class="w-full text-center text-bold text-xl">
              Remaning Calories
            </h1>
            <p class="w-full text-center my-3 text-bold text-2xl">{number}</p>
            <p class="w-full text-center">{0} already used</p>
          </div>
          <div id="tile2" class="border w-44 py-4">
            <h1 class="w-full text-center text-bold text-xl">Recent Loss</h1>
            <p class="w-full text-center my-3 text-bold text-2xl">
              {number} KG
            </p>
          </div>
          <div id="tile3" class="border w-44 py-4">
            <h1 class="w-full text-center text-bold text-xl">To the goal</h1>
            <p class="w-full text-center my-3 text-bold text-2xl">{number}</p>
            <p class="w-full text-center">to {80}kg</p>
          </div>
          <div id="tile4" class="border w-44 py-4">
            <h1 class="w-full text-center text-bold text-xl">Daily</h1>
            <p class="w-full text-center my-3 text-bold text-2xl">{number}</p>
            <p class="w-full text-center">Days left to get goal</p>
          </div>
          <div id="tile5" class="border w-44 py-4">
            <h1 class="w-full text-center text-bold text-xl">Total loss</h1>
            <p class="w-full text-center my-3 text-bold text-2xl">{number}</p>
            <p class="w-full text-center">From start till now</p>
          </div>
          <div id="tile6" class="border w-44 py-4">
            <h1 class="w-full text-center text-bold text-xl">BMI</h1>
            <p class="w-full text-center my-3 text-bold text-2xl">{number}</p>
            <p class="w-full text-center">Current Body-Mass Index</p>
          </div>
        </div>
      </div>
    </div>

    <!-- DESKTOP -->
    <div
      id="ToolBar"
      class="md:grid hidden justify-between w-full grid-cols-11 grid-rows-1 auto-cols-max"
    >
      <div
        id="content"
        class="w-full p-10 col-span-9 justify-center flex flex-wrap"
      >
        <h1 class="m-2 text-3xl w-full text-center">Hello {user}</h1>

        <Forms />

        <div
          id="Facts"
          class="flex flex-wrap max-w-5xl w-full p-6 gap-3 justify-center"
        >
          <h1 class="w-full text-center text-4xl">Facts</h1>
          <div id="tile1" class="border w-1/4 p-3 py-4">
            <h1 class="w-full text-center text-bold text-xl">
              Remaning Calories
            </h1>
            <p class="w-full text-center my-3 text-bold text-2xl">{number}</p>
            <p class="w-full text-center">{0} already used</p>
          </div>
          <div id="tile2" class="border w-1/4 py-4">
            <h1 class="w-full text-center text-bold text-xl">Recent Loss</h1>
            <p class="w-full text-center my-3 text-bold text-2xl">
              {number} KG
            </p>
          </div>
          <div id="tile3" class="border w-1/4 py-4">
            <h1 class="w-full text-center text-bold text-xl">To the goal</h1>
            <p class="w-full text-center my-3 text-bold text-2xl">{number}</p>
            <p class="w-full text-center">to {80}kg</p>
          </div>
          <div id="tile4" class="border w-1/4 py-4">
            <h1 class="w-full text-center text-bold text-xl">Daily</h1>
            <p class="w-full text-center my-3 text-bold text-2xl">{number}</p>
            <p class="w-full text-center">Days left to get goal</p>
          </div>
          <div id="tile5" class="border w-1/4 py-4">
            <h1 class="w-full text-center text-bold text-xl">Total loss</h1>
            <p class="w-full text-center my-3 text-bold text-2xl">{number}</p>
            <p class="w-full text-center">From start till now</p>
          </div>
          <div id="tile6" class="border w-1/4 py-4">
            <h1 class="w-full text-center text-bold text-xl">BMI</h1>
            <p class="w-full text-center my-3 text-bold text-2xl">{number}</p>
            <p class="w-full text-center">Current Body-Mass Index</p>
          </div>
        </div>
      </div>

      <div class="flex justify-end w-full col-span-2 h-96">
        <div class="w-48 bg-violet-200 rounded-bl-lg">
          <div class="flex justify-end py-5">
            <ul class="pt-4 w-2/3 text-violet-900 font-semibold text-xl">
              <li>
                <a
                  class="p-2 pr-6 w-full rounded-l-lg flex justify-end bg-violet-300 duration-200 active:bg-violet-900 active:text-violet-200 my-3 hover:bg-violet-400"
                  href="#/login"
                >
                  Logout</a
                >
              </li>
              <li>
                <a
                  class="p-2 pr-6 w-full rounded-l-lg flex justify-end bg-violet-300 duration-200 active:bg-violet-900 active:text-violet-200 my-3 hover:bg-violet-400"
                  href="/"
                >
                  Profile</a
                >
              </li>
              <li>
                <a
                  class="p-2 pr-6 w-full rounded-l-lg flex justify-end bg-violet-300 duration-200 active:bg-violet-900 active:text-violet-200 my-3 hover:bg-violet-400"
                  href="/"
                >
                  Settings</a
                >
              </li>
              <li>
                <a
                  class="p-2 pr-6 w-full rounded-l-lg flex justify-end bg-violet-300 duration-200 active:bg-violet-900 active:text-violet-200 my-3 hover:bg-violet-400"
                  href="/"
                >
                  Diet</a
                >
              </li>
              <li>
                <a
                  class="p-2 pr-6 w-full rounded-l-lg flex justify-end bg-violet-300 duration-200 active:bg-violet-900 active:text-violet-200 my-3 hover:bg-violet-400"
                  href="/"
                >
                  Workout</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
