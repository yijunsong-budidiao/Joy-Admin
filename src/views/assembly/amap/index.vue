<template>
	<div class="content-box">
		<div class="link">
			高德地图api：<a href="https://lbs.amap.com/api/jsapi-v2/summary/" target="_blank"
				>https://lbs.amap.com/api/jsapi-v2/summary/</a
			>
		</div>
		<div id="tip">
			<input type="text" id="keyword" name="keyword" placeholder="请输入关键字：(选定后搜索)" autocomplete="off" />
		</div>
		<div id="container"></div>
	</div>
</template>

<script setup lang="ts" name="amap">
import AMapLoader from "@amap/amap-jsapi-loader";
import { MAP_KEY } from "@/config/config";
import { ref } from "vue";
let mapObj = ref("");
// 注: index.html 需添加安全密钥以获得更多的功能
AMapLoader.load({
	key: MAP_KEY, // 申请好的Web端开发者Key，首次调用 load 时必填
	version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
	plugins: ["AMap.AutoComplete", "AMap.PlaceSearch"] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
})
	.then(AMap => {
		mapObj = new AMap.Map("container", {
			//设置地图容器id
			viewMode: "3D", //是否为3D地图模式
			zoom: 4, //初始化地图级别
			center: [105.602725, 37.076636] //初始化地图中心点位置
		});
		AMap.plugin(["AMap.Autocomplete", "AMap.PlaceSearch"], function () {
			let autoOptions = {
				city: "北京", //城市，默认全国
				input: "keyword" //使用联想输入的input的id
			};
			const autocomplete = new AMap.Autocomplete(autoOptions, function (e: any) {
				console.log(e);
			});
			let placeSearch = new AMap.PlaceSearch({
				city: "北京",
				map: mapObj
			});
			autocomplete.on("select", select); //注册监听，当选中某条记录时会触发
			function select(e: any) {
				placeSearch.setCity(e.poi.adcode);
				placeSearch.search(e.poi.name); //关键字查询查询
			}
		});
	})
	.catch(e => {
		console.log(e);
	});
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
