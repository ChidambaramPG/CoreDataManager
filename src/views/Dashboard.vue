<template>
	 <div id="wrapper">

            <!-- Top Bar Start -->
            <top-bar/>
            <!-- Top Bar End -->

            <!-- ========== Left Sidebar Start ========== -->
            <side-bar/>
            <!-- Left Sidebar End -->

            <!-- ============================================================== -->
            <!-- Start right Content here -->
            <!-- ============================================================== -->
            <div class="content-page">
                <!-- Start content -->
                <div class="content">
                    <div class="container-fluid">

                        <div class="row">
                            <div class="col-sm-12">
                                <div class="page-title-box">
                                    <h4 class="page-title">Dashboard</h4>
                                    <ol class="breadcrumb">
                                        <li class="breadcrumb-item active">Welcome to Agroxa Dashboard</li>
                                    </ol>
            
                                    <div class="state-information d-none d-sm-block">
                                        <div class="state-graph">
                                            <div id="header-chart-1"></div>
                                            <div class="info">Balance $ 2,317</div>
                                        </div>
                                        <div class="state-graph">
                                            <div id="header-chart-2"></div>
                                            <div class="info">Item Sold 1230</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end row -->

                        <div class="page-content-wrapper">
                            <cards-stats/>
                            <!-- end row -->
                            
                            <latest-cards v-if="getActivePage == 'dashboard'"/>
                            <cards-table v-else-if="getActivePage == 'cards'"/>
        
                        </div>
                        <!-- end page content-->

                    </div> <!-- container-fluid -->

                </div> <!-- content -->

            </div>

        </div>
	
</template>
<script>
import store from "@/store/index.js";
import TopBar from "@/components/common/TopBar.vue";
import SideBar from "@/components/common/SideBar.vue";
import CardsStats from "@/components/dashboard/CardsStats.vue";
import LatestCards from "@/components/dashboard/LatestCards.vue";
import CardsTable from "@/components/dashboard/CardsTable.vue";

export default{
	name:'Dashboard',
	components:{
        TopBar,
        SideBar,
        CardsStats,
        LatestCards,
        CardsTable
    },
    computed:{
        getActivePage(){
            return store.state.activePage
        }
    }
};
</script>
<style>
	
</style>