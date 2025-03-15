<script setup>
import { ref } from 'vue';

import AppMenuItem from './AppMenuItem.vue';

const model = ref([
    {
        label: 'Hierarchy',
        items: [
            {
                label: 'JAVA',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'CORE JAVA',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'MULTI THREADING', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'MEMORY MANAGEMENT & GC', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'JAVA 8-11-17-21 FARKLAR', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    },
                    {
                        label: 'SPRING FRAMEWORK',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'SPRING BOOT 2-3 FARKLAR', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'SPRING MVC', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'SPRING SECURITY', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'SPRING DATA', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'ANOTASYONLAR & SPRING ANOTASYONLAR', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    },
                    {
                        label: 'MİKRO SERVİSLER',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'API GATEWAY', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'SERVICE DISCOVERY (EUREKA, CONSUL)', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'CONFIG SERVER', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'CIRCUIT BREAKER (RESILIENCE4J)', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    },
                    {
                        label: 'MESSAGING',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'RABBITMQ', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'KAFKA', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    },
                    {
                        label: 'TESTING',
                        icon: 'pi pi-fw pi-bookmark',
                        items: [
                            { label: 'UNIT TEST & JUNIT', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'MOCKITO', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'INTEGRATION TESTING', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    }
                ]
            },
            {
                label: 'DATABASE',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    { label: 'SQL (ORACLE, POSTGRESQL, MYSQL)', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'NOSQL (MONGODB, REDIS, CASSANDRA)', icon: 'pi pi-fw pi-bookmark' }
                ]
            },
            {
                label: 'CLOUD',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    { label: 'AWS', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'AZURE', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'GCP', icon: 'pi pi-fw pi-bookmark' }
                ]
            },
            {
                label: 'DEVOPS',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    { label: 'JENKINS', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'DOCKER', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'KUBERNETES', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'TERRAFORM', icon: 'pi pi-fw pi-bookmark' }
                ]
            },
            {
                label: 'LOGGING & MONITORING',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    { label: 'ELASTICSEARCH', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'KIBANA', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'GRAFANA', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'PROMETHEUS', icon: 'pi pi-fw pi-bookmark' }
                ]
            },
            {
                label: 'TOOLS & BEST PRACTICES',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    { label: 'GIT & GIT FLOW', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'DESIGN PATTERNS', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'CLEAN CODE & SOLID PRINCIPLES', icon: 'pi pi-fw pi-bookmark' }
                ]
            },
            {
                label: 'AGILE & METHODOLOGIES',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    { label: 'SCRUM', icon: 'pi pi-fw pi-bookmark' },
                    { label: 'KANBAN', icon: 'pi pi-fw pi-bookmark' }
                ]
            },
            {
                label: 'AI & MACHINE LEARNING FOR JAVA DEVELOPERS',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                    {
                        label: 'AI ENTEGRASYONU',
                        icon: 'pi pi-fw pi-link',
                        items: [
                            { label: 'HUGGING FACE API KULLANIMI', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'OPENAI API (GPT, DALLE)', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'LANGCHAIN JAVA (AGENT & TOOL)', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    },
                    {
                        label: 'VERİ İŞLEME & NLP',
                        icon: 'pi pi-fw pi-align-left',
                        items: [
                            { label: 'TEXT PROCESSING (BERT, TRANSFORMERS)', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'ELASTICSEARCH VEKTÖR ARAMA', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    },
                    {
                        label: 'AI SERVİS VE MODEL DAĞITIMI',
                        icon: 'pi pi-fw pi-cloud-upload',
                        items: [
                            { label: 'ONNX RUNTIME JAVA', icon: 'pi pi-fw pi-bookmark' },
                            { label: 'FASTAPI BACKEND ENTEGRASYONU', icon: 'pi pi-fw pi-bookmark' }
                        ]
                    }
                ]
            }
        ]
    }
]);

</script>

<template>
    <ul class="layout-menu">
        <template v-for="(item, i) in model" :key="item">
            <app-menu-item v-if="!item.separator" :item="item" :index="i"></app-menu-item>
            <li v-if="item.separator" class="menu-separator"></li>
        </template>
    </ul>
</template>

<style lang="scss" scoped></style>
