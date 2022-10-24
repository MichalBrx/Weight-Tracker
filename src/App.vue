<script>
export default {
  name: 'App',
  components: {

  },
  methods: {
    openNav() {
        document.getElementById("mySidenav").style.width = "250px";
    },
    closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }
  }
}



</script>

<template>
  <div id="container">

    <div id="NavBar" class="w-full h-16 bg-violet-900 flex justify-center items-center text-white font-semibold text-2xl font-mono px-3 md:px-60 ">
      <h1 class="w-full flex justify-center">Weight Tracker</h1>
      <label class="drawer-button btn btn-primary md:hidden">
        <button class="material-icons"  @click="openNav()">menu</button>
      </label>

    </div>

  <!-- MOBILE -->
    <div id="mySidenav" class="fixed w-0 top-0 right-0 overflow-x-hidden pt-16 duration-150 z-10  bg-violet-200 shadow-md h-full md:hidden">
      <div class="flex w-full justify-start ml-5">
        <a class="p-2 block duration-75 h-10 w-10  text-4xl z-20" @click="closeNav()">&times;</a>
      </div>
      <div class="flex justify-end w-full">
      <ul class="menu pt-4 w-2/3 text-violet-900 font-semibold text-xl">
        <li><a class="p-2 pr-6 duration-75 w-full rounded-l-lg flex justify-end" href="#">Login</a></li>
      </ul>
      </div>
    </div>

  <!-- DESKTOP -->
    <div id="ToolBar" class="md:grid hidden justify-between w-full grid-cols-11 grid-rows-1 auto-cols-max"> 

        <div id="content" class="w-full p-10 col-span-9">
          <h1 class="m-5 text-xl">Hello {user}</h1>
          <div id="Forms" class="flex gap-6">
            <div id="CaloriesForm" class="w-full shadow-lg flex justify-center flex-wrap">
              <h3 class="w-full text-center text-lg font-semibold">Add Calories</h3>
              <div class="flex justify-center flex-wrap m-2 mb-5">
                <input type="text" placeholder="Name of food" class="border w-44 p-1 px-3 m-1" />
                <input type="date" class="border w-44 p-1 px-3 m-1"  />
                <input type="text" placeholder="Calories per 100 g/ml" class="border w-44 p-1 px-3 m-1" />
                <input type="text" placeholder="Amount per grams" class="border w-44 p-1 px-3 m-1" />
              </div>
              <button class="mb-4 p-2 bg-violet-900 text-violet-200 px-10 font-semibold rounded-md max-h-10">ADD</button>
            </div>
            <div id="CurrentWeight" class="w-full shadow-lg flex justify-center flex-wrap">
              <h3 class="w-full text-center text-lg font-semibold">Add current weight</h3>
              <div class="flex justify-center w-full flex-wrap m-2 mb-5">
                <input type="date"  class="border w-full p-1 px-3 m-1" />
                <input type="text" placeholder="Current weight" class="border w-full p-1 px-3 m-1" />
              </div>
                <button class="mb-4 p-2 bg-violet-900 text-violet-200 px-10 font-semibold rounded-md max-h-10 self-end">ADD</button>
            </div>
          </div>
          <div id="Facts">
            <div id="tile1"></div>
            <div id="tile2"></div>
            <div id="tile3"></div>
            <div id="tile4"></div>
            <div id="tile5"></div>
            <div id="tile6"></div>
          </div>
        </div>

        <div class="flex justify-end w-full col-span-2">
          <div class="w-48 h-96 bg-violet-200 ">
            <div class="flex justify-end py-5">
              <ul class="pt-4 w-2/3 text-violet-900 font-semibold text-xl">
                <li><a class="p-2 pr-6  w-full rounded-l-lg flex justify-end bg-violet-300 duration-200 active:scale-110 active:bg-violet-900 active:text-violet-200" href="#">Login</a></li>
              </ul>
            </div>
          </div>
        </div>
    </div>


        <!-- <div id="content" class="w-full">
          <h1>Hello {user}</h1>
          <div id="Forms">
            <div id="CaloriesForm"></div>
            <div id="CurrentWeight"></div>
          </div>
          <div id="Facts">
            <div id="tile1"></div>
            <div id="tile2"></div>
            <div id="tile3"></div>
            <div id="tile4"></div>
            <div id="tile5"></div>
            <div id="tile6"></div>
          </div>
        </div> -->


  </div>
</template>


