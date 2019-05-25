<template>
    <b-container>
        <b-row>
            <b-col>
                <div class="add-event-button">
                    <div class="content-button">Add Event</div>
                </div>
            </b-col>
            <b-col>
                <div class="add-event-button">
                    <div class="content-button">Reset</div>
                </div>
            </b-col>
        </b-row>
    </b-container>
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
       text-align: center;
       padding: 10px;
       margin: 10px;
       width: 20%;
       height: auto;
       border-radius: 8px;
       background: #ffa358;
       transform: scale(1);
       transition: 0.2s;
       cursor: pointer;
    }

    .add-event-button:active {
        transform: scale(.97)
    }

    .content-button {
        font-size: 20px;
        font-family: 'Gulim';
        background: #ffa358;
    }
</style>