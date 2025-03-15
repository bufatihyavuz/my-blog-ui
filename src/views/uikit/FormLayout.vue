<template>
    BU BİR DENEME MAKALESİDİR
    <pre><code class="language-java">{{ code }}</code></pre>
</template>

<script setup>
import { ref, onMounted } from "vue";

const code = ref(`
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`);

onMounted(() => {
    const script = document.createElement("script");
    script.src = "/prism.js";
    script.onload = () => {
        if (window.Prism) {
            window.Prism.highlightAll(); // Tarayıcıya yüklendiğinde çalıştır
        } else {
            console.error("Prism.js yüklenemedi.");
        }
    };
    document.body.appendChild(script);
});
</script>

<style>
@import "/prism.css";
</style>
