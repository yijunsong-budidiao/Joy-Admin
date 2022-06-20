<template>
	<div class="content-box">
		<div class="link">
			文档地址：<a href="https://ckang1229.gitee.io/vue-markdown-editor/zh/quick-start.html" target="_blank"
				>https://ckang1229.gitee.io/vue-markdown-editor/zh/quick-start.html</a
			>
		</div>
		<div class="markdown">
			<el-button class="btn" type="primary" plain @click="submit">点击提交</el-button>
			<v-md-editor v-model="content" height="400px"></v-md-editor>
		</div>
	</div>
</template>

<script setup lang="ts" name="markdown">
import { ref } from "vue";
import { ElMessageBox } from "element-plus";
const content = ref(`
## 欢迎使用markdown
+ 简单
+ 好用
`);
const submit = () => {
	ElMessageBox.alert(JSON.stringify(content.value), "提交内容", {
		confirmButtonText: "OK",
		callback: () => {}
	});
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
