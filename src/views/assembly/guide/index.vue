<template>
	<div class="content">
		<div class="link">
			npm地址：<a href="https://www.npmjs.com/package/driver.js" target="_blank">https://www.npmjs.com/package/driver.js</a>
		</div>
		<el-divider></el-divider>
		<el-button type="primary" plain @click="getHandle">点击演示</el-button>
		<div id="demo1" class="demo">第一步</div>
		<div id="demo2" class="demo">第二步</div>
		<div id="demo3" class="demo">第三步</div>
		<div id="demo4" class="demo">第四步</div>
	</div>
</template>

<script setup lang="ts" name="guide">
import Driver from "driver.js";
import "driver.js/dist/driver.min.css";
import guide from "./guide";

const $driver = new Driver({
	className: "scoped-class", //包裹driver.js弹窗的类名
	animate: true, // 高亮元素改变时是否显示动画
	allowClose: false, //禁止点击外部关闭
	padding: 10, //  元素与边缘的距离
	doneBtnText: "完成", // 完成按钮标题
	closeBtnText: "关闭", // 关闭按钮标题
	stageBackground: "#fff", // 引导对话的背景色
	nextBtnText: "下一步", // 下一步按钮标题
	prevBtnText: "上一步" // 上一步按钮标题
});
const getHandle = () => {
	$driver.defineSteps(guide);
	$driver.start();
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
