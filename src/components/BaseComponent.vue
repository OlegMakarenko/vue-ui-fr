<script>
export default {
    props: ['object'],
    created(){
        this.$store.dispatch("createComponent", this);
        console.warn('INSTANCES', this.$store.state.instances)
    },
}
</script>