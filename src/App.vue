<style lang="sass">

@import "./style.scss"

</style>

<template>

<div id="app">
    <router-view></router-view>
</div>

</template>

<script type="text/javascript">

import index from './views/indexView.vue'

export default {
    components: {
        index
    }
}

</script>
