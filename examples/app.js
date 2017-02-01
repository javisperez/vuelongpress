new Vue({
    name: 'vue-longpress-example',

    el: '#app',

    components: {
        longpress: VueLongpress
    },

    data: {
        names: ['Stanislav Amalric', 'Melanthios Linas', 'Lubomír Francis', 'Eric Irma', 'Aminah Gaëlle', 'Carrie Hersh', 'Darko Clemens'],
    },

    methods: {
        doDelete(index) {
            this.names.splice(index, 1);

            console.log('That is, it\'s gone!');
        }
    },

    template: `
            <transition-group name="user" class="users" tag="div">
                <div class="card" v-for="(name, index) in names" :key="name">
                    <p>{{ name }}</p>
                    <longpress
                        class="btn btn-primary"
                        :value="index"
                        duration="5"
                        :on-confirm="doDelete"
                        pressing-text="Deleting in {$rcounter}"
                        action-text="Deleting now, please wait....">
                        Delete this user</longpress>
                </div>
            </transition-group>`
});