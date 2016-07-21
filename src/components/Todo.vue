<template>
    <li class="list-group-item" v-for="task in tasks">
      <a :class="[ 'todo-item', task.completed  ? 'completed': '' ]" @click="toggleComplete(task)">
          <i class="icon-ok-sign icon-large"></i>
      </a>
      <span>{{ task.title }}</span>
      <a class="delete" @click="deleteTask(task)">
          <span class="glyphicon glyphicon-remove"></span>
      </a>
    </li>
</template>

<script>
export default {
    props: ['tasks'],
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

<style scoped>
    .delete {
        float: right;
        cursor: pointer;
    }

    .todo-item {
        margin-right: 30px;
        cursor: pointer;
        text-decoration: none;
        color: #eee;
    }

    .completed {
        color: green;
    }

    .completed + span {
        text-decoration: line-through;
    }
</style>
