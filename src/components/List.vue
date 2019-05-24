<template>
    <div class="list-box">
        <div class="name-list">
            <h3>{{eventname}}</h3>
            Date: <h5>{{eventdate}}</h5>
            Place: <h5>{{eventplace}}</h5>
        </div>
        
    </div>
</template>

<script>
export default {
    name: 'List',
    props: {
        eventname: String,
        eventdate: String,
        eventplace: String
    },
    data() {
        return {
            eventname: '',
            eventdate: '',
            eventplace: ''
        }
    }
}
</script>

<style>
    .list-box {
        padding: 10px;
        margin: 20px;
        border-radius: 8px;
        background: white;
        width: 300px;
        height: 230px;
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
        height: 50%;
        background: white;
    }
</style>