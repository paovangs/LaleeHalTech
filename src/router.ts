import { createRouter, createWebHistory  } from "vue-router";
import Job from "./job.vue";
import Test1 from "./test1.vue";
import Home from "./module/Home.vue";
import Package from "./module/Package.vue";
import Test from "./module/components/Test/Test1.component.vue";
import TestFile from './Test.vue'
import Hmoob from "./module/Hmoob.vue";
import Index from "./module/haltech/Index.vue";


const routes = [
    {
        path: "/job",
        name: "job",
        component: Job,
    },
    {
        path: "/test1",
        name: "test1",
        component: Test1,
    },
    {
        path: "/home",
        name: "home",
        component: Home,
    },
    {
        path: "/package",
        name: 'package',
        component: Package,
    },
    {
        path: "/test",
        name: 'test',
        component: Test
    },
    {
        path: "/test-file",
        name: 'test.file',
        component: TestFile
    },
    {
        path: "/hmoob",
        name: 'hmoob',
        component: Hmoob
    },

    {
        path: "/haltech",
        name: 'haltech',
        component: Index
    },



];

const router = createRouter({
    history: createWebHistory(),
    routes,

});
export default router

