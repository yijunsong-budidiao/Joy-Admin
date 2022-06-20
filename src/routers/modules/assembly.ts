import { RouteRecordRaw } from "vue-router";
import { Layout } from "@/routers/constant";

// 常用组件模块
const assemblyRouter: Array<RouteRecordRaw> = [
	{
		path: "/assembly",
		component: Layout,
		redirect: "/assembly/selectIcon",
		meta: {
			title: "常用组件"
		},
		children: [
			{
				path: "/assembly/selectIcon",
				name: "selectIcon",
				component: () => import("@/views/assembly/selectIcon/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "Icon 选择",
					key: "selectIcon"
				}
			},
			{
				path: "/assembly/batchImport",
				name: "batchImport",
				component: () => import("@/views/assembly/batchImport/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "批量导入数据",
					key: "batchImport"
				}
			},
			{
				path: "/assembly/amap",
				name: "amap",
				component: () => import("@/views/assembly/amap/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "高德地图",
					key: "amap"
				}
			},
			{
				path: "/assembly/cropper",
				name: "cropper",
				component: () => import("@/views/assembly/cropper/index.vue"),
				meta: {
					keepAlive: true,
					requiresAuth: true,
					title: "裁剪图片",
					key: "cropper"
				}
			}
		]
	}
];

export default assemblyRouter;
