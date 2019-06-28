<template>
    <div class="breadcrumb">
        <el-breadcrumb separator="/" style="margin-left: 30px;">
            <el-breadcrumb-item :to="{ path: '/' }">Моя Система</el-breadcrumb-item>
            <el-breadcrumb-item><a href="https:/google.com.ua">Мой дом</a></el-breadcrumb-item>
            <el-breadcrumb-item>Кухня</el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    data(){
        return{

        }
    }
}
</script>

<style scoped>

</style>
