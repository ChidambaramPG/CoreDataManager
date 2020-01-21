<template>
  <div class="row">
    <div class="col-xl-3 col-md-6">
      <div class="card bg-primary mini-stat position-relative">
        <div class="card-body">
          <div class="mini-stat-desc">
            <h6 class="text-uppercase verti-label text-white-50">Cards</h6>
            <div class="text-white">
              <h6 class="text-uppercase mt-0 text-white-50">Cards</h6>
              <h3 class="mb-3 mt-0">1,587</h3>
              <div class="">
                <span class="badge badge-light text-info"> +11% </span>
                <span class="ml-2">From previous period</span>
              </div>
            </div>
            <div class="mini-stat-icon">
              <i class="mdi mdi-cube-outline display-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6">
      <div class="card bg-primary mini-stat position-relative">
        <div class="card-body">
          <div class="mini-stat-desc">
            <h6 class="text-uppercase verti-label text-white-50">Lists</h6>
            <div class="text-white">
              <h6 class="text-uppercase mt-0 text-white-50">Lists</h6>
              <h3 class="mb-3 mt-0">$46,785</h3>
              <div class="">
                <span class="badge badge-light text-danger"> -29% </span>
                <span class="ml-2">From previous period</span>
              </div>
            </div>
            <div class="mini-stat-icon">
              <i class="mdi mdi-buffer display-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6">
      <div class="card bg-primary mini-stat position-relative">
        <div class="card-body">
          <div class="mini-stat-desc">
            <h6 class="text-uppercase verti-label text-white-50">Users</h6>
            <div class="text-white">
              <h6 class="text-uppercase mt-0 text-white-50">Users</h6>
              <h3 class="mb-3 mt-0">15.9</h3>
              <div class="">
                <span class="badge badge-light text-primary"> 0% </span>
                <span class="ml-2">From previous period</span>
              </div>
            </div>
            <div class="mini-stat-icon">
              <i class="mdi mdi-tag-text-outline display-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col-xl-3 col-md-6">
      <div class="card bg-primary mini-stat position-relative">
        <div class="card-body">
          <div class="mini-stat-desc">
            <h6 class="text-uppercase verti-label text-white-50">Tags</h6>
            <div class="text-white">
              <h6 class="text-uppercase mt-0 text-white-50">Tags</h6>
              <h3 class="mb-3 mt-0">1890</h3>
              <div class="">
                <span class="badge badge-light text-info"> +89% </span>
                <span class="ml-2">From previous period</span>
              </div>
            </div>
            <div class="mini-stat-icon">
              <i class="mdi mdi-briefcase-check display-2"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "cardsStats"
};
</script>

<style scoped>
.bg-primary{
  background-color:#f16c69 !important;
}
</style>
