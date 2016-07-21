<template>
    <ul class="list-group" v-if="tasks.length">
        <todo :tasks="tasks"></todo>
    </ul>
    <p v-else>No tasks</p>
</template>

<script>
import Todo from './Todo';

export default {
    props: ['tasks'],
    components: {
        Todo
    }
}
</script>
