    <template>
      <div >
        <div>

          <div class="flex lg:flex-row md:flex-row  flex-col gap-4 b w-full ">
            <div class="flex flex-col w-full ">
              <Label label="Name" :labelClass="'text-blue-600 mb-5 mt-5'" id="text" :required="true" />

              <Input title="Name" type="Name" v-model="text"
                :customClass="'p-4 focus:outline-none focus:ring border dark:text-black '" />
            </div>

            <div class="flex flex-col  w-full  ">
              <Label label="Second Name" :labelClass="'text-blue-600 mb-5 mt-5'" id="text" :required="false" />

              <Input title="Second Name" type="text" v-model="SecondName"
                :customClass="'p-4 focus:outline-none focus:ring border dark:text-black'" />

            </div>
            <div class="flex flex-col ">
              <Label label="Email" :labelClass="'text-blue-600 mb-5 mt-5'" id="text" :required="false" />

              <Input title="Email" type="email" v-model="email"
                :customClass="'p-4 focus:outline-none focus:ring border dark:text-black'" />
              <p>{{ email }}</p>

            </div>


            <div class="flex flex-col ">
              <Label label="password" :labelClass="'text-blue-600 mb-5 mt-5'" id="text" :required="true" />

              <Input title="password" type="password" v-model="password"
                :customClass="'p-4 focus:outline-none focus:ring border dark:text-black'" />
              <p>{{ password }}</p>
            </div>
          </div>

        </div>


      </div>

    </template>

    <script>  
    
import { defineComponent } from "vue";
    import Input  from '@/components/input-comp.vue'
    import Label from '@/components/labelComp.vue'


    export default defineComponent({
      components:
      {Input, Label},
      data(){
        return{
        customClass:'',
        Name:'',
        text:'',
        SecondName:'',
        password:'',
        email:'',
        title: '',
        modelValue: '',
        type: null,
        labelClass:'',
        id:'',
        required:true,
        label:''


    }
      }}
    )


</script>