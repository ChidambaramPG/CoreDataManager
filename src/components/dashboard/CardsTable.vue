<template>
  <div class="row">
    <div class="col-12">
      <div class="m-b-20">
        <!-- <div class="card-body">
          
        </div> -->
        <datatable
            :columns="allColumns"
            :initialColumns="defaultColumns"
            :rows="allCards"
            :title="'Cards'"
          >
            <template slot="tbody-tr" scope="props">
              <td>
                  <div>
                      <a href="#" 
                      class="btn btn-primary btn-sm" 
                      @click="() => showEditCard(props.row)"
                    style="background-color:#f16c69;border: 1px solid #f16c69;font-size:12px;border-radius: 3px;"  
                    >Edit</a>
                    </div>
                <!-- <button
                  class="btn darken-2 waves-effect waves-light compact-btn"
                  @click="() => showEditCard(props.row)"
                >
                  <i
                    class="medium material-icons white-text"
                    style="color:#ff5252;"
                    >edit</i
                  >
                </button> -->
              </td>
            </template>
          </datatable>
      </div>
    </div>
    <!-- end col -->
  </div>
</template>

<script>
import DataTable from "vue-materialize-datatable";
import firebase from "firebase";
export default {
  name: "CardsTable",
  data() {
    return {
      allColumns: [],
      defaultColumns: [
        {
          field: "Firstname",
          label: "cFirstname",
          numeric: false,
          html: false
        },
        { field: "Lastname", label: "cLastname", numeric: false, html: false },
        {
          field: "Designation",
          label: "cDesignation",
          numeric: false,
          html: false
        },
        {
          field: "Organization",
          label: "cOrganization",
          numeric: false,
          html: false
        },
        { field: "Email", label: "cEmail", numeric: false, html: false },
        { field: "Phone", label: "cPhone", numeric: false, html: false },
        { field: "ctions", label: "Actions", numeric: false, html: false }
      ],
      allCards: []
    };
  },

  components: {
    datatable: DataTable
  },
  methods: {
    removeInitialC(str) {
      if (str[0] === "c" && str[1] === str[1].toUpperCase()) {
        return str.slice(1);
      } else {
        return str;
      }
    }
  },
  created() {
    firebase
      .firestore()
      .collection("Cards")
      .where("status", "==", "active")
      .onSnapshot(resp => {
        let cards = [];
        resp.forEach(item => {
          cards.push({ ...item.data(), cid: item.id, selected: false });
        });

        this.allCards = cards;

        if (this.allCards != undefined) {
          let keys = Object.keys(this.allCards);
          let temp = [];
          keys.slice(2).forEach(item => {
            // if(state.tableColumns.includes(item)){
            temp.push({
              label: this.removeInitialC(item),
              field: item,
              numeric: false,
              html: false
            });
            // }
          });
          // console.log(temp)
          this.allColumns = temp;
        }
      });
  }
};
</script>

<style></style>
