<script>
export default {
    name: 'Forms',
    data() {
        return{
            date: new Date().toISOString().substring(0,10),
            time: new Date().toISOString().substring(11,16)
        }
    },
}
</script>

<template >
          <div id="Forms" class="flex gap-6 justify-center">
            <div id="CaloriesForm" class="w-full shadow-lg flex justify-center flex-wrap max-w-lg border-t">
              <h3 class="w-full text-center text-lg font-semibold mt-3">Add Calories</h3>
              <p >Write down what you eat to keep track of your calories</p>
              <div class="flex justify-center flex-wrap m-2 mb-5">
                <input type="text" required placeholder="Name of food" class="border w-48 p-1 px-3 m-1" />
                <input type="time" required id="currentTime" v-model="time"  class="border w-48 p-1 px-3 m-1" />
                <input type="text" required placeholder="Calories per 100 g/ml" class="border w-48 p-1 px-3 m-1" />
                <input type="text" required placeholder="Amount per grams" class="border w-48 p-1 px-3 m-1" />
              </div>
              <button class="mb-4 p-2 bg-violet-900 text-violet-200 px-10 font-semibold rounded-md max-h-10 duration-150 active:scale-110 active:bg-violet-200 active:text-violet-900">ADD</button>
            </div>
            <div id="CurrentWeight" class="w-full shadow-lg flex justify-center flex-wrap max-w-lg border-t">
              <h3 class="w-full text-center text-lg font-semibold mt-3">Add current weight</h3>
              <p>Add your weight to get relevant Facts</p>
              <div class="flex justify-center w-full flex-wrap m-2 mb-5">
                <input type="date" v-model="date"  class="border w-full p-1 px-3 m-1" />
                <input type="text" placeholder="Current weight" class="border w-full p-1 px-3 m-1" />
              </div>
                <button class="mb-4 p-2 bg-violet-900 text-violet-200 px-10 font-semibold rounded-md max-h-10 self-end duration-200 active:scale-110 active:bg-violet-200 active:text-violet-900">ADD</button>
            </div>
          </div>
</template>

