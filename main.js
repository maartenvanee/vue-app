Vue.component( 'person', {
    props: ['person'],
    methods: {
        incrementAge(person) {
            console.log('incrementAge');
            person.age += 10;
        }
    },
    template: `
        <div>
            <h2>Name {{person.first}} {{person.last}}</h2>
            <h2>Age {{person.age}}</h2>
            <button v-on:click="person.age += 1">+1 year</button>
            <button v-on:click="person.age -= 1">-1 year</button>
            <button v-on:click="incrementAge(person)">+10</button>
        </div>
    `
})


const app = new Vue({
    el: "#app",
    data: {
        persons: [
            {
                first: "Maarten",
                last: "van Ee",
                age: 31,
            },
            {
                first: "Eline",
                last: "van Ee",
                age: 26,
            }
        ],
        words: ['Consectetur', 'Ornare', 'Purus']
    },
    template: `
        <div>
            <person v-for="person in persons" v-bind:person="person"/>
            <p v-for="word in words">{{word}}</p>
        </div>
    `
});