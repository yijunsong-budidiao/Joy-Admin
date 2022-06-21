<template>
	<div class="content-box">
		<div class="toolbar">
			颜色：
			<el-color-picker v-model="color" show-alpha />
			粗细：
			<el-slider v-model="penSize" :min="1" :max="50" />
			<el-button class="btn" @click="reset" type="danger">点击清空</el-button>
		</div>

		<div class="wrap">
			<canvas id="can" ref="can" width="800" height="450"></canvas>
		</div>
	</div>
</template>

<script setup lang="ts" name="canvas">
import { onMounted, ref } from "vue";
const can = ref();
const color = ref("#000000");
const penSize = ref(1);
onMounted(() => {
	let ctx = can.value.getContext("2d");
	let poe = "pen";
	//onmousedown  鼠标按下事件
	can.value.onmousedown = function (event: any) {
		ctx.strokeStyle = color.value;
		ctx.lineWidth = penSize.value;
		ctx.lineCap = "round"; //划线起始点圆形
		ctx.lineJoin = "round"; //划线拐点圆角
		if (poe === "pen") {
			ctx.globalCompositeOperation = "source-over";
		} else {
			ctx.globalCompositeOperation = "destination-out";
		}
		//event.clientX   鼠标点下去的那个点距离浏览器可视窗口的水平位移
		//event.clientY  鼠标点下去的那个点距离浏览器可视窗口的垂直位移
		//can.offsetLeft  画布距离浏览器可视窗口的水平位移
		//can.offsetTop  画布距离浏览器可视窗口的垂直位移
		let x = event.clientX - can.value.offsetLeft;
		let y = event.clientY - can.value.offsetTop;
		ctx.beginPath();
		ctx.moveTo(x, y);
		//onmousemove  鼠标移动事件
		can.value.onmousemove = function (event: any) {
			let x = event.clientX - can.value.offsetLeft;
			let y = event.clientY - can.value.offsetTop;
			ctx.lineTo(x, y);
			ctx.stroke();
		};
		//onmouseup鼠标抬起事件
		document.onmouseup = function () {
			can.value.onmousemove = null;
		};
		console.log(ctx);
	};
});

const reset = () => {
	can.value.height = can.value.height;
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
