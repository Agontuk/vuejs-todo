<template>
    <ul class="list-group">
        <todo :tasks="tasks"></todo>
    </ul>
</template>

<script>
import Todo from './Todo';

export default {
    props: ['tasks'],
    components: {
        Todo
    },
    methods: {
        toggleComplete: function (task) {
            this.$parent.toggleComplete(task);
        },
        deleteTask: function (task) {
            this.$parent.deleteTask(task);
        }
    }
}
</script>
