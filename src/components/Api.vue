<template>
    <div>
        {{info}}
    </div>
</template>

<script>
export default {
    name: "Api",
    data() {
        return {
            info: ''
        }
    },
    mounted() {
        this.$http
            .get('https://opener.now.sh/api/data/234567')
            .then(response => this.info = JSON.stringify(response))
    }
}
</script>

<style lang="css">
    
</style>