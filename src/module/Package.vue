<template>
    <NavbarComponent/>
    <div>
        <MenuComponent/>
        <PositionComponent/>
        <BusinessComponent/>
        <CandidateComponent/>
        <ApplyNowComponent/>
        <FlyComponent/>
        <PromptComponent/>
        <QrComponent/>
        

    </div>
</template>

<script lang="ts" setup>
    import NavbarComponent from './components/Navbar.component.vue';
    import MenuComponent from './components/package/Menu.component.vue';
    import PositionComponent from './components/package/Position.component.vue';
    import BusinessComponent from './components/package/Business.component.vue';
    import CandidateComponent from './components/package/Candidate.component.vue';
    import ApplyNowComponent from './components/package/ApplyNow.component.vue';
    import FlyComponent from './components/package/Fly.component.vue';
    import PromptComponent from './components/package/Prompt.component.vue';
    import QrComponent from './components/package/Qr.component.vue';

    
</script>