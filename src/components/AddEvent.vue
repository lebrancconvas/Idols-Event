<template>
    <div>
        <h2>Add Event</h2>
        <textarea name="event" id="event" cols="20" rows="3"></textarea>
        <br>
        <button>Add</button>
    </div>
</template>

<script>
export default {
    name: 'AddEvent'
}
</script>

<style>
    h2 {
        font-size: 19px;
        font-family: 'Segoe Print'
    }
    #event {
        background: white;
        border-radius: 10px;
        box-shadow: 2px 2px 3px;
    }
</style>