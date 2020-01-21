<template>
  <div class="left side-menu">
    <div class="slimscroll-menu" id="remove-scroll">
      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <!-- Left Menu Start -->
        <ul class="metismenu" id="side-menu">
          <li class="menu-title">Main</li>
          <li>
            <a
              href="index.html"
              class="waves-effect"
              @click.prevent="() => setContentLayout('dashboard')"
            >
              <i class="mdi mdi-home"></i
              >
              <span> Dashboard </span>
            </a>
          </li>

          <li>
            <a href="javascript:void(0);" class="waves-effect"
            @click.prevent="() => setContentLayout('cards')"
              ><i class="mdi mdi-email"></i
              ><span>
                Cards
                </span
            ></a>
          </li>

          <li>
            <a href="javascript:void(0);" class="waves-effect"
            @click.prevent="() => setContentLayout('lists')"
              ><i class="mdi mdi-buffer"></i>
              <span>
                Lists
               </span>
            </a>
          </li>
        </ul>
      </div>
      <!-- Sidebar -->
      <div class="clearfix"></div>
    </div>
    <!-- Sidebar -left -->
  </div>
</template>

<script>
import store from "@/store/index.js";
export default {
  name: "SideBar",
  methods: {
    setContentLayout: page => {
      store.commit("setActivePage", page);
    }
  }
};
</script>

<style></style>
