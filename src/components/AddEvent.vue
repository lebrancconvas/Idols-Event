<template>
    <div>
        <div id="add-box">
            <form id="form-event">
                <h1>Add Event</h1>
                <div id="event">
                    Name <input v-model="nameevent" :class="[nameevent.length < 1 ? 'empty' : 'fill']" type="text" id="nameevent">
                </div>
                <div id="event">
                    Date <input v-model="dateevent" :class="[dateevent.length < 1 ? 'empty' : 'fill']" type="date" name="" id="dateevent">
                </div>
                <div id="event">
                    Place <input v-model="placeevent" :class="[placeevent.length < 1 ? 'empty' : 'fill']" type="text" id="placeevent">
                </div>
                <div id="submit">Submit</div>
                <div id="cancel" @click="exitAddEvent">Cancel</div>
            </form>
        </div>
        <b-container>
            <b-row>
                <b-col>
                    <div class="add-event-button" @click="showAddEvent">
                        <div class="content-button">Add</div>
                    </div>
                </b-col>
                <b-col>
                    <div class="add-event-button">
                        <div class="content-button">Search</div>
                    </div>
                </b-col>
                <b-col>
                    <div class="add-event-button">
                        <div class="content-button">Reset</div>
                    </div>
                </b-col>
                <b-col></b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
export default {
    name: 'AddEvent',
    data() {
        return {
            nameevent: '',
            dateevent: '',
            placeevent: ''
        }
    },
    methods: {
        showAddEvent: function() {
            document.getElementById('add-box').style.display = 'block'
        },
        exitAddEvent: function() {
            document.getElementById('add-box').style.display = 'none'
        }
    }
}
</script>

<style>
   .add-event-button {
       display: block;
       margin-left: auto;
       margin-right: auto;
       text-align: center;
       padding: 10px;
       margin: 10px;
       width: 50%;
       height: auto;
       border-radius: 8px;
       background: #ffa358;
       box-shadow: 2px 2px 1px;
       transform: scale(1);
       transition: 0.2s;
       cursor: pointer;
    }

    .add-event-button:active {
        box-shadow: 3px 3px 1px 1px;
        transform: scale(.97)
    }

    .content-button {
        font-size: 20px;
        font-family: 'Gulim';
        background: #ffa358;
    }

    #add-box {
        padding: 10px;
        border-radius: 8px;
        background: #0a7cff;
        width: 50%;
        height: auto;
        display: block;
        z-index: 9999;
        overflow: hidden;
        position: absolute;
        display: block;
        margin-left: auto;
        margin-right: auto;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        box-shadow: 2px 2px 1px 1px rgba(0,0,0,0.97);
        transition: 0.2s;
        display: none;
    }

    #event {
        margin: 10px;
        left: 0px;
        background: #ffb20d;
        font-family: 'Gulim';
    }

    #submit {
        margin: 20px;
        background: greenyellow;
        width: 50%;
        border-radius: 9px;
        font-size: 35px;
        font-family: 'KS PUTTARUKSA';
        position: relative;
        display: block;
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;
        transform: scale(1);
    }

    #submit:active {
        transform: scale(.97);
    }

    #cancel {
        margin: 10px;
        background: #ffaaad;
        width: 50%;
        border-radius: 9px;
        font-size: 35px;
        font-family: 'KS PUTTARUKSA';
        position: relative;
        display: block;
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;
        transform: scale(1)
    }

    #cancel:active {
        transform: scale(.97);
    }

    #overlay {
        opacity: 0.8;
        display: none;
        position: fixed;
        background: #fff;
        width: 100%;
        z-index: 10;
    }

    #form-event > h1 {
        font-family: 'Gulim';
    }

    .empty {
        border: 2px solid red;
    }

    .fill {
        border: 2px solid green;
    }
</style>