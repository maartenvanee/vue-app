Vue.component('person', {
    props: ['person'],
    methods: {
        incrementAge(person) {
            console.log('incrementAge');
            person.age += 10;
        }
    },
    template: `
        <div>
            <h2>Name: {{person.first}} {{person.last}}</h2>
            <h2>Age: {{person.age}} <span v-if="person.age > 60">(Old)</span></h2>
            <button v-on:click="person.age += 1">+1 year</button>
            <button v-on:click="person.age -= 1">-1 year</button>
            <button v-on:click="incrementAge(person)">+10</button>
            <br>
            <br>
            <br>
        </div>
    `
})


const app = new Vue({
    el: "#app",
    data: {
        title: "Vue app test",
        persons: [
            {
                id: 1,
                first: "Fermentum",
                last: "Porta",
                age: 31,
            },
            {
                id: 2,
                first: "Malesuada",
                last: "Fusce",
                age: 26,
            }
        ],
        words: ['Consectetur', 'Ornare', 'Purus']
    },
    template: `
        <div>
            <h1>{{title}}</h1>
            <br>
            <person v-for="person in persons" v-bind:person="person" v-bind:key="person.id"/>
            <br>
            <br>
            <p v-for="word in words">{{word}}</p>
        </div>
    `
});