  <template>
    <div :class="customClass">
       <i :class="icon"></i>
       
  <P>{{ alert }}</P>
  <i @click="$emit('cancelAlert')"  :class="icontwo" class=""></i>
   <div class="flex justify-between items-center">
    <h1 class="font-[500] ">{{ alerth }}</h1>
     <p class=" bg-white rounded-[5px] " :class="spanClass"> {{newe}}</p>
       
   </div>
   
  
  <P>{{ alertContent }}</P>
  <slot></slot>

    </div>


    
  

  </template>

  <script lang="ts">

  export default {
    props:{
        alert:{
            type:String,
            default:''
        },
        newe:{
            type:String,
            default:''
        },
        alertContent:{
            type:String,
            default:''
        },
        alerth:{
            type:String,
            default:''
        },
        customClass:{
            type:String,
            default:''
        },
        spanClass:{
            type:String,
            default:''
        },
        iconClass:{
            type:String,
            default:''
        },
         icon: {
      type: String,
      required: true
    },
         icontwo: {
      type: String,
      required: true 
    }
    },

    emits: ['cancelAlert'],

  };
  </script>