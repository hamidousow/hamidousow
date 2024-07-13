import { defineStore } from "pinia";
import { ref } from "vue";

export const useProjectStore = defineStore('project', ()=>  {
    const allProjects = ref()
    const project = ref()

    function getAllProjects() {
        allProjects.value = fetch('url')
    }
})