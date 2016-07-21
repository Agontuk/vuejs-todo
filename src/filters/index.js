import Vue from 'vue';

Vue.filter('filterTask', function (tasks, filter) {
    switch (filter) {
        case 'all':
            return tasks;
        case 'completed':
            return tasks.filter((task) => {
                return task.completed === true;
            });
        case 'active':
            return tasks.filter((task) => {
                return task.completed === false;
            });
    }
});
