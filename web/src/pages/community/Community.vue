<template>
    <div id="app">

        <div>
            <child1 :name='name' v-model="name"></child1>
            <p>{{name}}</p>
        </div>
        <h1>11111111111111</h1>
    </div>
</template>
<script>
    const child1 = () => import("../../components/demo.vue");
    export default {
        components: { child1 },
        data() {
            return {
                name: 'Demi'
            };
        },
    };
</script>
