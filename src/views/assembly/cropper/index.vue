<template>
	<div>
		<div class="link">
			npm地址：<a href="https://www.npmjs.com/package/vue-cropper" target="_blank">https://www.npmjs.com/package/vue-cropper</a>
			------ `npm i vue-cropper@next -S` 安装vue3版本
		</div>
		<el-upload
			class="avatar-uploader"
			action=""
			:auto-upload="false"
			:show-file-list="false"
			:on-change="codecubeDefaultCoverChange"
		>
			<el-icon class="avatar-uploader-icon"> <component :is="'plus'"></component></el-icon>
		</el-upload>
		<el-dialog v-model="innerVisible" width="30%" title="裁剪封面" append-to-body>
			<template #default>
				<div class="cropper">
					<VueCropper
						ref="cropper"
						:img="option.img"
						:outputType="option.outputType"
						:info="true"
						:canScale="option.canScale"
						:autoCrop="option.autoCrop"
						:autoCropWidth="option.autoCropWidth"
						:autoCropHeight="option.autoCropHeight"
						:fixedBox="option.fixedBox"
						:fixed="option.fixed"
						:fixedNumber="option.fixedNumber"
						:canMove="option.canMove"
						:canMoveBox="option.canMoveBox"
						:original="option.original"
						:centerBox="option.centerBox"
						:infoTrue="option.infoTrue"
						:full="option.full"
						:enlarge="option.enlarge"
						:mode="option.mode"
					>
					</VueCropper>
				</div>
			</template>
			<template #footer>
				<div class="dialog-footer">
					<el-button type="primary" @click="submitInner">确定</el-button>
					<el-button @click="innerVisible = false">取 消</el-button>
				</div>
			</template>
		</el-dialog>
		<div class="crop-imgs-group">
			<h3>图片展示：</h3>
			<div class="crop-img" v-for="item in imgArr" :key="item">
				<img :src="item" alt="" />
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="cropper">
import { reactive, ref } from "vue";
import "vue-cropper/dist/index.css";
import { VueCropper } from "vue-cropper";
import { ElMessage } from "element-plus";
const cropper = ref();
const option = reactive({
	img: "", // 裁剪图片的地址
	outputSize: 1, // 裁剪生成图片的质量
	outputType: "jpeg", // 裁剪生成图片的格式
	info: true, // 裁剪框的大小信息
	canScale: true, // 图片是否允许滚轮缩放
	autoCrop: true, // 是否默认生成截图框
	autoCropWidth: 320, // 默认生成截图框宽度
	autoCropHeight: 180, // 默认生成截图框高度
	fixedBox: false, // 固定截图框大小 不允许改变
	fixed: true, // 是否开启截图框宽高固定比例
	fixedNumber: [16, 9], // 截图框的宽高比例
	canMove: true, // 上传图片是否可以移动
	canMoveBox: true, // 截图框能否拖动
	original: false, // 上传图片按照原始比例渲染
	centerBox: true, // 截图框是否被限制在图片里面
	infoTrue: true, // true 为展示真实输出图片宽高 false 展示看到的截图框宽高
	full: false, // 是否输出原图比例的截图
	enlarge: "1", // 图片根据截图框输出比例倍数
	mode: "contain" // 图片默认渲染方式
});
const imgArr = reactive<string[]>([]);
const innerVisible = ref(false);
const codecubeDefaultCoverChange = (res: any) => {
	const isLt2M = res.raw.size / 1024 / 1024 < 2;

	if (!isLt2M) {
		return ElMessage.error("图片不能超过 2MB!");
	}
	innerVisible.value = true;
	option.img = URL.createObjectURL(res.raw);
};
const submitInner = () => {
	cropper.value.getCropBlob((data: any) => {
		let result: any = new File([data], "cover", { type: "image/jpeg", lastModified: Date.now() });
		imgArr.push(URL.createObjectURL(result));
		innerVisible.value = false;
	});
};
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
