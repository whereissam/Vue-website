<template>
    <h2>New detail is Page</h2>
    <h2>The job id is {{id}}</h2>
</template>

<script>
export default {
    props:['id'],
    mounted(){
        fetch('http://localhost:3000/news')
            .then((res) => res.json())
            .then(data => this.news = data)
            .catch(err => console.log(err.message))
    }
}
</script>