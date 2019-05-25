<template>
    <div class="add-event-button">
        Add Event
    </div>
</template>

<script>
export default {
    name: 'AddEvent'
}
</script>

<style>
   .add-event-button {
       display: block;
       margin-left: auto;
       margin-right: auto;
       padding: 10px;
       margin: 10px;
       width: 20%;
       height: auto;
       border-radius: 8px;
       background: #ffa358;
       transform: scale(1);
       transition: 0.2s;
    }

    .add-event-button:active {
        transform: scale(.97)
    }
</style>