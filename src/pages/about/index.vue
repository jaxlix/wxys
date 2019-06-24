<template>
    <div>
        <Header title="关于"></Header>
        <div>
            <router-link to="/version">
                <span>版本介绍</span>
                <span></span>
            </router-link>
            <router-link to="/contactUs">
                <span>联系我们</span>
                <span></span>
            </router-link>
        </div>
    </div>
</template>
<script>
import Header from '../../components/Header';

export default {
    components: {
        Header
    }
}
</script>