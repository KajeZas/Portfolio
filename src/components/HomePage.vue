<template>
  <div class="hello">
    <div id="content" class="d-flex" style="justify-content: space-between;">
      <div
        id="text"
        style="max-width: 605px; letter-spacing: 10px"
        class="d-flex ml-auto"
      >
        <h1 style="font-size: 80px" class="text-left mt-5">
          Bring your brand to life with our help
        </h1>
      </div>
      <div id="image" class="d-flex text-right align-item-end">
        <b-avatar
          :src="photo"
          size="40rem"
          
        ></b-avatar>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomePage",
  props: {
    msg: String,
  },
  data() {
    return {
      photo: require("@/assets/ProfilePicture.jpg"),
    };
  },
};
</script>
