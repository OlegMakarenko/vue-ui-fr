<script>
export default {
    props: ['object'],
    mounted(){
        this.$store.dispatch("createComponent", this);
        console.warn('INSTANCES', this.$store.state.instances)
    },
}
</script>