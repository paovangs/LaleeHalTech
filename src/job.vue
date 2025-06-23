<template>
    <NavbarPage/>
    <div class="line"></div>
    <div class="box-main">
        <BannerPage/>
        <BoxCardCompnent/>
        <AgentJobPage/>
        <SuperComponent/>
    </div>
</template>

<script lang="ts" setup>
    import NavbarPage from './components/Navbar.component.vue'
    import BannerPage from './components/Banner.component.vue'
    import BoxCardCompnent from './components/Card.component.vue'
    import AgentJobPage from './components/Agent.component.vue'
    import SuperComponent from './components/Super.component.vue'
    
</script>

<style lang="scss" scoped>


.line {
    height: 4px;
    background-color: darkorange;
    width: 95%;
    margin: 0 auto;
}

.box-main {
    padding: 0 120px;
}
</style>