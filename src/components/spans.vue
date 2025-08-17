<template>
    <div :class="spanclass1">
        <span :class="spanclass1">{{ spans }}</span>

    </div>
</template>

<script lang="ts">
export default{
    props:{
    
         spanclass1:{
            type:String,
            default:''
        },
        
        msg1:{
            type: String,
            default:''

        },
        spans:{
            type: String,
            default:''

        },
         
        

    }
}

</script>