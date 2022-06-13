<template>
    <div @click="$emit('select')" class="card">
        <div class="container">
            <p>{{ name }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        name: String
    }
}
</script>


<style scoped>
.card {
  /* Add shadows to create the "card" effect */
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 6px; /* 5px rounded corners */
}

/* On mouse-over, add a deeper shadow */
.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
  cursor: pointer;
}

/* Add some padding inside the card container */
.container {
  padding: 2px 16px;
  display: flex;
  flex-direction: row;
  justify-content: left;
}
</style>