<template>
    <div>
        <form class="form-inline">
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" Placeholder="Task Title" v-model="title" />
            </div>
            <button type="submit" class="btn btn-default" @click.prevent="createTask">Add</button>
        </form>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                title: ''
            }
        },
        methods: {
            createTask: function () {
                if (this.title !== '') {
                    this.$dispatch('task-create', this.title);
                    this.title = '';
                }
            }
        }
    }
</script>
