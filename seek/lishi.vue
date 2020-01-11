<template>
    <div>
        {{list}}
    </div>
</template>

<script>
export default {
    data() {
        return {
            list:JSON.parse(window.localStorage.getItem("his"))
        }
    },
}
</script>