<template>
    <q-page class="q-ma-md">
    <span class="text-h3">Flex</span>
    <q-separator spaced />
    <div class="row q-mb-md">
      <div class="col bg-primary"></div>
      <div class="col bg-secondary"></div>
      <div class="col bg-warning"></div>
    </div>

    <div class="row q-mb-md justify-center">
      <!--solo 12 espacios-->
      <div class="col col-4 bg-secondary"></div>
      <div class="col col-4 bg-warning"></div>
    </div>

    <div class="row q-mb-md justify-end">
      <div class="col col-4 bg-secondary"></div>
      <div class="col col-4 bg-warning"></div>
    </div>

    <div class="row q-mb-md justify-between">
      <div class="col col-4 bg-secondary"></div>
      <div class="col col-4 bg-warning"></div>
    </div>

    <div class="row q-mb-md">
      <div class="col-md-2 col-2 bg-primary">1</div>
      <div class="col-md-2 col-4 bg-secondary">2</div>
      <div class="col-md-2 col-5 bg-warning">3</div>
      <div class="col-md-2 col-4 bg-secondary">4</div>
      <div class="col-md-2 col-6 bg-warning">5</div>
      <div class="col-md-2 col-3 bg-primary">6</div>
    </div>

    <q-separator spaced />

    <div class="row q-mb-md justify-between">
      <div class="col col-12 col-sm-6 col-md-4 bg-secondary"></div>
      <div class="col col-12 col-sm-6 col-md-4 bg-warning"></div>
    </div>

    <q-separator spaced />

    <div class="row q-mb-md">
      <div class="square-box q-mx-md bg-primary"></div>
      <div class="square-box q-mx-md bg-secondary"></div>
      <div class="square-box q-mx-md bg-warning"></div>
    </div>

    <div class="row q-mb-md justify-between">
      <div class="square-box q-mx-md bg-primary"></div>
      <div class="square-box q-mx-md bg-secondary"></div>
      <div class="square-box q-mx-md bg-warning"></div>
    </div>

    <div class="row q-mb-md justify-end">
      <div class="square-box q-mx-md bg-primary"></div>
      <div class="square-box q-mx-md bg-secondary"></div>
      <div class="square-box q-mx-md bg-warning"></div>
    </div>
    <div class="row q-mb-md justify-around">
      <div class="square-box q-mx-md bg-primary"></div>
      <div class="square-box q-mx-md bg-secondary"></div>
      <div class="square-box q-mx-md bg-warning"></div>
    </div>

    <div class="column square-container q-mb-md justify-center bg-dark">
      <div class="square-box q-mx-md bg-primary"></div>
      <div class="square-box q-mx-md bg-secondary"></div>
      <div class="square-box q-mx-md bg-warning"></div>
    </div>

    <div class="column square-container q-mb-md items-center bg-dark">
      <div class="square-box q-mx-md bg-primary"></div>
      <div class="square-box q-mx-md bg-secondary"></div>
      <div class="square-box q-mx-md bg-warning"></div>
    </div>

    <div class="column square-container q-mb-md items-end bg-dark">
      <div class="square-box q-mx-md bg-primary"></div>
      <div class="square-box q-mx-md bg-secondary"></div>
      <div class="square-box q-mx-md bg-warning"></div>
    </div>

    <div
      class="column square-container q-mb-md items-center justify-center bg-dark"
    >
      <div class="square-box q-mx-md bg-primary"></div>
      <div class="square-box q-mx-md bg-secondary"></div>
      <div class="square-box q-mx-md bg-warning"></div>
    </div>

    <div
      class="column square-container q-mb-md items-center justify-between bg-dark"
    >
      <div class="square-box q-mx-md bg-primary"></div>
      <div class="square-box q-mx-md bg-secondary"></div>
      <div class="square-box q-mx-md bg-warning"></div>
    </div>

    <div
      class="column square-container q-mb-md items-center justify-between bg-dark"
    >
      <div class="square-box q-mx-md bg-primary"></div>
      <div class="square-box q-mx-md bg-secondary self-end"></div>
      <div class="square-box q-mx-md bg-warning self-start"></div>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "flex-page",

  setup() {},
};
</script>

<style scoped>
.col,
col-1,
col-2,
col-3,
col-4,
col-5,
col-6,
col-10 col-12 {
  height: 50px;
}

.square-box {
  width: 50px;
  height: 50px;
}

.square-container {
  height: 250px;
}
</style>
