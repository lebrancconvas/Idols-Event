<template>
    <div class="list-box">
        <div class="name-list">Idol Expo</div>
    </div>
</template>

<script>
export default {
    name: 'List'
}
</script>

<style>
    .list-box {
        padding: 10px;
        margin: 2%;
        border-radius: 8px;
        background: white;
        width: 20%;
        height: 50%;
        box-shadow: 3px 3px 2px;
        transform: scale(1);
        transition: 0.8s;
    }

    .list-box:hover {
        box-shadow: 3px 4px 3px;
        transform: scale(1.1);
    }

    .name-list {
        font-size: 18px;
        font-family: 'Gulim';
        background: white;
    }
</style>