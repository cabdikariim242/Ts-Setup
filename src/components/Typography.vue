<template>
    <div :class="CustomClass">
       <h1  :class="CustomClass">{{ msg }}
        <span :class="spanclass">{{ span }}</span>

       </h1>


    </div>
</template>

<script lang="ts">
export default{
    props:{
        CustomClass:{
            type:String,
            default:''
        },

         spanclass:{
            type:String,
            default:''
        },
        
        msg:{
            type: String,
            default:''

        },
        span:{
            type: String,
            default:''

        },
         span1:{
            type: String,
            default:''

        },
         msg1:{
            type: String,
            default:''

        },

    }
}

</script>