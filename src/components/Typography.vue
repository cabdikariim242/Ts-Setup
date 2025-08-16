<template>
    <div :class="CustomClass">
       <h1  :class="CustomClass">{{ msg }}
        <span>{{ span }}</span>
       </h1>


    </div>
</template>

<script lang="ts">
export default{
    props:{
        CustomClass:{
            type:String,
            default:','
        },
        msg:{
            type: String,
            default:','

        },
        span:{
            type: String,
            default:','

        },

    }
}

</script>