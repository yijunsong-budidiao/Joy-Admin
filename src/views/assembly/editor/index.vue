<template>
	<div class="content-box">
		<div class="example">
			<div class="toolbar">
				<pre class="state">{{ state }}</pre>
				<div class="config">
					<p>
						<button @click="state.disabled = !state.disabled">toggle disabled</button>
					</p>
					<p>
						<button @click="state.autofocus = !state.autofocus">toggle autofocus</button>
					</p>
					<p>
						<button @click="state.indentWithTab = !state.indentWithTab">toggle indentWithTab</button>
					</p>
					<p>
						<label for="tabSize">tabSize:</label>
						<input type="range" id="tabSize" min="2" max="10" step="1" v-model.number="state.tabSize" />
					</p>
					<p>
						<label for="backgroundColor">backgroundColor:</label>
						<select name="backgroundColor" id="backgroundColor" v-model="state.backgroundColor">
							<option :value="option" :key="option" v-for="option in ['white', 'red', 'black', 'yellow', 'lawngreen', 'blue']">
								{{ option }}
							</option>
						</select>
					</p>
					<p>
						<label for="language">language:</label>
						<select name="language" id="language" v-model="state.language">
							<option
								:value="option"
								:key="option"
								v-for="option in ['javascript', 'html', 'json', 'markdown', 'cpp', 'java', 'php', 'python', 'rust', 'sql']"
							>
								{{ option }}
							</option>
						</select>
					</p>
					<p>
						<label for="theme">theme:</label>
						<select name="theme" id="theme" v-model="state.theme">
							<option :value="option" :key="option" v-for="option in ['default', 'oneDark']">
								{{ option }}
							</option>
						</select>
					</p>
				</div>
			</div>
			<div class="content">
				<Codemirror
					class="codemirror"
					ref="cm"
					:autofocus="state.autofocus"
					:placeholder="state.placeholder"
					:indentWithTab="state.indentWithTab"
					:tabSize="state.tabSize"
					:disabled="state.disabled"
					:style="{ backgroundColor: state.backgroundColor }"
					:extensions="extensions"
					v-model="code"
					@ready="consoleLog('ready', $event)"
					@change="consoleLog('change', $event)"
					@focus="consoleLog('focus', $event)"
					@blur="consoleLog('blur', $event)"
				/>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts" name="editor">
import { reactive, shallowRef, computed, onMounted } from "vue";
import { javascript } from "@codemirror/lang-javascript";
import { html } from "@codemirror/lang-html";
import { json } from "@codemirror/lang-json";
import { markdown } from "@codemirror/lang-markdown";
import { cpp } from "@codemirror/lang-cpp";
import { java } from "@codemirror/lang-java";
import { php } from "@codemirror/lang-php";
import { python } from "@codemirror/lang-python";
import { rust } from "@codemirror/lang-rust";
import { sql } from "@codemirror/lang-sql";
import { oneDark } from "@codemirror/theme-one-dark";
import { Codemirror } from "./packages";
import codeList from "./packages/codeList";

const themes: any = { oneDark };
const languages: any = {
	javascript: javascript(),
	html: html(),
	json: json(),
	markdown: markdown(),
	cpp: cpp(),
	java: java(),
	php: php(),
	python: python(),
	rust: rust(),
	sql: sql()
};

const consoleLog = console.log;
const code = computed(() => {
	const str = codeList[state.language] || "暂无该语言内容";
	return str;
});
const cm = shallowRef();
const state = reactive({
	disabled: false,
	indentWithTab: true,
	tabSize: 2,
	autofocus: true,
	placeholder: "code...",
	backgroundColor: "white",
	language: "javascript",
	theme: "oneDark"
});

const extensions = computed(() => {
	const result = [];
	result.push(languages[state.language]);
	if (themes[state.theme]) {
		result.push(themes[state.theme]);
	}
	return result;
});

onMounted(() => {
	console.log("cm", cm);
});
</script>

<style scoped lang="scss">
@import "./index.scss";
</style>
