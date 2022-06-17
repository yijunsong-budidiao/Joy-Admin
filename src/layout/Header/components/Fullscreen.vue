<template>
	<el-tooltip effect="dark" :content="isFullscreen ? $t('header.exitFullScreen') : $t('header.fullScreen')" placement="bottom">
		<i :class="['iconfont', isFullscreen ? 'icon-quxiaoquanping' : 'icon-quanping']" class="icon-style" @click="toggle"></i>
	</el-tooltip>
</template>

<script setup lang="ts">
import { useFullscreen } from "@vueuse/core";
const { toggle, isFullscreen } = useFullscreen();
</script>

<style scoped lang="scss">
@import "../index.scss";
</style>
