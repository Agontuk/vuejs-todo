<template>
  <div class="container">
      <div class="row">
          <div class="col-xs-12 main-content">
              <h1>Todo List</h1>

              <todo-form></todo-form>

              <hr />

              <h1>All Tasks</h1>
              <div id="task-list">

                <todos :tasks="tasks" v-if="tasks.length"></todos>
                <p v-else>No tasks</p>

              </div>
          </div>
      </div>
  </div>
</template>

<script>
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

export default {
    components: {
        TodoForm, Todos
    },
    data: function () {
        return {
            tasks: []
        }
    },
    events: {
        'task-create': function (title) {
            this.tasks.push({
                title: title,
                completed: false
            });
        },
        'toggle-complete': function (data) {
            this.tasks = this.tasks.map((task) => {
                if (task.title === data.title) {
                    task.completed = ! task.completed;
                    return task;
                }

                return task;
            });
        },
        'task-delete': function (data) {
            this.tasks = this.tasks.filter((task) => {
                return task.title !== data.title;
            });
        }
    }
}
</script>
