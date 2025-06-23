<template>
    <NavbarComponent/>
    <div class="main">
        <BannerComponent/>
        <JobProvinceComponents/>
        <JobIndustryComponent/>
        <JobPostComponent/>
        <CompanyFeatureComponent/>
        <CompanyPostConponent/>
        <MakeComponent/>
        <PriceComponent/>
        <JobPostingComponent/>
        <DownloadAppComponent/>
        <FooterComponent/>

        
    </div>
</template>

<script lang="ts" setup>
    import NavbarComponent from './components/Navbar.component.vue';
    import BannerComponent from './components/Banner.component.vue';
    import JobProvinceComponents from './components/JobProvince.components.vue';
    import JobIndustryComponent from './components/JobIndustry.component.vue'; 
    import JobPostComponent from './components/JobPost.component.vue';
    import CompanyFeatureComponent from './components/CompanyFeature.component.vue';
    import CompanyPostConponent from './components/CompanyPost.conponent.vue';
    import MakeComponent from './components/Make.component.vue';
    import PriceComponent from './components/Price.component.vue';
    import JobPostingComponent from './components/JobPosting.component.vue';
    import DownloadAppComponent from './components/DownloadApp.component.vue';
    import FooterComponent from './components/Footer.component.vue';

</script>

<style lang="scss" scoped>
.main {
    padding: 0 100px;
}
</style>
