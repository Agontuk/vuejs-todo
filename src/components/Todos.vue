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
    }
}
</script>
